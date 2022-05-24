import * as React from "react";

import { InputBase } from "./InputBase";
import { InputPrefix } from "./InputPrefix";
import { InputProps, useInputProps } from "./InputProps";
import { InputSuffix } from "./InputSuffix";
import { InputWrapper } from "./InputWrapper";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { wrapperProps, baseProps, prefixProps, suffixProps, uiProps } =
      useInputProps(props);
    const { prefix, suffix } = uiProps;

    return (
      <InputWrapper {...wrapperProps}>
        <InputBase ref={ref} {...baseProps} />
        {prefix ? <InputPrefix {...prefixProps} /> : null}
        {suffix ? <InputSuffix {...suffixProps} /> : null}
      </InputWrapper>
    );
  },
);

Input.displayName = "Input";
