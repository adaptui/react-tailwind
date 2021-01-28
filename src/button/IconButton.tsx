import * as React from "react";
import { cx } from "@renderlesskit/react";
import { Button, ButtonProps } from "reakit";

import { useTheme } from "../theme";
import { useButtonGroup } from "./ButtonGroup";
import { forwardRefWithAs } from "../utils/types";

export type IconButtonProps = ButtonProps & {
  /**
   * How large should the iconButton be?
   *
   * @default "lg"
   */
  size?: keyof Renderlesskit.GetThemeValue<"button", "size">;
  /**
   * How the iconButton should be styled?
   *
   * @default "primary"
   */
  variant?: keyof Renderlesskit.GetThemeValue<"button", "variant">;
};

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
  const _size = size || group?.size || "lg";
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
    <Button
      ref={ref}
      className={iconButtonStyles}
      style={disabled ? { pointerEvents: "unset", ...style } : style}
      {...rest}
    >
      {_children}
    </Button>
  );
});
