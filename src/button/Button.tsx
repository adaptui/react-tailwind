import { Button as AriaButton, ButtonProps as AriaButtonProps } from "reakit";
import React from "react";

import theme from "../theme";
import { ocx } from "../utils";
import { Spinner } from "../spinner";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs, PropsWithAs } from "../utils/types";

export type ButtonProps = AriaButtonProps & {
  /**
   * How large should the button be?
   */
  size?: "xs" | "sm" | "md" | "lg";
  /**
   * How the button should be styled?
   */
  variant?: "primary" | "secondary" | "link";
  /**
   * If added, the button will show an icon before the button's label.
   */
  leftIcon?: React.ReactElement;
  /**
   * If added, the button will show an icon before the button's label.
   */
  rightIcon?: React.ReactElement;
  /**
   * If `true`, the button will show a spinner.
   */
  isLoading?: boolean;
  /**
   * If added, the button will show this spinner components
   */
  spinner?: React.ReactElement;
  /**
   * If `true`, the button will be disabled.
   */
  isDisabled?: boolean;
};

function ButtonComponent(
  props: PropsWithAs<ButtonProps, "button">,
  ref: React.Ref<HTMLButtonElement>,
) {
  const {
    size = "md",
    variant = "primary",
    leftIcon,
    rightIcon,
    isLoading,
    spinner,
    isDisabled,
    className,
    children,
    ...rest
  } = props;
  const _isDisabled = isDisabled || isLoading;

  const buttonStyles = ocx(
    theme.button.base,
    theme.button.size[size],
    theme.button.variant[variant],
    className,
  );

  const ButtonWithIcons = () => (
    <>
      {leftIcon && (
        <ButtonIcon className={theme.button.leftIcon}>{leftIcon}</ButtonIcon>
      )}
      {children}
      {rightIcon && (
        <ButtonIcon className={theme.button.rightIcon}>{rightIcon}</ButtonIcon>
      )}
    </>
  );

  const ButtonSpinner = () => {
    if (spinner) return <>{spinner}</>;
    return <Spinner className={theme.button.spinner} />;
  };

  return (
    <AriaButton
      ref={ref}
      className={buttonStyles}
      disabled={_isDisabled}
      // Pointer Events auto from Reakit makes the pointer events style hidden
      style={{ pointerEvents: undefined }}
      {...rest}
    >
      {!isLoading ? <ButtonWithIcons /> : <ButtonSpinner />}
    </AriaButton>
  );
}

/**
 * Primary UI component for user interaction
 */
export const Button = forwardRefWithAs<ButtonProps, "button">(ButtonComponent);

export type ButtonIconProps = BoxProps & {};

function ButtonIconComponent(
  props: PropsWithAs<ButtonIconProps, "span">,
  ref: React.Ref<HTMLSpanElement>,
) {
  const { children, ...rest } = props;

  const _children = React.isValidElement(children)
    ? React.cloneElement(children, {
        "aria-hidden": true,
        focusable: false,
      })
    : children;

  return (
    <Box as="span" ref={ref} {...rest}>
      {_children}
    </Box>
  );
}

/**
 * Button Icon to hold icons within the Button
 */
export const ButtonIcon = forwardRefWithAs<ButtonIconProps, "span">(
  ButtonIconComponent,
);
