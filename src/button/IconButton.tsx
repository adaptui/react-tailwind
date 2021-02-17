import {
  Button as ReakitButton,
  ButtonProps as ReakitButtonProps,
} from "reakit";
import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { ButtonProps } from "./Button";
import { useButtonGroup } from "./ButtonGroup";
import { forwardRefWithAs } from "../utils/types";

export type IconButtonProps = ReakitButtonProps &
  Pick<ButtonProps, "size" | "variant"> & {};

export const IconButton = forwardRefWithAs<
  IconButtonProps,
  HTMLButtonElement,
  "button"
>((props, ref) => {
  const {
    size,
    variant,
    disabled = false,
    className,
    style,
    children,
    ...rest
  } = props;

  const group = useButtonGroup();
  const _size = size || group?.size || "md";
  const _variant = variant || group?.variant || "primary";

  const theme = useTheme();
  const iconButtonStyles = cx(
    theme.iconButton.base,
    theme.iconButton.size[_size],
    theme.iconButton.variant[_variant],
    group ? theme.iconButton.group : "",
    disabled ? theme.iconButton.disabled : "",
    className,
  );

  const _children = React.isValidElement(children)
    ? React.cloneElement(children, {
        role: "img",
        focusable: false,
        "aria-hidden": true,
      })
    : children;

  return (
    <ReakitButton
      ref={ref}
      className={iconButtonStyles}
      style={disabled ? { pointerEvents: "unset", ...style } : style}
      {...rest}
    >
      {_children}
    </ReakitButton>
  );
});

IconButton.displayName = "IconButton";
