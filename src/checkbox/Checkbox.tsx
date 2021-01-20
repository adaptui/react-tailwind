import * as React from "react";
import {
  Checkbox as RenderlessCheckbox,
  CheckboxProps as RenderlessCheckboxProps,
} from "reakit";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";

export type CheckboxProps = BoxProps & {};

export const Checkbox = forwardRefWithAs<
  CheckboxProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const checkboxStyles = cx(theme.checkbox.label, className);

  return <Box as="label" className={checkboxStyles} ref={ref} {...rest} />;
});

export type CheckboxInputProps = RenderlessCheckboxProps & {};

export const CheckboxInput = forwardRefWithAs<
  CheckboxInputProps,
  HTMLInputElement,
  "input"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const checkboxInputStyles = cx(theme.checkbox.input, className);

  return (
    <RenderlessCheckbox className={checkboxInputStyles} ref={ref} {...rest} />
  );
});
