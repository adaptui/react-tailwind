import * as React from "react";
import { cx } from "@renderlesskit/react";

import { Box, BoxProps } from "../box";
import { useTheme } from "../theme";
import { Avatar, AvatarProps } from "./Avatar";
import { forwardRefWithAs } from "../utils/types";
import { createContext, getValidChildren } from "../utils";
import { AvatarImage } from "./AvatarImage";
import { AvatarName } from "./AvatarName";
import { AvatarIcon } from "./AvatarIcon";
import { GenericAvatar } from "../icons";

export type AvatarGroupProps = BoxProps &
  AvatarGroupContext & { limit?: number };

export const AvatarGroup = forwardRefWithAs<
  AvatarGroupProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const {
    limit = 100,
    size = "md",
    showBorder = true,
    className,
    children,
    ...rest
  } = props;
  const theme = useTheme();
  const excessStyles = cx(theme.avatar.base, theme.avatar.size[size]);
  const context = React.useMemo(() => ({ size, showBorder }), [
    size,
    showBorder,
  ]);

  const validChildren = getValidChildren(children);

  /**
   * get the avatars within the max
   */
  const childrenWithinMax = limit
    ? validChildren.slice(0, limit)
    : validChildren;

  /**
   * get the remaining avatar count
   */
  const excess = limit != null && validChildren.length - limit;

  return (
    <AvatarGroupProvider value={context}>
      <Box
        ref={ref}
        role="group"
        aria-label="Avatar group"
        className={cx(theme.avatar.group.base, className)}
        {...rest}
      >
        {childrenWithinMax}
        {excess > 0 ? (
          <Avatar {...validChildren[limit].props}>
            {({ showFallback, name, fallback }) => {
              return (
                <>
                  {!showFallback ? (
                    <AvatarImage />
                  ) : name ? (
                    <AvatarName />
                  ) : (
                    <AvatarIcon>
                      {fallback ? fallback : <GenericAvatar />}
                    </AvatarIcon>
                  )}
                  <Box className={theme.avatar.group.excess.bg} />
                  <Box
                    className={cx(
                      theme.avatar.group.excess.text.base,
                      theme.avatar.group.excess.text.size[size],
                    )}
                  >
                    +{excess}
                  </Box>
                </>
              );
            }}
          </Avatar>
        ) : null}
      </Box>
    </AvatarGroupProvider>
  );
});

export type AvatarGroupContext = Pick<AvatarProps, "size" | "showBorder"> & {};

const [AvatarGroupProvider, useAvatarGroup] = createContext<AvatarGroupContext>(
  {
    strict: false,
    name: "AvatarGroupProvider",
  },
);

export { useAvatarGroup };
