import * as React from "react";

import { RenderProp } from "../utils";

import { InputMain, InputMainHTMLProps } from "./InputMain";
import { InputPrefix } from "./InputPrefix";
import { useInputProps } from "./InputProps";
import { InputInitialState, InputStateReturn } from "./InputState";
import { InputSuffix } from "./InputSuffix";
import { InputWrapper } from "./InputWrapper";

export type InputOwnProps = InputMainHTMLProps & {};

export type InputProps = InputInitialState &
  InputOwnProps &
  RenderProp<InputStateReturn>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { state, wrapperProps, mainProps, prefixProps, suffixProps } =
      useInputProps(props);
    const { prefix, suffix } = state;

    return (
      <InputWrapper {...wrapperProps}>
        {prefix ? <InputPrefix {...prefixProps} /> : null}
        <InputMain {...mainProps} />
        {suffix ? <InputSuffix {...suffixProps} /> : null}
      </InputWrapper>
    );
  },
);

Input.displayName = "Input";
