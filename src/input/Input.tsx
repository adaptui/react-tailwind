import * as React from "react";

import { RenderProp } from "../utils";

import { InputBase, InputBaseHTMLProps } from "./InputBase";
import { InputPrefix } from "./InputPrefix";
import { useInputProps } from "./InputProps";
import { InputInitialState, InputStateReturn } from "./InputState";
import { InputSuffix } from "./InputSuffix";
import { InputWrapper } from "./InputWrapper";

export type InputOwnProps = InputBaseHTMLProps & {};

export type InputProps = InputInitialState &
  InputOwnProps &
  RenderProp<InputStateReturn>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      wrapperProps,
      mainProps,
      prefixProps,
      suffixProps,
      suffix,
      prefix,
    } = useInputProps(props);

    return (
      <InputWrapper {...wrapperProps}>
        <InputBase ref={ref} {...mainProps} />
        {prefix ? <InputPrefix {...prefixProps} /> : null}
        {suffix ? <InputSuffix {...suffixProps} /> : null}
      </InputWrapper>
    );
  },
);

Input.displayName = "Input";
