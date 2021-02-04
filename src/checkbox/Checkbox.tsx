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

export type CheckboxContext = {
  state: ReakitCheckboxProps;
  size: CheckboxProps["size"];
};

const [CheckboxProvider, useCheckboxContext] = createContext<CheckboxContext>({
  name: "CheckboxContext",
  strict: false,
});

export { useCheckboxContext };

type CheckboxRenderProps = {
  children?:
    | (({ state, size }: CheckboxContext) => JSX.Element)
    | React.ReactNode
    | string;
};

export type CheckboxProps = Omit<ReakitCheckboxProps, "size" | "setState"> & {
  defaultState?: ReakitCheckboxProps["state"];
  onStateChange?: (value: CheckboxStatus) => void;
  size?: keyof Renderlesskit.GetThemeValue<"checkbox", "icon">["size"];
};

export const Checkbox: React.FC<
  CheckboxProps & CheckboxRenderProps
> = props => {
  const {
    defaultState,
    state: initialState,
    onStateChange,
    value,
    checked,
    disabled,
    focusable,
    size = "sm",
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
  const context = React.useMemo(() => ({ state, size }), [state, size]);

  return (
    <CheckboxProvider value={context}>
      {typeof children !== "string" ? (
        runIfFn(children, { state, size })
      ) : (
        <CheckboxLabel {...rest}>
          <CheckboxInput />
          <CheckboxIcon />
          {children ? <CheckboxText>{children}</CheckboxText> : null}
        </CheckboxLabel>
      )}
    </CheckboxProvider>
  );
};
