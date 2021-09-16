import {
  Button as ReakitButton,
  ButtonProps as ReakitButtonProps,
} from "reakit";
import * as React from "react";
import { twMerge as cx } from "tailwind-merge";

import { useTheme } from "../theme";
import { usePrevious } from "../hooks";
import { ButtonChildren } from "./ButtonChildren";
import { forwardRefWithAs } from "../utils/types";
import { announce } from "@react-aria/live-announcer";

export type ButtonProps = Omit<ReakitButtonProps, "prefix"> & {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size?: keyof Renderlesskit.GetThemeValue<"button", "size", "default">;

  /**
   * How the button should look?
   *
   * @default solid
   */
  variant?: keyof Renderlesskit.GetThemeValue<"button", "variant", "default">;

  /**
   * If added, the button will only show an icon ignoring other childrens.
   */
  iconOnly?: React.ReactElement;

  /**
   * If added, the button will show an icon before the button's text.
   */
  suffix?: React.ReactElement;

  /**
   * If added, the button will show an icon before the button's text.
   */
  prefix?: React.ReactElement;

  /**
   * If `true`, the button will show a spinner.
   *
   * @default false
   */
  loading?: boolean;

  /**
   * If added, the button will show this spinner components
   */
  spinner?: React.ReactElement;
};

export const Button = forwardRefWithAs<
  ButtonProps,
  HTMLButtonElement,
  "button"
>((props, ref) => {
  const {
    children,
    size = "md",
    variant = "solid",
    iconOnly,
    suffix,
    prefix,
    loading = false,
    spinner,
    disabled,
    className,
    style,
    ...rest
  } = props;
  const _disabled = disabled || loading;

  const button = useTheme("button");
  const baseStyles = cx(
    button.base,
    !iconOnly ? button.size.default[size] : button.size.iconOnly[size],
    button.variant.default[variant],
    button.variant.hover[variant],
    button.variant.active[variant],
    button.variant.focus[variant],
    button.variant.disabled[variant],
    className,
  );

  const prevLoading = usePrevious(loading);

  React.useEffect(() => {
    if (loading) announce("Started loading");

    if (!loading && prevLoading) announce("Stopped loading");
  }, [loading, prevLoading]);

  return (
    <ReakitButton
      ref={ref}
      className={baseStyles}
      disabled={_disabled}
      {...rest}
    >
      <ButtonChildren
        iconOnly={iconOnly}
        suffix={suffix}
        prefix={prefix}
        size={size}
        loading={loading}
        spinner={spinner}
      >
        {children}
      </ButtonChildren>
    </ReakitButton>
  );
});

Button.displayName = "Button";
