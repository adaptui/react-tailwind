import {
  CheckboxStateReturn,
  CheckboxProps as ReakitCheckboxProps,
} from "reakit";
import * as React from "react";
import { useControllableState } from "@renderlesskit/react";

import { CheckboxIcon } from "./CheckboxIcon";
import { CheckboxText } from "./CheckboxText";
import { CheckboxLabel } from "./CheckboxLabel";
import { CheckboxInput } from "./CheckboxInput";
import { createContext, runIfFn } from "../utils";

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
