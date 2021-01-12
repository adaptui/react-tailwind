import * as React from "react";
import { cx } from "@renderlesskit/react";
import { Button, ButtonProps } from "reakit";

import { CloseIcon } from "../icons";
import { useTheme } from "../theme";
import { useButtonGroup } from "./ButtonGroup";
import { AnyString, forwardRefWithAsSimple } from "../utils/types";

export type IconButtonProps = ButtonProps & {
  /**
   * How large should the button be?
   */
  size?: "xs" | "sm" | "lg" | "xl" | AnyString;
  /**
   * How the button should be styled?
   */
  variant?: "primary" | "secondary" | "outline" | "ghost" | AnyString;
};

export const IconButton = forwardRefWithAsSimple<
  IconButtonProps,
  HTMLButtonElement,
  "button"
>((props, ref) => {
  const { children, size, variant, className, ...rest } = props;

  const group = useButtonGroup();
  const _size = size || group?.size || "lg";
  const _variant = variant || group?.variant || "primary";
  const theme = useTheme();
  const iconButtonStyles = cx(
    theme.iconButton.base,
    theme.iconButton.size[_size],
    theme.iconButton.variant[_variant],
    group ? theme.iconButton.group : "",
    className,
  );
  const _children = React.isValidElement(children)
    ? React.cloneElement(children, {
        "aria-hidden": true,
        focusable: false,
      })
    : children;

  return (
    <Button className={iconButtonStyles} ref={ref} {...rest}>
      {_children}
    </Button>
  );
});

export type CloseButtonProps = IconButtonProps & {};

export const CloseButton = forwardRefWithAsSimple<
  CloseButtonProps,
  HTMLButtonElement,
  "button"
>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <IconButton aria-label="close" ref={ref} {...rest}>
      {children || <CloseIcon />}
    </IconButton>
  );
});
