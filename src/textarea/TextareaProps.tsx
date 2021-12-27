import * as React from "react";

import { getComponentProps } from "../index";
import { runIfFn, splitProps, withIconA11y } from "../utils";

import { USE_TEXTAREA_STATE_KEYS } from "./__keys";
import { TextareaOwnProps, TextareaProps } from "./Textarea";
import { TextareaBaseProps } from "./TextareaBase";
import { TextareaGhostProps } from "./TextareaGhost";
import { TextareaIconProps } from "./TextareaIcon";
import { TextareaInitialState, useTextareaState } from "./TextareaState";
import { TextareaWrapperProps } from "./TextareaWrapper";

export const useTextareaStateSplit = (props: TextareaProps) => {
  const [stateProps, textareaProps] = splitProps(
    props,
    USE_TEXTAREA_STATE_KEYS,
  ) as [TextareaInitialState, TextareaOwnProps];
  const state = useTextareaState(stateProps);

  return [state, textareaProps, stateProps] as const;
};

const componentMap = {
  TextareaWrapper: "wrapperProps",
  TextareaMain: "baseProps",
  TextareaPrefix: "iconProps",
  TextareaGhost: "ghostProps",
};

export const useTextareaProps = (
  props: React.PropsWithChildren<TextareaProps>,
) => {
  const [state, textareaProps, stateProps] = useTextareaStateSplit(props);
  const { placeholder, value, onChange } = stateProps;
  const { icon } = state;
  const { className, style, children, ...restProps } = textareaProps;
  const { componentProps } = getComponentProps(componentMap, children, state);

  const _icon: TextareaProps["icon"] =
    componentProps?.iconProps?.children || icon;

  const wrapperProps: TextareaWrapperProps = {
    ...state,
    className,
    style,
    ...componentProps.wrapperProps,
  };

  const baseProps: TextareaBaseProps = {
    ...state,
    ...restProps,
    placeholder,
    value,
    onChange,
    ...componentProps.baseProps,
  };

  const iconProps: TextareaIconProps = {
    ...state,
    ...componentProps.iconProps,
    children: withIconA11y(runIfFn(_icon, state)),
  };

  const ghostProps: TextareaGhostProps = {
    ...state,
    ...restProps,
    ...componentProps.ghostProps,
  };

  return {
    state,
    icon: _icon,
    wrapperProps,
    baseProps,
    iconProps,
    ghostProps,
  };
};
