import * as React from "react";
import {
  CheckboxStateReturn,
  Checkbox as RenderlessCheckbox,
  CheckboxProps as RenderlessCheckboxProps,
} from "reakit";
import { cx, useControllableState } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { createContext } from "../utils";
import { forwardRefWithAs } from "../utils/types";
import { CheckIcon, IndeterminateIcon } from "../icons";

export type CheckboxStatus = CheckboxStateReturn["state"];

export type CheckboxContextProps = {
  defaultState?: CheckboxStatus;
  state?: CheckboxStatus;
  onStateChange?: (e: CheckboxStatus) => void;
  value?: string | number;
  size?: "xs" | "sm" | "lg";
};

const [
  CheckboxProvider,
  useCheckboxContext,
] = createContext<CheckboxContextProps>({
  strict: false,
  name: "CheckboxContext",
});

export { CheckboxProvider, useCheckboxContext };

export type CheckboxLabelProps = BoxProps & {};

export const CheckboxLabel = forwardRefWithAs<
  CheckboxLabelProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const checkboxStyles = cx(theme.checkbox.base, className);

  return <Box as="label" className={checkboxStyles} ref={ref} {...rest} />;
});

export type CheckboxInputProps = RenderlessCheckboxProps & {};

export const CheckboxInput = forwardRefWithAs<
  CheckboxInputProps,
  HTMLInputElement,
  "input"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const checkboxInputStyles = cx(theme.checkbox.input, className);
  const { size, ...state } = useCheckboxContext();

  return (
    <RenderlessCheckbox
      className={checkboxInputStyles}
      ref={ref}
      {...state}
      {...rest}
    />
  );
});

export type CheckboxIconProps = BoxProps & {};

export const CheckboxIcon = forwardRefWithAs<
  CheckboxIconProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, children, ...rest } = props;
  const { state, value, size = "sm" } = useCheckboxContext();
  let stateProp = state;

  if (Array.isArray(state) && value) {
    stateProp = state.includes(value);
  }

  const theme = useTheme();
  const checkboxIconStyles = cx(
    theme.checkbox.icon.base,
    theme.checkbox.icon.size[size],
    stateProp ? theme.checkbox.icon.checked : theme.checkbox.icon.unchecked,
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

export type CheckboxTextProps = BoxProps & {};

export const CheckboxText = forwardRefWithAs<
  CheckboxLabelProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const { size = "sm" } = useCheckboxContext();

  const theme = useTheme();
  const checkboxLabelStyles = cx(
    theme.checkbox.label.base,
    theme.checkbox.label.size[size],
    className,
  );

  return <Box className={checkboxLabelStyles} ref={ref} {...rest} />;
});

export type CheckboxProps = BoxProps & CheckboxContextProps;

export const Checkbox: React.FC<CheckboxProps> = props => {
  const {
    state,
    onStateChange,
    defaultState,
    value,
    size,
    children,
    ...rest
  } = props;
  const [checkboxState, onCheckboxStateChange] = useControllableState({
    value: state,
    defaultValue: defaultState,
    onChange: onStateChange,
  });
  const context = React.useMemo(
    () => ({
      state: checkboxState,
      setState: onCheckboxStateChange,
      value,
      size,
    }),
    [checkboxState, onCheckboxStateChange, value, size],
  );

  return (
    <CheckboxProvider value={context}>
      <CheckboxLabel {...rest}>
        <CheckboxInput />
        <CheckboxIcon />
        {children ? <CheckboxText>{children}</CheckboxText> : null}
      </CheckboxLabel>
    </CheckboxProvider>
  );
};
