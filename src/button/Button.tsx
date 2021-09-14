import {
  Button as ReakitButton,
  ButtonProps as ReakitButtonProps,
} from "reakit";
import * as React from "react";
import { cx } from "@renderlesskit/react";
import { announce } from "@react-aria/live-announcer";

import { useTheme } from "../theme";
import { usePrevious } from "../hooks";
import { runIfFn, withIconA11y } from "../utils";
import { forwardRefWithAs } from "../utils/types";
import { ButtonFullWidthSpinner, ButtonSpinner } from "./ButtonSpinner";

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
  const suffixStyles = cx(button.suffix.size[size]);
  const prefixStyles = cx(button.prefix.size[size]);

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
      {(!prefix && !suffix) || iconOnly ? (
        loading ? (
          <ButtonFullWidthSpinner
            spinner={spinner}
            iconOnly={iconOnly}
            size={size}
          >
            {iconOnly ? runIfFn(withIconA11y(iconOnly)) : children}
          </ButtonFullWidthSpinner>
        ) : (
          <>{iconOnly ? runIfFn(withIconA11y(iconOnly)) : children}</>
        )
      ) : (
        <>
          {prefix ? (
            loading && !suffix ? (
              <ButtonSpinner spinner={spinner} prefix={prefix} size={size} />
            ) : (
              runIfFn(withIconA11y(prefix, { className: prefixStyles }))
            )
          ) : null}
          <span>{children}</span>
          {suffix ? (
            loading ? (
              <ButtonSpinner spinner={spinner} suffix={suffix} size={size} />
            ) : (
              runIfFn(withIconA11y(suffix, { className: suffixStyles }))
            )
          ) : null}
        </>
      )}
    </ReakitButton>
  );
});

Button.displayName = "Button";
