import React from "react";
import { Composite } from "reakit";

import {
  useRadioState,
  RadioInitialState,
  RadioStateReturn,
} from "./RadioState";
import { createContext } from "../utils";
import { forwardRefWithAs } from "../utils/types";

export type RadioGroupContext = RadioStateReturn & {
  size?: keyof Renderlesskit.GetThemeValue<"radio", "icon", "size">;
};

const [RadioProvider, useRadioGroup] = createContext<RadioGroupContext>({
  errorMessage: "Radio must be used within RadioProvider",
  name: "RadioGroup",
  strict: false,
});

export { useRadioGroup };

export type RadioGroupProps = RadioInitialState &
  Pick<RadioGroupContext, "size">;

export const RadioGroup = forwardRefWithAs<
  RadioGroupProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  // Extract InitialState & give it to the Radio State
  // Extracting so they don't end up in the DOM
  const {
    state: initialState,
    defaultState,
    onStateChange,
    unstable_virtual,
    rtl,
    orientation,
    currentId,
    wrap,
    loop,
    shift,
    unstable_includesBaseElement,
    baseId,
    ...rest
  } = props;
  // Composite doesn't remove the `state` & `setState` from the DOM
  // `state` & `setState` is not needed by the composite
  const { state, setState, ...composite } = useRadioState({
    state: initialState,
    defaultState,
    onStateChange,
    unstable_virtual,
    rtl,
    orientation,
    currentId,
    wrap,
    loop,
    shift,
    unstable_includesBaseElement,
    baseId,
  });

  const { size, children, ...last } = rest;

  return (
    <RadioProvider value={{ state, setState, ...composite, size }}>
      <Composite
        ref={ref}
        role="radiogroup"
        aria-label="Radio Group"
        {...composite}
        {...last}
      >
        {children}
      </Composite>
    </RadioProvider>
  );
});

RadioGroup.displayName = "RadioGroup";
