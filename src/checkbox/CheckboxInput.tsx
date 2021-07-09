import {
  Checkbox as ReakitCheckbox,
  CheckboxProps as ReakitCheckboxProps,
} from "reakit";
import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { useCheckboxContext } from "./Checkbox";
import { forwardRefWithAs } from "../utils/types";
import { useFormControl, CommonFieldProps } from "../form-field";

export type CheckboxInputProps = ReakitCheckboxProps &
  Omit<CommonFieldProps, "id" | "isReadOnly">;

export const CheckboxInput = forwardRefWithAs<
  CheckboxInputProps,
  HTMLInputElement,
  "input"
>((props, ref) => {
  const { className, ...rest } = props;
  const {
    state: { isInvalid, ...state },
  } = useCheckboxContext();
  // Interpts with the checked unchecked state
  if (state["value"] === undefined) delete state["value"];
  if (state["checked"] === undefined) delete state["checked"];

  const theme = useTheme();
  const checkboxInputStyles = cx(theme.checkbox.input, className);

  const formFieldProps = useFormControl({
    isDisabled: state.disabled || props.isDisabled || props.disabled,
    isInvalid:
      isInvalid || props.isInvalid || (props["aria-invalid"] as boolean),
    isRequired: props.isRequired || props.required,
    ...rest,
  });

  return (
    <ReakitCheckbox
      ref={ref}
      className={checkboxInputStyles}
      {...state}
      {...formFieldProps}
    />
  );
});

CheckboxInput.displayName = "CheckboxInput";
