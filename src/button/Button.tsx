import React from "react";
import cx from "classnames";
import { Button as AriaButton, Role, RoleProps } from "reakit";

import theme from "../theme";
import { __DEV__ } from "../utils";

export interface ButtonProps {
  /**
   * How large should the button be?
   */
  size?: "extra-small" | "small" | "medium" | "large";
  /**
   * If added, the button will show an icon before the button's label.
   * @type React.ReactElement
   */
  leftIcon?: React.ReactElement;
  /**
   * Tailwind utilities to style the left icon
   */
  leftIconStyles?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, ref) => {
  const {
    size = "medium",
    leftIcon,
    leftIconStyles,
    children,
    ...rest
  } = props;
  const buttonStyles = cx(theme.button.base, theme.button.size[size]);

  return (
    <AriaButton className={buttonStyles} ref={ref} {...rest}>
      {leftIcon && (
        <ButtonIcon className={leftIconStyles}>{leftIcon}</ButtonIcon>
      )}
      {children}
    </AriaButton>
  );
});

if (__DEV__) {
  Button.displayName = "Button";
}

export const ButtonIcon: React.FC<RoleProps> = props => {
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
