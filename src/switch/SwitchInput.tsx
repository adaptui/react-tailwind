import {
  Checkbox as ReakitSwitch,
  CheckboxProps as ReakitSwitchProps,
} from "reakit";
import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { useSwitchContext } from "./Switch";
import { forwardRefWithAs } from "../utils/types";
import { useFormControl } from "../form-field";

export type SwitchInputProps = ReakitSwitchProps & {};

export const SwitchInput = forwardRefWithAs<
  SwitchInputProps,
  HTMLInputElement,
  "input"
>((props, ref) => {
  const { className, ...rest } = props;
  const { state } = useSwitchContext();
  // Interpts with the checked unchecked state
  if (state["value"] === undefined) delete state["value"];
  if (state["checked"] === undefined) delete state["checked"];

  const theme = useTheme();
  const switchInputStyles = cx(theme.switch.input, className);
  const fieldInputProps = useFormControl();

  return (
    <ReakitSwitch
      ref={ref}
      role="switch"
      className={switchInputStyles}
      {...state}
      {...fieldInputProps}
      {...rest}
    />
  );
});

SwitchInput.displayName = "SwitchInput";
