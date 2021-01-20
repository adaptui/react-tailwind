import * as React from "react";
import { cx } from "@renderlesskit/react";
import { Button, ButtonProps } from "reakit";

import { useTheme } from "../theme";
import { useButtonGroup } from "./ButtonGroup";
import { forwardRefWithAs } from "../utils/types";

export type IconButtonProps = ButtonProps & {
  /**
   * How large should the button be?
   */
  size?: keyof Renderlesskit.GetThemeValue<"button", "size">;
  /**
   * How the button should be styled?
   */
  variant?: keyof Renderlesskit.GetThemeValue<"button", "variant">;
};

export const IconButton = forwardRefWithAs<
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
        role: "img",
      })
    : children;

  return (
    <Button className={iconButtonStyles} ref={ref} {...rest}>
      {_children}
    </Button>
  );
});
