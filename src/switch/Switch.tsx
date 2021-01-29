import {
  CheckboxStateReturn,
  Checkbox as RenderlessSwitch,
  CheckboxProps as RenderlessSwitchProps,
} from "reakit";
import * as React from "react";
import { cx, useControllableState } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";

export type SwitchStatus = CheckboxStateReturn["state"];

export type SwitchStateValues = {
  state?: SwitchStatus;
  size?: keyof Renderlesskit.GetThemeValue<"switch", "icon">["wrapper"]["size"];
};

export type SwitchStateActions = Pick<CheckboxStateReturn, "setState">;

export type SwitchStateProps = SwitchStateValues & SwitchStateActions;

export type SwitchLabelProps = BoxProps & SwitchStateProps;

export const SwitchLabel = forwardRefWithAs<
  SwitchLabelProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const { state, setState, size, ...mainProps } = props;
  const { className, ...rest } = mainProps;
  const theme = useTheme();
  const switchStyles = cx(theme.switch.label, className);

  return <Box as="label" ref={ref} className={switchStyles} {...rest} />;
});

export type SwitchInputProps = Omit<RenderlessSwitchProps, "size"> &
  SwitchStateProps;

export const SwitchInput = forwardRefWithAs<
  SwitchInputProps,
  HTMLInputElement,
  "input"
>((props, ref) => {
  const { className, size, ...rest } = props;
  const theme = useTheme();
  const switchInputStyles = cx(theme.switch.input, className);

  return <RenderlessSwitch ref={ref} className={switchInputStyles} {...rest} />;
});

export type SwitchIconProps = BoxProps & SwitchStateProps;

export const SwitchIcon = forwardRefWithAs<
  SwitchIconProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { state, setState, size = "sm", ...mainProps } = props;
  const { className, ...rest } = mainProps;
  let stateProp = state;

  const theme = useTheme();
  const switchIconWrapperStyles = cx(
    theme.switch.icon.wrapper.base,
    theme.switch.icon.wrapper.size[size],
    stateProp
      ? theme.switch.icon.wrapper.checked
      : theme.switch.icon.wrapper.unchecked,
    className,
  );
  const switchIconContentStyles = cx(
    theme.switch.icon.content.base,
    theme.switch.icon.content.size[size],
    stateProp
      ? theme.switch.icon.content.checked[size]
      : theme.switch.icon.content.unchecked,
    className,
  );

  return (
    <Box
      as="span"
      className={switchIconWrapperStyles}
      ref={ref}
      aria-hidden="true"
      role="img"
      {...rest}
    >
      <Box as="span" className={switchIconContentStyles} />
    </Box>
  );
});

export type SwitchProps = BoxProps &
  SwitchStateValues & {
    defaultState?: SwitchStatus;
    onStateChange?: (value: SwitchStatus) => void;
  };

export const Switch: React.FC<SwitchProps> = props => {
  const {
    defaultState,
    state: initialState,
    onStateChange,
    size = "sm",
    children,
    ...rest
  } = props;
  const [SwitchState, setSwitchStateChange] = useControllableState({
    value: initialState,
    defaultValue: defaultState,
    onChange: onStateChange,
  });
  const state = {
    state: SwitchState,
    setState: setSwitchStateChange,
    size,
  };

  return (
    <SwitchLabel {...state} {...rest}>
      <SwitchInput {...state} />
      <SwitchIcon {...state} />
    </SwitchLabel>
  );
};
