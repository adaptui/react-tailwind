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
import { RadioProps, useRadioProps, useRadioState } from "./Radio";

export type RadioIconProps = BoxProps &
  Pick<RadioProps, "value" | "disabled"> & {
    checkedIcon?: React.ReactNode;
    uncheckedIcon?: React.ReactNode;
    disabledIcon?: React.ReactNode;
  };

export const RadioIcon = forwardRefWithAs<
  Partial<RadioIconProps>,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, children, ...rest } = props;
  const { value, disabled, size = "md" } = useRadioProps();
  const { state } = useRadioState();
  const stateProp = state === value;

  const theme = useTheme();
  const radioIconStyles = cx(
    theme.radio.icon.base,
    theme.radio.icon.size[size],
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

RadioIcon.displayName = "RadioIcon";
