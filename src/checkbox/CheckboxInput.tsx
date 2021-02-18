import {
  Checkbox as ReakitCheckbox,
  CheckboxProps as ReakitCheckboxProps,
} from "reakit";
import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { useCheckboxContext } from "./Checkbox";
import { forwardRefWithAs } from "../utils/types";

export type CheckboxInputProps = ReakitCheckboxProps & {};

export const CheckboxInput = forwardRefWithAs<
  CheckboxInputProps,
  HTMLInputElement,
  "input"
>((props, ref) => {
  const { className, ...rest } = props;
  const { state } = useCheckboxContext();
  // Interpts with the checked unchecked state
  if (state["value"] === undefined) delete state["value"];
  if (state["checked"] === undefined) delete state["checked"];

  const theme = useTheme();
  const checkboxInputStyles = cx(theme.checkbox.input, className);

  return (
    <ReakitCheckbox
      ref={ref}
      className={checkboxInputStyles}
      {...state}
      {...rest}
    />
  );
});

CheckboxInput.displayName = "CheckboxInput";
