import React from "react";
import { cx } from "@renderlesskit/react";
import { Input as ReakitInput, InputProps as ReakitInputProps } from "reakit";
import { useTheme } from "../theme";

export type InputProps = Omit<ReakitInputProps, "prefix"> & {
  /**
   * Is Input invalid?
   */
  invalid?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { disabled, invalid, ...rest } = props;
    const theme = useTheme();

    const inputStyles = cx(
      theme.input.base,
      invalid ? theme.input.invalid : "",
      disabled ? theme.input.disabled : "",
    );

    return (
      <ReakitInput
        aria-invalid={invalid}
        className={inputStyles}
        disabled={disabled}
        ref={ref}
        {...rest}
      />
    );
  },
);

(Input as any).id = "Input";
