import React from "react";
import { cx } from "@renderlesskit/react";
import { RadioProps as ReakitRadioProps, Radio as ReakitRadio } from "reakit";

import { useTheme } from "../theme";
import { forwardRefWithAs } from "../utils/types";
import { useRadioProps, useRadioStateContext } from "./Radio";
import { CommonFieldProps, useFormControl } from "../form-field";

export type RadioInputProps = Partial<ReakitRadioProps> &
  Omit<CommonFieldProps, "isReadOnly" | "id">;

export const RadioInput = forwardRefWithAs<RadioInputProps>((props, ref) => {
  const { className, ...rest } = props;
  const { isDisabled, isRequired, isInvalid, ...state } =
    useRadioStateContext();
  const { size, checkedIcon, disabledIcon, uncheckedIcon, ...iconProps } =
    useRadioProps();

  const theme = useTheme();
  const radioStyles = cx(theme.radio.input, className);

  const { id, ...fieldInputProps } = useFormControl({
    ...rest,
    isDisabled: isDisabled || props.isDisabled || props.disabled,
    isInvalid:
      isInvalid || props.isInvalid || (!!props["aria-invalid"] as boolean),
    isRequired: isRequired || props.isRequired || props.required,
  });

  return (
    <ReakitRadio
      ref={ref}
      className={radioStyles}
      {...iconProps}
      {...state}
      {...fieldInputProps}
      {...rest}
    />
  );
});

RadioInput.displayName = "RadioInput";
