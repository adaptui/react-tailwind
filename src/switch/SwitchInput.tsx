import {
  Checkbox as ReakitSwitch,
  CheckboxProps as ReakitSwitchProps,
} from "reakit";

import { tcm } from "../utils";
import { useTheme } from "../theme";
import { useSwitchContext } from "./Switch";
import { forwardRefWithAs } from "../utils/types";
import { CommonFieldProps, useFormControl } from "../form-field";

export type SwitchInputProps = ReakitSwitchProps & Omit<CommonFieldProps, "id">;

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
  const switchInputStyles = tcm(theme.switch.input, className);

  const formFieldProps = useFormControl(rest);

  return (
    <ReakitSwitch
      ref={ref}
      role="switch"
      className={switchInputStyles}
      state={state?.checked}
      setState={state.setState as any}
      {...formFieldProps}
    />
  );
});

SwitchInput.displayName = "SwitchInput";
