import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { useCheckboxContext } from "./Checkbox";
import { forwardRefWithAs } from "../utils/types";

export type CheckboxLabelProps = BoxProps & {};

export const CheckboxLabel = forwardRefWithAs<
  CheckboxLabelProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const { className, ...rest } = props;
  const { state } = useCheckboxContext();

  const theme = useTheme();
  const checkboxLabelStyles = cx(
    theme.checkbox.base,
    state?.disabled ? theme.checkbox.disabled : "",
    className,
  );

  return <Box as="label" ref={ref} className={checkboxLabelStyles} {...rest} />;
});

CheckboxLabel.displayName = "CheckboxLabel";
