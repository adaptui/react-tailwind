import React from "react";
import { cx } from "@renderlesskit/react";
import { Box, BoxProps, RadioState } from "reakit";

import {
  RadioCheckedIcon,
  RadioDisabledIcon,
  RadioUncheckedIcon,
} from "../icons/RadioIcons";
import { useTheme } from "..";
import { RadioCommonProps } from "./Radio";
import { useRadioContext } from "./RadioGroup";
import { forwardRefWithAs } from "../utils/types";

export type RadioIconProps = BoxProps &
  RadioState &
  RadioCommonProps & {
    checkedIcon?: React.ReactNode;
    uncheckedIcon?: React.ReactNode;
    disabledIcon?: React.ReactNode;
  };

export const RadioIcon = forwardRefWithAs<
  Partial<RadioIconProps>,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { radioState, radioSize } = useRadioContext();
  const { value, size, disabled, ...mainProps } = props;
  const { className, children, ...rest } = mainProps;

  const _size = size || radioSize || "md";
  const stateProp = radioState?.state === value;

  const theme = useTheme();
  const radioIconStyles = cx(
    theme.radio.icon.base,
    theme.radio.icon.size[_size],
    disabled
      ? theme.radio.icon.disabled
      : stateProp
      ? theme.radio.icon.checked
      : theme.radio.icon.unchecked,
    className,
  );

  const iconMap = {
    checked: props.checkedIcon || <RadioCheckedIcon />,
    unchecked: props.uncheckedIcon || <RadioUncheckedIcon />,
    disabled: props.disabledIcon || <RadioDisabledIcon />,
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
