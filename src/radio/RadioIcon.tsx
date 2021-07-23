import React from "react";
import { cx } from "@renderlesskit/react";

import {
  RadioCheckedIcon,
  RadioDisabledIcon,
  RadioUncheckedIcon,
} from "../icons/RadioIcons";
import { useTheme } from "../index";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { RadioProps, useRadioProps, useRadioStateContext } from "./Radio";
import { CommonFieldProps } from "../form-field";

export type RadioIconProps = BoxProps &
  Pick<RadioProps, "value" | "disabled"> & {
    checkedIcon?: React.ReactNode;
    uncheckedIcon?: React.ReactNode;
    disabledIcon?: React.ReactNode;
  } & Omit<CommonFieldProps, "id" | "isReadOnly">;

export const RadioIcon = forwardRefWithAs<
  Partial<RadioIconProps>,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const {
    checkedIcon,
    uncheckedIcon,
    disabledIcon,
    className,
    children,
    ...rest
  } = props;
  const { value, disabled, size = "md" } = useRadioProps();
  const { state } = useRadioStateContext();
  const stateProp = state === value;

  const invalid = !!(props.isInvalid || state?.isInvalid);
  const isDisabled = props.isDisabled || !!state?.disabled;
  const isChecked = stateProp === true;
  const isUnchecked = stateProp === false || stateProp === undefined;

  const compoundStyles = (key: keyof typeof theme.radio.icon.state.default) => {
    return cx(
      invalid
        ? cx(
            theme.radio.icon.state.invalid[key],
            theme.radio.icon.state.hover_invalid[key],
          )
        : cx(
            theme.radio.icon.state.default[key],
            theme.radio.icon.state.hover[key],
          ),
    );
  };

  const theme = useTheme();
  const radioIconStyles = cx(
    theme.radio.icon.base,
    theme.radio.icon.size[size],
    isDisabled && theme.radio.icon.state.disabled,
    isChecked && compoundStyles("checked"),
    isUnchecked && compoundStyles("unchecked"),
    className,
  );

  const iconMap = {
    checked: checkedIcon || <RadioCheckedIcon />,
    unchecked: uncheckedIcon || <RadioUncheckedIcon />,
    disabled: disabledIcon || <RadioDisabledIcon />,
  };

  return (
    <Box
      ref={ref}
      role="img"
      aria-hidden="true"
      className={radioIconStyles}
      {...rest}
    >
      {children
        ? children
        : disabled
        ? iconMap.disabled
        : stateProp
        ? iconMap.checked
        : iconMap.unchecked}
    </Box>
  );
});

RadioIcon.displayName = "RadioIcon";
