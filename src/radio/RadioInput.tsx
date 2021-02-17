import React from "react";
import { cx } from "@renderlesskit/react";
import { RadioProps as ReakitRadioProps, Radio as ReakitRadio } from "reakit";

import { useTheme } from "../theme";
import { useRadioContext } from "./Radio";
import { useRadioGroup } from "./RadioGroup";
import { forwardRefWithAs } from "../utils/types";

export type RadioInputProps = Partial<ReakitRadioProps> & {};

export const RadioInput = forwardRefWithAs<RadioInputProps>((props, ref) => {
  const { className, ...rest } = props;
  const { size, ...state } = useRadioGroup();
  const { iconProps, ...inputProps } = useRadioContext();

  const theme = useTheme();
  const radioStyles = cx(theme.radio.input, className);

  return (
    <ReakitRadio
      ref={ref}
      className={radioStyles}
      {...inputProps}
      {...state}
      {...rest}
    />
  );
});

RadioInput.displayName = "RadioInput";
