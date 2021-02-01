import {
  CheckboxStateReturn,
  Checkbox as ReakitCheckbox,
  CheckboxProps as ReakitCheckboxProps,
} from "reakit";
import * as React from "react";
import { cx, useControllableState } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { createContext, runIfFn } from "../utils";
import { CheckIcon, IndeterminateIcon } from "../icons";

export type CheckboxStatus = CheckboxStateReturn["state"];

export type CheckboxStateContext = ReakitCheckboxProps;

const [
  CheckboxStateProvider,
  useCheckboxState,
] = createContext<CheckboxStateContext>({
  name: "CheckboxStateContext",
  strict: false,
});

export { useCheckboxState };

export type CheckboxThemeContext = {
  size?: keyof Renderlesskit.GetThemeValue<"checkbox", "icon">["size"];
};

const [
  CheckboxThemeProvider,
  useCheckboxTheme,
] = createContext<CheckboxThemeContext>({
  name: "CheckboxThemeContext",
  strict: false,
});

export { useCheckboxTheme };

export type CheckboxStateProps = CheckboxThemeContext & {
  state?: CheckboxStateContext;
};

export type CheckboxLabelProps = BoxProps & CheckboxStateProps;

export const CheckboxLabel = forwardRefWithAs<
  CheckboxLabelProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const { state, size, className, ...rest } = props;
  const checkboxState = useCheckboxState();
  const _state = state || checkboxState || {};

  const theme = useTheme();
  const checkboxStyles = cx(
    theme.checkbox.base,
    _state?.disabled ? theme.checkbox.disabled : "",
    className,
  );

  return <Box as="label" ref={ref} className={checkboxStyles} {...rest} />;
});

export type CheckboxInputProps = Omit<ReakitCheckboxProps, "size" | "state"> &
  CheckboxStateProps;

export const CheckboxInput = forwardRefWithAs<
  CheckboxInputProps,
  HTMLInputElement,
  "input"
>((props, ref) => {
  const { className, state, size, ...rest } = props;
  const checkboxState = useCheckboxState();
  const _state = state || checkboxState || {};
  // Interpts with the checked unchecked state
  if (_state["value"] === undefined) delete _state["value"];
  if (_state["checked"] === undefined) delete _state["checked"];

  const theme = useTheme();
  const checkboxInputStyles = cx(theme.checkbox.input, className);

  return (
    <ReakitCheckbox
      ref={ref}
      className={checkboxInputStyles}
      {..._state}
      {...rest}
    />
  );
});

export type CheckboxIconProps = BoxProps & CheckboxStateProps;

export const CheckboxIcon = forwardRefWithAs<
  CheckboxIconProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { state, size, className, children, ...rest } = props;
  const checkboxState = useCheckboxState();
  const _state = state || checkboxState || {};

  let stateProp = _state?.state;

  const checkboxTheme = useCheckboxTheme();
  const _size = size || checkboxTheme?.size || "sm";

  if (Array.isArray(_state?.state) && _state?.value) {
    stateProp = _state?.state.includes(_state?.value);
  }

  const theme = useTheme();
  const checkboxIconStyles = cx(
    theme.checkbox.icon.base,
    theme.checkbox.icon.size[_size],
    _state?.disabled
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
  const { state, size, className, ...rest } = props;

  const checkboxTheme = useCheckboxTheme();
  const _size = size || checkboxTheme?.size || "sm";

  const theme = useTheme();
  const checkboxLabelStyles = cx(
    theme.checkbox.label.base,
    theme.checkbox.label.size[_size],
    className,
  );

  return <Box className={checkboxLabelStyles} ref={ref} {...rest} />;
});

type CheckboxRenderProps = {
  children?:
    | (({
        state,
        theme,
      }: {
        state: CheckboxStateContext;
        theme: CheckboxThemeContext;
      }) => JSX.Element)
    | React.ReactNode
    | string;
};

export type CheckboxProps = Omit<ReakitCheckboxProps, "size" | "setState"> &
  CheckboxThemeContext & {
    defaultState?: CheckboxStateContext["state"];
    onStateChange?: (value: CheckboxStatus) => void;
  };

export const Checkbox: React.FC<
  CheckboxProps & CheckboxRenderProps
> = props => {
  const {
    defaultState,
    state: initialState,
    onStateChange,
    size = "sm",
    value,
    checked,
    disabled,
    focusable,
    children,
    ...rest
  } = props;
  const [checkboxState, setCheckboxStateChange] = useControllableState({
    value: initialState,
    defaultValue: defaultState,
    onChange: onStateChange,
  });

  const state = React.useMemo(
    () => ({
      state: checkboxState,
      setState: setCheckboxStateChange,
      value,
      checked,
      disabled,
      focusable,
    }),
    [
      checkboxState,
      setCheckboxStateChange,
      value,
      checked,
      disabled,
      focusable,
    ],
  );
  const theme = React.useMemo(() => ({ size }), [size]);

  return (
    <CheckboxStateProvider value={state}>
      <CheckboxThemeProvider value={theme}>
        {typeof children !== "string" ? (
          runIfFn(children, { state, theme })
        ) : (
          <CheckboxLabel {...rest}>
            <CheckboxInput />
            <CheckboxIcon />
            {children ? <CheckboxText>{children}</CheckboxText> : null}
          </CheckboxLabel>
        )}
      </CheckboxThemeProvider>
    </CheckboxStateProvider>
  );
};
