import { cx, useControllableState } from "@renderlesskit/react";
import { CheckboxStateReturn as ReakitCheckboxStateReturn } from "reakit";

import { forwardRefWithAs } from "../utils/types";
import { CheckboxInputProps } from "./CheckboxInput";
import { CheckboxInput } from "./CheckboxInput";
import { CheckboxIcon, CheckboxIconProps } from "./CheckboxIcon";
import { useTheme } from "../theme";

export type CheckboxProps = Omit<CheckboxInputProps, "size"> & {
  /**
   * Default State of the Checkbox for uncontrolled Checkbox.
   *
   * @default false
   */

  defaultState?: ReakitCheckboxStateReturn["state"];

  /**
   * State of the Checkbox for controlled Checkbox.
   */
  state?: ReakitCheckboxStateReturn["state"];

  /**
   * OnChange callback for controlled Checkbox.
   */
  onStateChange?: ReakitCheckboxStateReturn["setState"];

  /**
   * How large should the button be?
   *
   * @default md
   */
  size?: CheckboxIconProps["size"];

  /**
   * Ref to target the input.
   */
  labelRef?: React.Ref<HTMLLabelElement>;

  /**
   * Props to pass to the Label.
   */
  labelProps?: React.HTMLAttributes<HTMLLabelElement>;
};

export const Checkbox = forwardRefWithAs<
  CheckboxProps,
  HTMLInputElement,
  "input"
>((props, ref) => {
  const {
    // Default State should be false otherwise input state will be undefined
    defaultState = false,
    state: stateProp,
    onStateChange,
    size = "md",
    labelRef,
    labelProps,
    ...inputProps
  } = props;

  const [state, setState] = useControllableState({
    defaultValue: defaultState,
    value: stateProp,
    onChange: onStateChange,
  });
  console.log("%c state", "color: #73998c", state);

  const checkbox = useTheme("checkboxNew");
  const baseStyles = cx(checkbox.base);

  return (
    <label ref={labelRef} className={baseStyles}>
      <CheckboxInput
        ref={ref}
        state={state}
        setState={setState}
        {...inputProps}
      />
      <CheckboxIcon state={state} size={size} />
    </label>
  );
});

Checkbox.displayName = "Checkbox";
