import React from "react";
import { cx } from "@renderlesskit/react";
import { Input as ReakitInput, InputProps as ReakitInputProps } from "reakit";

import { useTheme } from "../theme";

export type InputProps = Omit<ReakitInputProps, "prefix"> & {
  /**
   * Content to show before the input
   */
  prefix?: React.ReactNode;
  /**
   * Content to show after the input
   */
  suffix?: React.ReactNode;
  /**
   * Is Input invalid?
   */
  invalid?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { prefix, suffix, disabled, invalid, ...rest } = props;
    const theme = useTheme();

    const inputStyles = cx(theme.input.base);
    const containerStyles = cx(
      theme.input.container,
      invalid ? theme.input.invalid : "",
      disabled ? theme.input.disabled : "",
    );

    return (
      <div className={containerStyles}>
        {prefix && <span className={theme.input.prefix}>{prefix}</span>}
        <ReakitInput
          aria-invalid={invalid}
          className={inputStyles}
          disabled={disabled}
          ref={ref}
          {...rest}
        />
        {suffix && <span className={theme.input.suffix}>{suffix}</span>}
      </div>
    );
  },
);
