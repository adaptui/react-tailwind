import { twMerge as cx } from "tailwind-merge";
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

  const isTrulyDisabled = isDisabled || props.isDisabled || props.disabled;
  const isTrulyRequired = isRequired || props.isRequired || props.required;
  // prettier-ignore
  const isTrulyInvalid = isInvalid || props.isInvalid || !!props["aria-invalid"];

  const { id, ...fieldInputProps } = useFormControl({
    ...rest,
    isDisabled: isTrulyDisabled,
    isInvalid: isTrulyInvalid,
    isRequired: isTrulyRequired,
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
