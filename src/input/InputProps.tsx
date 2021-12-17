import * as React from "react";

import { useSafeLayoutEffect } from "../hooks";
import { getComponentProps } from "../index";
import { runIfFn, splitProps, withIconA11y } from "../utils";

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
  const { prefix, suffix } = state;
  const { className, style, children, ...restProps } = inputProps;
  const { componentProps } = getComponentProps(componentMap, children, state);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setHasPaddingCalculated] = React.useState(false);

  const _prefix: InputProps["prefix"] =
    componentProps?.prefixProps?.children || prefix;
  const _suffix: InputProps["suffix"] =
    componentProps?.suffixProps?.children || suffix;

  const inputInlineStyles = React.useRef<Record<string, any>>({});
  const prefixRef = React.useRef<HTMLElement>(null);
  const suffixRef = React.useRef<HTMLElement>(null);

  React.useLayoutEffect(() => {
    let key = "";

    const prefixElement = prefixRef.current;
    const suffixElement = suffixRef.current;
    if (_prefix && prefixElement) {
      key = "paddingLeft";

      if (!key) return;
      inputInlineStyles.current[key] =
        prefixElement.getBoundingClientRect().width;
    }

    if (_suffix && suffixElement) {
      key = "paddingRight";

      if (!key) return;
      inputInlineStyles.current[key] =
        suffixElement.getBoundingClientRect().width;
    }

    setHasPaddingCalculated(true);
  }, [_prefix, _suffix]);

  const wrapperProps: InputWrapperProps = {
    ...state,
    className,
    style,
    ...componentProps.wrapperProps,
  };

  const mainProps: InputWrapperProps = {
    ...state,
    ...restProps,
    style: { ...inputInlineStyles.current },
    ...componentProps.mainProps,
  };

  const prefixProps: InputPrefixProps = {
    ...state,
    ...componentProps.prefixProps,
    ref: prefixRef,
    children: withIconA11y(runIfFn(_prefix, state)),
  };

  const suffixProps: InputSuffixProps = {
    ...state,
    ...componentProps.suffixProps,
    ref: suffixRef,
    children: withIconA11y(runIfFn(_suffix, state)),
  };

  return {
    state,
    wrapperProps,
    mainProps,
    prefixProps,
    suffixProps,
  };
};