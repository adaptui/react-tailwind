import * as React from "react";
import { Box, BoxProps } from "reakit";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { forwardRefWithAs } from "../utils/types";
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
  const _children = React.isValidElement(children)
    ? React.cloneElement(children, {
        role: "img",
        focusable: false,
        "aria-hidden": true,
      })
    : children;

  const iconStyles = cx(
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
