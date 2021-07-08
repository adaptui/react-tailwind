import { cx } from "@renderlesskit/react";
import * as React from "react";
import {
  Button as ReakitButton,
  ButtonProps as ReakitButtonProps,
} from "reakit";
import { useTheme } from "..";
import { forwardRefWithAs } from "../utils/types";

export type ButtonProps = Omit<ReakitButtonProps, "prefix"> & {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size?: keyof Renderlesskit.GetThemeValue<"newButton", "size">;
  /**
   * How the button should look?
   *
   * @default solid
   */
  variant?: keyof Renderlesskit.GetThemeValue<"newButton", "variant">;
};

export const Button = forwardRefWithAs<
  ButtonProps,
  HTMLButtonElement,
  "button"
>((props, ref) => {
  const { children, size = "sm", variant = "solid" } = props;
  const theme = useTheme();
  const { base, size: _size, variant: _variant } = theme.newButton;

  const baseStyles = cx(base, _size[size], _variant[variant]);

  return (
    <ReakitButton className={baseStyles} ref={ref}>
      {children}
    </ReakitButton>
  );
});

Button.displayName = "Button";
