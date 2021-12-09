import { getComponentProps } from "../index";
import { splitProps } from "../utils";

import { USE_INPUT_STATE_KEYS } from "./__keys";
import { InputOwnProps, InputProps } from "./Input";
import { InputPrefixProps } from "./InputPrefix";
import { InputInitialState, useInputState } from "./InputState";
import { InputSuffixProps } from "./InputSuffix";
import { InputWrapperProps } from "./InputWrapper";

export const useInputStateSplit = (props: InputProps) => {
  const [stateProps, switchProps] = splitProps(props, USE_INPUT_STATE_KEYS) as [
    InputInitialState,
    InputOwnProps,
  ];
  const state = useInputState(stateProps);

  return [state, switchProps, stateProps] as const;
};

const componentMap = {
  InputWrapper: "wrapperProps",
  InputMain: "mainProps",
  InputPrefix: "prefixProps",
  InputSuffix: "suffixProps",
};

export const useInputProps = (props: React.PropsWithChildren<InputProps>) => {
  const [state, inputProps] = useInputStateSplit(props);
  const {} = state;
  const { className, style, children, ...restProps } = inputProps;
  const { componentProps } = getComponentProps(componentMap, children, state);

  const wrapperProps: InputWrapperProps = {
    ...state,
    className,
    style,
    ...componentProps.wrapperProps,
  };

  const mainProps: InputWrapperProps = {
    ...state,
    ...restProps,
    ...componentProps.mainProps,
  };

  const prefixProps: InputPrefixProps = {
    ...state,
    ...componentProps.prefixProps,
  };

  const suffixProps: InputSuffixProps = {
    ...state,
    ...componentProps.suffixProps,
  };

  return {
    state,
    wrapperProps,
    mainProps,
    prefixProps,
    suffixProps,
  };
};
