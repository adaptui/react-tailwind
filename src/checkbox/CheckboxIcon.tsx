import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { useCheckboxContext } from "./Checkbox";
import { forwardRefWithAs, RenderProp } from "../utils/types";
import { CheckIcon, IndeterminateIcon } from "../icons";
import { runIfFn } from "../utils";

export type CheckboxIconRenderPropValues = {
  isInvalid: boolean;
  isDisabled: boolean;
  isChecked: boolean;
  isIndeterminate: boolean;
};

export type CheckboxIconProps = BoxProps &
  RenderProp<CheckboxIconRenderPropValues> & {
    isInvalid?: boolean;
  };

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

  const invalid = !!(props.isInvalid || state?.isInvalid);
  const isDisabled = !!state?.disabled;
  const isIndeterminate = stateProp === "indeterminate";
  const isChecked = stateProp === true;
  const isUnchecked = stateProp === false || stateProp === undefined;

  const compoundStyles = (key: string) => {
    return cx(
      // TODO: Fix the ts error later
      // @ts-ignore
      theme.checkbox.icon.state[key],
      invalid
        ? // @ts-ignore
          theme.checkbox.icon.state[`${key}_invalid`]
        : // @ts-ignore
          theme.checkbox.icon.state[`${key}_valid`],
    );
  };

  const theme = useTheme();
  const checkboxIconStyles = cx(
    theme.checkbox.icon.base,
    theme.checkbox.icon.size[size],
    isDisabled && theme.checkbox.icon.state.disabled,
    isIndeterminate && compoundStyles("indeterminate"),
    isChecked && compoundStyles("checked"),
    isUnchecked && compoundStyles("unchecked"),
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
        runIfFn(children, {
          isChecked,
          isIndeterminate,
          isInvalid: invalid,
          isDisabled,
        })
      ) : stateProp === "indeterminate" ? (
        <IndeterminateIcon />
      ) : stateProp ? (
        <CheckIcon />
      ) : null}
    </Box>
  );
});

CheckboxIcon.displayName = "CheckboxIcon";
