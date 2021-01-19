import * as React from "react";
import {
  Checkbox as RenderlessCheckbox,
  CheckboxProps as RenderlessCheckboxProps,
} from "reakit";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";

export type CheckboxProps = BoxProps & {};

export const Checkbox = forwardRefWithAs<
  CheckboxProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const theme = useTheme();

  return (
    <Box as="label" className={theme.checkbox.label} ref={ref} {...props} />
  );
});

export type CheckboxInputProps = RenderlessCheckboxProps & {};

export const CheckboxInput = forwardRefWithAs<
  CheckboxInputProps,
  HTMLInputElement,
  "input"
>((props, ref) => {
  const theme = useTheme();

  return (
    <RenderlessCheckbox className={theme.checkbox.input} ref={ref} {...props} />
  );
});
