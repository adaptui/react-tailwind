import {
  Button as ReakitButton,
  ButtonProps as ReakitButtonProps,
} from "reakit";
import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Spinner } from "../spinner";
import { ButtonIcon } from "./ButtonIcon";
import { useButtonGroup } from "./ButtonGroup";
import { forwardRefWithAs } from "../utils/types";

export type ButtonProps = Omit<ReakitButtonProps, "prefix"> & {
  /**
   * How large should the button be?
   *
   * @default "md"
   */
  size?: keyof Renderlesskit.GetThemeValue<"button", "size">;
  /**
   * How the button should be styled?
   *
   * @default "primary"
   */
  variant?: keyof Renderlesskit.GetThemeValue<"button", "variant">;
  /**
   * If added, the button will show an icon before the button's label.
   */
  prefix?: React.ReactElement;
  /**
   * If added, the button will show an icon before the button's label.
   */
  suffix?: React.ReactElement;
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
    size,
    variant,
    prefix,
    suffix,
    loading = false,
    spinner,
    disabled = false,
    className,
    style,
    children,
    ...rest
  } = props;
  const group = useButtonGroup();
  const _size = size || group?.size || "md";
  const _variant = variant || group?.variant || "primary";
  const _disabled = disabled || loading;

  const theme = useTheme();
  const buttonStyles = cx(
    theme.button.base,
    theme.button.size[_size],
    theme.button.variant[_variant],
    group ? theme.button.group : "",
    disabled ? theme.button.disabled : "",
    className,
  );

  const ButtonWithIcons = () => (
    <>
      {prefix && (
        <ButtonIcon
          className={cx(
            theme.button.prefix.size[_size],
            theme.button.prefix.variant[_variant],
          )}
        >
          {prefix}
        </ButtonIcon>
      )}
      {children}
      {suffix && (
        <ButtonIcon
          className={cx(
            theme.button.suffix.size[_size],
            theme.button.suffix.variant[_variant],
          )}
        >
          {suffix}
        </ButtonIcon>
      )}
    </>
  );

  const ButtonSpinner = () => {
    if (spinner) return <>{spinner}</>;
    return <Spinner className={theme.button.spinner} />;
  };

  // const IconButton = () => {
  //   return (
  //     <ButtonIcon
  //       className={cx(
  //         theme.button.iconOnly.size[_size],
  //         theme.button.IconOnly.variant[_variant],
  //       )}
  //     >
  //       {icon}
  //     </ButtonIcon>
  //   );
  // };

  return (
    <ReakitButton
      ref={ref}
      className={buttonStyles}
      disabled={_disabled}
      style={_disabled ? { pointerEvents: "unset", ...style } : style}
      {...rest}
    >
      {!loading ? (
        false ? (
          <ButtonWithIcons />
        ) : (
          <ButtonWithIcons />
        )
      ) : (
        <ButtonSpinner />
      )}
    </ReakitButton>
  );
});

Button.displayName = "Button";
