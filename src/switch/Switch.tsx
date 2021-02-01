import * as React from "react";
import { CheckboxStateReturn } from "reakit";
import { useControllableState } from "@renderlesskit/react";

import { SwitchIcon } from "./SwitchIcon";
import { SwitchLabel } from "./SwitchLabel";
import { SwitchInput } from "./SwitchInput";
import { createContext, runIfFn } from "../utils";

export type SwitchStateContext = CheckboxStateReturn;

const [SwitchStateProvider, useSwitchState] = createContext<SwitchStateContext>(
  {
    name: "SwitchStateContext",
    strict: false,
  },
);

export { useSwitchState };

export type SwitchThemeContext = {
  size: keyof Renderlesskit.GetThemeValue<"switch", "icon">["wrapper"]["size"];
};

const [SwitchThemeProvider, useSwitchTheme] = createContext<SwitchThemeContext>(
  {
    name: "SwitchThemeContext",
    strict: false,
  },
);

export { useSwitchTheme };

export type SwitchStateProps = Partial<SwitchThemeContext> & {
  state?: SwitchStateContext;
};

type SwitchRenderProps = {
  children?:
    | (({
        state,
        theme,
      }: {
        state: SwitchStateContext;
        theme: SwitchThemeContext;
      }) => JSX.Element)
    | React.ReactNode;
};

export type SwitchProps = {
  state?: SwitchStateContext["state"];
  defaultState?: SwitchStateContext["state"];
  onStateChange?: (value: SwitchStateContext["state"]) => void;
  size?: SwitchThemeContext["size"];
};

export const Switch: React.FC<SwitchProps & SwitchRenderProps> = props => {
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
