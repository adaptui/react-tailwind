import {
  Checkbox as ReakitCheckbox,
  CheckboxProps as ReakitCheckboxProps,
} from "reakit";
import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { forwardRefWithAs } from "../utils/types";
import { CheckboxStateProps, useCheckboxState } from "./Checkbox";

export type CheckboxInputProps = Omit<ReakitCheckboxProps, "size" | "state"> &
  CheckboxStateProps;

export const CheckboxInput = forwardRefWithAs<
  CheckboxInputProps,
  HTMLInputElement,
  "input"
>((props, ref) => {
  const { className, state, size, ...rest } = props;
  const checkboxState = useCheckboxState();
  const _state = state || checkboxState || {};
  // Interpts with the checked unchecked state
  if (_state["value"] === undefined) delete _state["value"];
  if (_state["checked"] === undefined) delete _state["checked"];

  const theme = useTheme();
  const checkboxInputStyles = cx(theme.checkbox.input, className);

  return (
    <ReakitCheckbox
      ref={ref}
      className={checkboxInputStyles}
      {..._state}
      {...rest}
    />
  );
});
