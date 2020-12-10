import React from "react";
import cx from "classnames";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
  Role,
  RoleProps,
} from "reakit";

import theme from "../theme";
import { __DEV__ } from "../utils";

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
   * Props to pass to the leftIcon
   */
  leftIconProps?: ButtonIconProps;
  /**
   * If added, the button will show an icon before the button's label.
   */
  rightIcon?: React.ReactElement;
  /**
   * Props to pass to the rightIcon
   */
  rightIconProps?: ButtonIconProps;
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
    leftIconProps,
    rightIcon,
    rightIconProps,
    children,
    ...rest
  } = props;
  const buttonStyles = cx(theme.button.base, theme.button.size[size]);

  return (
    <AriaButton className={buttonStyles} ref={ref} {...rest}>
      {leftIcon && <ButtonIcon {...leftIconProps}>{leftIcon}</ButtonIcon>}
      {children}
      {rightIcon && <ButtonIcon {...rightIconProps}>{rightIcon}</ButtonIcon>}
    </AriaButton>
  );
});

if (__DEV__) {
  Button.displayName = "Button";
}

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
