import * as React from "react";
import { cx } from "@renderlesskit/react";

import {
  CheckboxStateProps,
  useCheckboxState,
  useCheckboxTheme,
} from "./Checkbox";
import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { CheckIcon, IndeterminateIcon } from "../icons";

export type CheckboxIconProps = BoxProps & CheckboxStateProps;

export const CheckboxIcon = forwardRefWithAs<
  CheckboxIconProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { state, size, className, children, ...rest } = props;
  const checkboxState = useCheckboxState();
  const _state = state || checkboxState || {};

  let stateProp = _state?.state;

  const checkboxTheme = useCheckboxTheme();
  const _size = size || checkboxTheme?.size || "sm";

  if (Array.isArray(_state?.state) && _state?.value) {
    stateProp = _state?.state.includes(_state?.value);
  }

  const theme = useTheme();
  const checkboxIconStyles = cx(
    theme.checkbox.icon.base,
    theme.checkbox.icon.size[_size],
    _state?.disabled
      ? theme.checkbox.icon.disabled
      : stateProp
      ? theme.checkbox.icon.checked
      : theme.checkbox.icon.unchecked,
    className,
  );

  return (
    <Box
      className={checkboxIconStyles}
      ref={ref}
      aria-hidden="true"
      role="img"
      {...rest}
    >
      {children ? (
        children
      ) : stateProp === "indeterminate" ? (
        <IndeterminateIcon />
      ) : stateProp ? (
        <CheckIcon />
      ) : null}
    </Box>
  );
});
