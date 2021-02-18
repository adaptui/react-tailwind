import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { useCheckboxContext } from "./Checkbox";
import { forwardRefWithAs } from "../utils/types";
import { CheckIcon, IndeterminateIcon } from "../icons";

export type CheckboxIconProps = BoxProps & {};

export const CheckboxIcon = forwardRefWithAs<
  CheckboxIconProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, children, ...rest } = props;
  const { state, size = "md" } = useCheckboxContext();

  let stateProp = state?.state;

  if (Array.isArray(stateProp) && state?.value) {
    stateProp = stateProp.includes(state?.value);
  }

  const theme = useTheme();
  const checkboxIconStyles = cx(
    theme.checkbox.icon.base,
    theme.checkbox.icon.size[size],
    state?.disabled
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

CheckboxIcon.displayName = "CheckboxIcon";
