import {
  Checkbox as ReakitCheckbox,
  CheckboxProps as ReakitCheckboxProps,
} from "reakit";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { forwardRefWithAs } from "../utils/types";

export type CheckboxInputProps = ReakitCheckboxProps & {
  /**
   * If `true`, the checkbox will be invalid.
   *
   * @default false
   */
  invalid?: boolean;
};

export const CheckboxInput = forwardRefWithAs<
  CheckboxInputProps,
  HTMLInputElement,
  "input"
>((props, ref) => {
  const {
    state,
    setState,
    // We should definitely discard `defaultChecked` because it is not a controlled prop
    // Causes the below error:
    // Input elements must be either controlled or uncontrolled.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    defaultChecked,
    // Decide on what to do with `checked` `onChange`
    // Because they work standalone withount the below `uncontrolled` state logic.
    // <ReakitCheckbox checked={check} onChange={e => console.log(setCheck(e.target.checked))} />
    // Because we are handling them using `state` and `onStateChange`
    invalid,
    // We are removing className & style, so users don't change the input styles
    className,
    style,
    ...rest
  } = props;

  const checkbox = useTheme("checkboxNew");
  const baseStyles = cx(checkbox.input);

  return (
    <ReakitCheckbox
      ref={ref}
      state={state}
      setState={setState}
      className={baseStyles}
      aria-invalid={invalid}
      {...rest}
    />
  );
});

CheckboxInput.displayName = "CheckboxInput";
