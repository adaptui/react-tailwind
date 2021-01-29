import {
  CheckboxStateReturn,
  Checkbox as ReakitSwitch,
  CheckboxProps as ReakitSwitchProps,
} from "reakit";
import * as React from "react";
import { cx, useControllableState } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { createContext, runIfFn } from "../utils";
import { forwardRefWithAs } from "../utils/types";

export type SwitchStateContext = CheckboxStateReturn;

const [SwitchStateProvider, useSwitchState] = createContext<SwitchStateContext>(
  {
    strict: false,
    name: "SwitchStateContext",
  },
);

export { useSwitchState };

export type SwitchThemeContext = {
  size: keyof Renderlesskit.GetThemeValue<"switch", "icon">["wrapper"]["size"];
};

const [SwitchThemeProvider, useSwitchTheme] = createContext<SwitchThemeContext>(
  {
    strict: false,
    name: "SwitchThemeContext",
  },
);

export { useSwitchTheme };

export type SwitchStateProps = Partial<SwitchThemeContext> & {
  state?: SwitchStateContext;
};

export type SwitchLabelProps = BoxProps & SwitchStateProps;

export const SwitchLabel = forwardRefWithAs<
  SwitchLabelProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const switchStyles = cx(theme.switch.label, className);

  return <Box as="label" ref={ref} className={switchStyles} {...rest} />;
});

export type SwitchInputProps = ReakitSwitchProps;

export const SwitchInput = forwardRefWithAs<
  Partial<SwitchInputProps>,
  HTMLInputElement,
  "input"
>((props, ref) => {
  const { className, state, ...rest } = props;
  const switchState = useSwitchState();
  const _state = state || switchState || {};

  const theme = useTheme();
  const switchInputStyles = cx(theme.switch.input, className);

  return (
    <ReakitSwitch
      ref={ref}
      role="switch"
      className={switchInputStyles}
      {..._state}
      {...rest}
    />
  );
});

export type SwitchIconProps = BoxProps & SwitchStateProps;

export const SwitchIcon = forwardRefWithAs<
  SwitchIconProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { className, state, size, ...rest } = props;
  const switchState = useSwitchState();
  const switchTheme = useSwitchTheme();
  const _state = state || switchState || {};
  const _size = size || switchTheme.size || "sm";

  const theme = useTheme();
  const switchIconWrapperStyles = cx(
    theme.switch.icon.wrapper.base,
    theme.switch.icon.wrapper.size[_size],
    _state?.state
      ? theme.switch.icon.wrapper.checked
      : theme.switch.icon.wrapper.unchecked,
    className,
  );
  const switchIconContentStyles = cx(
    theme.switch.icon.content.base,
    theme.switch.icon.content.size[_size],
    _state?.state
      ? theme.switch.icon.content.checked[_size]
      : theme.switch.icon.content.unchecked,
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

export type SwitchProps = BoxProps & {
  state?: SwitchStateContext["state"];
  defaultState?: SwitchStateContext["state"];
  onStateChange?: (value: SwitchStateContext["state"]) => void;
  size?: SwitchThemeContext["size"];
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
  const [switchState, setSwitchStateChange] = useControllableState({
    value: initialState,
    defaultValue: defaultState,
    onChange: onStateChange,
  });
  const state = React.useMemo(
    () => ({
      state: switchState,
      setState: setSwitchStateChange,
    }),
    [switchState, setSwitchStateChange],
  );
  const theme = React.useMemo(() => ({ size }), [size]);

  return (
    <SwitchStateProvider value={state}>
      <SwitchThemeProvider value={theme}>
        {children ? (
          runIfFn(children, { state, theme })
        ) : (
          <SwitchLabel {...rest}>
            <SwitchInput />
            <SwitchIcon />
          </SwitchLabel>
        )}
      </SwitchThemeProvider>
    </SwitchStateProvider>
  );
};
