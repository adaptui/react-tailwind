import {
  CheckboxStateReturn,
  CheckboxOptions as ReakitCheckboxOptions,
} from "reakit";
import * as React from "react";
import { useControllableState } from "@renderlesskit/react";

import { BoxProps } from "../box";
import { CheckboxIcon } from "./CheckboxIcon";
import { CheckboxText } from "./CheckboxText";
import { CheckboxLabel } from "./CheckboxLabel";
import { CheckboxInput } from "./CheckboxInput";
import { createContext, runIfFn } from "../utils";
import { forwardRefWithAs, RenderProp } from "../utils/types";

export type CheckboxStatus = CheckboxStateReturn["state"];

export type CheckboxContext = {
  state: ReakitCheckboxOptions;
  size: CheckboxProps["size"];
};

const [CheckboxProvider, useCheckboxContext] = createContext<CheckboxContext>({
  name: "CheckboxContext",
  strict: false,
});

export { useCheckboxContext };

type CheckboxRenderProps = RenderProp<ReakitCheckboxOptions>;

export type CheckboxProps = BoxProps &
  Omit<ReakitCheckboxOptions, "size" | "setState"> & {
    defaultState?: ReakitCheckboxOptions["state"];
    onStateChange?: (value: CheckboxStatus) => void;
    size?: keyof Renderlesskit.GetThemeValue<"checkbox", "icon", "size">;
  };

export const Checkbox = forwardRefWithAs<
  CheckboxProps & CheckboxRenderProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const {
    defaultState,
    state: initialState,
    onStateChange,
    value,
    checked,
    disabled,
    focusable,
    size = "md",
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

  if (!children) {
    return (
      <CheckboxProvider value={context}>
        <CheckboxLabel ref={ref} {...rest}>
          <CheckboxInput />
          <CheckboxIcon />
        </CheckboxLabel>
      </CheckboxProvider>
    );
  }

  return (
    <CheckboxProvider value={context}>
      {typeof children !== "string" ? (
        runIfFn(children, state)
      ) : (
        <CheckboxLabel ref={ref} {...rest}>
          <CheckboxInput />
          <CheckboxIcon />
          {<CheckboxText>{children}</CheckboxText>}
        </CheckboxLabel>
      )}
    </CheckboxProvider>
  );
});

Checkbox.displayName = "Checkbox";
