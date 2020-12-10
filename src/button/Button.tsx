import {
  Role,
  RoleProps,
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "reakit";
import React from "react";

import theme from "../theme";
import { Spinner } from "../spinner";
import { ocx, __DEV__ } from "../utils";

export interface ButtonProps extends AriaButtonProps {
  /**
   * How large should the button be?
   */
  size?: "xs" | "sm" | "md" | "lg";
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
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, ref) => {
  const {
    size = "md",
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
});

export interface ButtonIconProps extends RoleProps {}

export const ButtonIcon: React.FC<ButtonIconProps> = props => {
  const { children, ...rest } = props;

  const _children = React.isValidElement(children)
    ? React.cloneElement(children, {
        "aria-hidden": true,
        focusable: false,
      })
    : children;

  return (
    <Role as="span" {...rest}>
      {_children}
    </Role>
  );
};

if (__DEV__) {
  ButtonIcon.displayName = "ButtonIcon";
}
