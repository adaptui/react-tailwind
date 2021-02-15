import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { createContext, getValidChildren } from "../utils";
import { Avatar, AvatarContents, AvatarProps } from "./Avatar";

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
        <AvatarExcess
          size={size}
          excess={excess}
          {...validChildren[limit].props}
        />
      </Box>
    </AvatarGroupProvider>
  );
});

const AvatarExcess = ({
  excess,
  size = "md",
  ...props
}: AvatarProps & {
  excess: number | false;
}) => {
  const theme = useTheme();

  return excess > 0 ? (
    <Avatar {...props}>
      <>
        <AvatarContents />
        <Box className={theme.avatar.group.excess.bg} />
        <Box
          data-testid="testid-excess_label"
          className={cx(
            theme.avatar.group.excess.text.base,
            theme.avatar.group.excess.text.size[size],
          )}
        >
          +{size === "xs" ? "" : excess}
        </Box>
      </>
    </Avatar>
  ) : null;
};
