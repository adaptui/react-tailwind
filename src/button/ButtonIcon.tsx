import * as React from "react";
import { Box, BoxProps } from "reakit";

import { forwardRefWithAs } from "../utils/types";

export type ButtonIconProps = BoxProps;

export const ButtonIcon = forwardRefWithAs<
  ButtonIconProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { children, ...rest } = props;

  const _children = React.isValidElement(children)
    ? React.cloneElement(children, {
        "aria-hidden": true,
        focusable: false,
        role: "img",
      })
    : children;

  return (
    <Box as="span" ref={ref} {...rest}>
      {_children}
    </Box>
  );
});