import * as React from "react";
import {
  Checkbox as ReakitCheckbox,
  CheckboxProps as ReakitCheckboxProps,
  CheckboxStateReturn as ReakitCheckboxStateReturn,
} from "reakit";
import { useControllableState } from "@renderlesskit/react";

import { forwardRefWithAs } from "../utils/types";

export type CheckboxProps = ReakitCheckboxProps & {
  defaultState?: ReakitCheckboxStateReturn["state"];
  state?: ReakitCheckboxStateReturn["state"];
  onStateChange?: ReakitCheckboxStateReturn["setState"];
};

export const Checkbox = forwardRefWithAs<
  CheckboxProps,
  HTMLInputElement,
  "input"
>((props, ref) => {
  const {
    defaultState,
    state: stateProp,
    onStateChange: onStateChangeProp,
  } = props;

  // Decide on whether to discard `checked`, `defaultChecked`,
  // Because we are handling them using `state` and `onStateChange`
  const [state, onStateChange] = useControllableState({
    defaultValue: defaultState,
    value: stateProp,
    onChange: onStateChangeProp,
  });
  console.log("%c state", "color: #364cd9", state);

  return <ReakitCheckbox ref={ref} state={state} setState={onStateChange} />;
});

Checkbox.displayName = "Checkbox";
