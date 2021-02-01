import * as React from "react";
import {
  Checkbox as ReakitSwitch,
  CheckboxProps as ReakitSwitchProps,
} from "reakit";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { useSwitchState } from "./Switch";
import { forwardRefWithAs } from "../utils/types";

export type SwitchInputProps = ReakitSwitchProps;

export const SwitchInput = forwardRefWithAs<
  Partial<SwitchInputProps>,
  HTMLInputElement,
  "input"
>((props, ref) => {
  const { className, state, ...rest } = props;
  const switchState = useSwitchState();
  const _state = state || switchState || {};

  const theme = useTheme();
  const switchInputStyles = cx(theme.switch.input, className);

  return (
    <ReakitSwitch
      ref={ref}
      role="switch"
      className={switchInputStyles}
      {..._state}
      {...rest}
    />
  );
});
