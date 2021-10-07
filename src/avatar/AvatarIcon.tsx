import { cloneElement, isValidElement } from "react";
import { Box, BoxProps } from "reakit";

import { useTheme } from "../theme";
import { forwardRefWithAs, tcm } from "../utils";

import { useAvatarContext } from "./Avatar";

export type AvatarIconProps = BoxProps & {};

export const AvatarIcon = forwardRefWithAs<
  AvatarIconProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { className, children, ...rest } = props;
  const theme = useTheme();
  const { size = "md" } = useAvatarContext();
  const _children = isValidElement(children)
    ? cloneElement(children, {
        role: "img",
        focusable: false,
        "aria-hidden": true,
      })
    : children;

  const iconStyles = tcm(
    theme.avatar.icon.base,
    theme.avatar.icon.size[size],
    className,
  );

  return (
    <Box
      as="span"
      ref={ref}
      className={iconStyles}
      aria-label="Avatar Icon"
      {...rest}
    >
      {_children}
    </Box>
  );
});

AvatarIcon.displayName = "AvatarIcon";
