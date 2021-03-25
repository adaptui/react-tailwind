import React from "react";
import { cx } from "@renderlesskit/react";
import { RadioProps as ReakitRadioProps, Radio as ReakitRadio } from "reakit";

import { useTheme } from "../theme";
import { forwardRefWithAs } from "../utils/types";
import { useRadioProps, useRadioStateContext } from "./Radio";
import { useFormControl } from "../form-field";

export type RadioInputProps = Partial<ReakitRadioProps> & {};

export const RadioInput = forwardRefWithAs<RadioInputProps>((props, ref) => {
  const { className, ...rest } = props;
  const state = useRadioStateContext();
  const {
    size,
    checkedIcon,
    disabledIcon,
    uncheckedIcon,
    ...iconProps
  } = useRadioProps();

  const theme = useTheme();
  const radioStyles = cx(theme.radio.input, className);
  const fieldInputProps = useFormControl();

  return (
    <ReakitRadio
      ref={ref}
      className={radioStyles}
      {...state}
      {...iconProps}
      {...fieldInputProps}
      {...rest}
    />
  );
});

RadioInput.displayName = "RadioInput";
