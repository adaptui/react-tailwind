import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { CheckboxStateProps, useCheckboxState } from "./Checkbox";

export type CheckboxLabelProps = BoxProps & CheckboxStateProps;

export const CheckboxLabel = forwardRefWithAs<
  CheckboxLabelProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const { state, size, className, ...rest } = props;
  const checkboxState = useCheckboxState();
  const _state = state || checkboxState || {};

  const theme = useTheme();
  const checkboxStyles = cx(
    theme.checkbox.base,
    _state?.disabled ? theme.checkbox.disabled : "",
    className,
  );

  return <Box as="label" ref={ref} className={checkboxStyles} {...rest} />;
});
