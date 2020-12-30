import { Button as AriaButton, ButtonProps as AriaButtonProps } from "reakit";
import React from "react";

import { Spinner } from "../spinner";
import { Box, BoxProps } from "../box";
import { useButtonGroup } from "./ButtonGroup";
import { useOverride, useTheme } from "../theme";
import { forwardRefWithAsSimple } from "../utils/types";

type AnyString = string & { ignore?: any };

export type ButtonProps = Omit<AriaButtonProps, "prefix"> & {
  /**
   * How large should the button be?
   */
  size?: "xs" | "sm" | "md" | "lg";
  /**
   * How the button should be styled?
   */
  variant?: "primary" | "secondary" | "link" | AnyString;
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

export const Button = forwardRefWithAsSimple<
  ButtonProps,
  HTMLButtonElement,
  "button"
>((props, ref) => {
  const {
    size,
    variant,
    prefix,
    suffix,
    isLoading,
    spinner,
    isDisabled,
    className,
    children,
    ...rest
  } = props;
  const _isDisabled = isDisabled || isLoading;
  const group = useButtonGroup();
  const _size = size || group?.size || "md";
  const _variant = variant || group?.variant || "primary";
  const theme = useTheme();
  const ocx = useOverride();

  const buttonStyles = ocx(
    theme.button.base,
    theme.button.size[_size],
    theme.button.variant[_variant],
    group ? theme.button.group : "",
    className,
  );

  const ButtonWithIcons = () => (
    <>
      {prefix && (
        <ButtonIcon className={theme.button.prefix}>{prefix}</ButtonIcon>
      )}
      {children}
      {suffix && (
        <ButtonIcon className={theme.button.suffix}>{suffix}</ButtonIcon>
      )}
    </>
  );

  const ButtonSpinner = () => {
    if (spinner) return <>{spinner}</>;
    return <Spinner className={theme.button.spinner} />;
  };

  const ButtonComp = () => (
    <AriaButton
      ref={ref}
      className={buttonStyles}
      disabled={_isDisabled}
      {...rest}
    >
      {!isLoading ? <ButtonWithIcons /> : <ButtonSpinner />}
    </AriaButton>
  );

  if (_isDisabled) {
    return (
      // Pointer Events auto from Reakit makes the pointer events style hidden
      // https://material-ui.com/components/buttons/#limitations
      <Box as="span" className={theme.button.span}>
        <ButtonComp />
      </Box>
    );
  }

  return <ButtonComp />;
});

export type ButtonIconProps = BoxProps & {};

export const ButtonIcon = forwardRefWithAsSimple<
  ButtonIconProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
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
});
