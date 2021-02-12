import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { GenericAvatar } from "../icons";
import { AvatarName } from "./AvatarName";
import { AvatarIcon } from "./AvatarIcon";
import { AvatarImage } from "./AvatarImage";
import { Avatar, AvatarProps } from "./Avatar";
import { forwardRefWithAs } from "../utils/types";
import { createContext, getValidChildren } from "../utils";

export type AvatarGroupContext = Pick<
  AvatarProps,
  "size" | "showBorder" | "borderColor"
> & {};

const [AvatarGroupProvider, useAvatarGroup] = createContext<AvatarGroupContext>(
  {
    strict: false,
    name: "AvatarGroupProvider",
  },
);

export { useAvatarGroup };

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
    borderColor,
    className,
    children,
    ...rest
  } = props;
  const theme = useTheme();
  const context = React.useMemo(() => ({ size, showBorder, borderColor }), [
    size,
    showBorder,
    borderColor,
  ]);

  const validChildren = getValidChildren(children);

  /**
   * Get the avatars within the max
   */
  const childrenWithinMax = limit
    ? validChildren.slice(0, limit)
    : validChildren;

  /**
   * Get the remaining avatar count
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
          <Avatar
            {...validChildren[limit].props}
            data-testid="testid-truncated"
          >
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
                    +{size === "xs" ? "" : excess}
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
