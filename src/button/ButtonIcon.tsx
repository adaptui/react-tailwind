import * as React from "react";
import { Box, BoxProps } from "reakit";

import { forwardRefWithAs } from "../utils/types";

export type ButtonIconProps = BoxProps & {};

export const ButtonIcon = forwardRefWithAs<
  ButtonIconProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { children, ...rest } = props;
  const _children = React.isValidElement(children)
    ? React.cloneElement(children, {
        role: "img",
        focusable: false,
        "aria-hidden": true,
      })
    : children;

  return (
    <Box as="span" ref={ref} {...rest}>
      {_children}
    </Box>
  );
});

ButtonIcon.displayName = "ButtonIcon";
