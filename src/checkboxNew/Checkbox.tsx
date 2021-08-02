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
    // We should definitely discard `defaultChecked` because it is not a controlled prop
    // Causes the below error:
    // Input elements must be either controlled or uncontrolled.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    defaultChecked,
    ...inputProps
  } = props;

  // Decide on what to do with `checked` `onChange`
  // Because they work standalone withount the below `uncontrolled` state logic.
  // <ReakitCheckbox checked={check} onChange={e => console.log(setCheck(e.target.checked))} />
  // Because we are handling them using `state` and `onStateChange`
  const [state, onStateChange] = useControllableState({
    defaultValue: defaultState,
    value: stateProp,
    onChange: onStateChangeProp,
  });

  return (
    <label>
      <ReakitCheckbox
        ref={ref}
        state={state}
        setState={onStateChange}
        className="lib:sr-only"
        {...inputProps}
      />
    </label>
  );
});

Checkbox.displayName = "Checkbox";
