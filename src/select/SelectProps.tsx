import * as React from "react";

import { getComponentProps } from "../index";
import { runIfFn, splitProps, withIconA11y } from "../utils";

import { USE_SELECT_STATE_KEYS } from "./__keys";
import { SelectOwnProps, SelectProps } from "./Select";
import { SelectPrefixProps } from "./SelectPrefix";
import { SelectInitialState, useSelectState } from "./SelectState";
import { SelectSuffixProps } from "./SelectSuffix";
import { SelectWrapperProps } from "./SelectWrapper";

export const useSelectStateSplit = (props: SelectProps) => {
  const [stateProps, switchProps] = splitProps(
    props,
    USE_SELECT_STATE_KEYS,
  ) as [SelectInitialState, SelectOwnProps];
  const state = useSelectState(stateProps);

  return [state, switchProps, stateProps] as const;
};

const componentMap = {
  SelectWrapper: "wrapperProps",
  SelectMain: "mainProps",
  SelectPrefix: "prefixProps",
  SelectSuffix: "suffixProps",
};

export const useSelectProps = (props: React.PropsWithChildren<SelectProps>) => {
  const [state, inputProps] = useSelectStateSplit(props);
  const { prefix, suffix } = state;
  const { className, style, children, ...restProps } = inputProps;
  const { componentProps, finalChildren } = getComponentProps(
    componentMap,
    children,
    state,
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setHasPaddingCalculated] = React.useState(false);

  const _prefix: SelectProps["prefix"] =
    componentProps?.prefixProps?.children || prefix;
  const _suffix: SelectProps["suffix"] =
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

  const wrapperProps: SelectWrapperProps = {
    ...state,
    className,
    style,
    ...componentProps.wrapperProps,
  };

  const mainProps: SelectWrapperProps = {
    ...state,
    ...restProps,
    style: { ...inputInlineStyles.current },
    children: finalChildren,
    ...componentProps.mainProps,
  };

  const prefixProps: SelectPrefixProps = {
    ...state,
    ...componentProps.prefixProps,
    ref: prefixRef,
    children: withIconA11y(runIfFn(_prefix, state)),
  };

  const suffixProps: SelectSuffixProps = {
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
