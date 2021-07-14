import {
  Button as ReakitButton,
  ButtonProps as ReakitButtonProps,
} from "reakit";
import * as React from "react";
import { cx } from "@renderlesskit/react";

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
  size?: keyof Renderlesskit.GetThemeValue<"button", "size">;

  /**
   * How the button should look?
   *
   * @default solid
   */
  variant?: keyof Renderlesskit.GetThemeValue<"button", "variant">;

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

  const button = useTheme("button") as Renderlesskit.GetThemeValue<"button">;
  const baseStyles = cx(
    button.base,
    !iconOnly ? button.size[size] : button.iconOnly.size[size],
    button.variant[variant],
    _disabled ? "pointer-events-none" : "pointer-events-auto",
    className,
  );

  const prevLoading = usePrevious(loading);

  React.useEffect(() => {
    if (loading) announce("Started loading...");

    if (!loading && prevLoading) announce("Stopped loading...");
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
