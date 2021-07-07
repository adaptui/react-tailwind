import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { useCheckboxContext } from "./Checkbox";
import { forwardRefWithAs } from "../utils/types";
import { CheckIcon, IndeterminateIcon } from "../icons";

export type CheckboxIconProps = BoxProps & { isInvalid?: boolean };

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
      ? theme.checkbox.icon.state.disabled
      : stateProp === "indeterminate"
      ? cx(
          theme.checkbox.icon.state.indeterminate,
          props.isInvalid && theme.checkbox.icon.state.fill_invalid,
        )
      : stateProp
      ? cx(
          theme.checkbox.icon.state.checked,
          props.isInvalid && theme.checkbox.icon.state.fill_invalid,
        )
      : cx(
          theme.checkbox.icon.state.unchecked,
          props.isInvalid && theme.checkbox.icon.state.stroke_invalid,
        ),
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
