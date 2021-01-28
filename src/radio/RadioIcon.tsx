import React from "react";
import { cx } from "@renderlesskit/react";
import { Box, BoxProps, RadioProps, RadioState } from "reakit";
import { useTheme } from "..";
import { forwardRefWithAs } from "../utils/types";
import { useRadioContext } from "./RadioGroup";
import {
  RadioCircleCheckedIcon,
  RadioCircleDisabledIcon,
  RadioCircleUncheckedIcon,
} from "../icons/RadioCircle";

export type RadioIconProps = BoxProps &
  RadioState & {
    disabled?: boolean;
    value?: RadioProps["value"];
    size: keyof Renderlesskit.GetThemeValue<"radio", "icon">["size"];
  };

export const RadioIcon = forwardRefWithAs<
  Partial<RadioIconProps>,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { radioState } = useRadioContext();
  const { value, size = "md", disabled, ...mainProps } = props;
  const { className, children, ...rest } = mainProps;
  let stateProp = radioState?.state === value;

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

  return (
    <Box
      className={radioIconStyles}
      ref={ref}
      aria-hidden="true"
      role="img"
      {...rest}
    >
      {children ? (
        children
      ) : disabled ? (
        <RadioCircleDisabledIcon />
      ) : stateProp ? (
        <RadioCircleCheckedIcon />
      ) : (
        <RadioCircleUncheckedIcon />
      )}
    </Box>
  );
});
