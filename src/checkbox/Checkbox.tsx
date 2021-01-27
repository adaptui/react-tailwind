import {
  CheckboxStateReturn,
  Checkbox as RenderlessCheckbox,
  CheckboxProps as RenderlessCheckboxProps,
} from "reakit";
import * as React from "react";
import { cx, useControllableState } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { CheckIcon, IndeterminateIcon } from "../icons";

export type CheckboxStatus = CheckboxStateReturn["state"];

export type CheckboxStateValues = {
  state?: CheckboxStatus;
  value?: string | number;
  size?: "xs" | "sm" | "lg";
  isDisabled?: boolean;
};

export type CheckboxStateActions = {
  setState?: CheckboxStateReturn["setState"];
};

export type CheckboxStateProps = CheckboxStateValues & CheckboxStateActions;

export type CheckboxLabelProps = BoxProps & CheckboxStateProps;

export const CheckboxLabel = forwardRefWithAs<
  CheckboxLabelProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const {
    state,
    setState,
    value,
    size,
    isDisabled = false,
    ...mainProps
  } = props;
  const { className, ...rest } = mainProps;
  const theme = useTheme();
  const checkboxStyles = cx(
    theme.checkbox.base,
    isDisabled ? theme.checkbox.disabled : "",
    className,
  );

  return <Box as="label" ref={ref} className={checkboxStyles} {...rest} />;
});

export type CheckboxInputProps = Omit<RenderlessCheckboxProps, "size"> &
  CheckboxStateProps;

export const CheckboxInput = forwardRefWithAs<
  CheckboxInputProps,
  HTMLInputElement,
  "input"
>((props, ref) => {
  const { className, size, ...rest } = props;
  const theme = useTheme();
  const checkboxInputStyles = cx(theme.checkbox.input, className);

  return (
    <RenderlessCheckbox ref={ref} className={checkboxInputStyles} {...rest} />
  );
});

export type CheckboxIconProps = BoxProps & CheckboxStateProps;

export const CheckboxIcon = forwardRefWithAs<
  CheckboxIconProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const {
    state,
    setState,
    value,
    size = "sm",
    isDisabled,
    ...mainProps
  } = props;
  const { className, children, ...rest } = mainProps;
  let stateProp = state;

  if (Array.isArray(state) && value) {
    stateProp = state.includes(value);
  }

  const theme = useTheme();
  const checkboxIconStyles = cx(
    theme.checkbox.icon.base,
    theme.checkbox.icon.size[size],
    isDisabled
      ? theme.checkbox.icon.disabled
      : stateProp
      ? theme.checkbox.icon.checked
      : theme.checkbox.icon.unchecked,
    className,
  );

  return (
    <Box
      className={checkboxIconStyles}
      ref={ref}
      aria-hidden="true"
      role="img"
      {...rest}
    >
      {children ? (
        children
      ) : stateProp === "indeterminate" ? (
        <IndeterminateIcon />
      ) : stateProp ? (
        <CheckIcon />
      ) : null}
    </Box>
  );
});

export type CheckboxTextProps = BoxProps & CheckboxStateProps;

export const CheckboxText = forwardRefWithAs<
  CheckboxLabelProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const {
    state,
    setState,
    value,
    size = "sm",
    isDisabled,
    ...mainProps
  } = props;
  const { className, ...rest } = mainProps;

  const theme = useTheme();
  const checkboxLabelStyles = cx(
    theme.checkbox.label.base,
    theme.checkbox.label.size[size],
    className,
  );

  return <Box className={checkboxLabelStyles} ref={ref} {...rest} />;
});

export type CheckboxProps = BoxProps &
  CheckboxStateValues & {
    defaultState?: CheckboxStatus;
    onStateChange?: (value: CheckboxStatus) => void;
  };

export const Checkbox: React.FC<CheckboxProps> = props => {
  const {
    defaultState,
    state: initialState,
    onStateChange,
    value,
    size = "sm",
    isDisabled = false,
    children,
    ...rest
  } = props;
  const [checkboxState, setCheckboxStateChange] = useControllableState({
    value: initialState,
    defaultValue: defaultState,
    onChange: onStateChange,
  });
  const state = {
    state: checkboxState,
    setState: setCheckboxStateChange,
    size,
    value,
    isDisabled,
  };

  return (
    <CheckboxLabel {...state} {...rest}>
      <CheckboxInput {...state} />
      <CheckboxIcon {...state} />
      {children ? <CheckboxText {...state}>{children}</CheckboxText> : null}
    </CheckboxLabel>
  );
};
