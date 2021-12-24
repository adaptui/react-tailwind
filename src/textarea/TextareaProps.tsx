import * as React from "react";

import { getComponentProps } from "../index";
import { Spinner } from "../spinner";
import { runIfFn, splitProps, withIconA11y } from "../utils";

import { USE_TEXTAREA_STATE_KEYS } from "./__keys";
import { TextareaOwnProps, TextareaProps } from "./Textarea";
import { TextareaBaseProps } from "./TextareaBase";
import { TextareaGhostProps } from "./TextareaGhost";
import { TextareaIconProps } from "./TextareaIcon";
import { TextareaInitialState, useTextareaState } from "./TextareaState";
import { TextareaWrapperProps } from "./TextareaWrapper";

export const useTextareaStateSplit = (props: TextareaProps) => {
  const [stateProps, switchProps] = splitProps(
    props,
    USE_TEXTAREA_STATE_KEYS,
  ) as [TextareaInitialState, TextareaOwnProps];
  const state = useTextareaState(stateProps);

  return [state, switchProps, stateProps] as const;
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
  const [state, inputProps] = useTextareaStateSplit(props);
  const { icon, loading, size } = state;
  const { className, style, children, ...restProps } = inputProps;
  const { componentProps } = getComponentProps(componentMap, children, state);

  const __icon: TextareaProps["icon"] =
    componentProps?.iconProps?.children || icon;
  const _icon: TextareaProps["icon"] = React.useMemo(() => {
    return loading ? (
      <Spinner size={size !== "xl" ? "xs" : "md"} />
    ) : (
      withIconA11y(runIfFn(__icon, state))
    );
  }, [__icon, loading, size, state]);

  const wrapperProps: TextareaWrapperProps = {
    ...state,
    className,
    style,
    ...componentProps.wrapperProps,
  };

  const baseProps: TextareaBaseProps = {
    ...state,
    ...restProps,
    ...componentProps.baseProps,
  };

  const iconProps: TextareaIconProps = {
    ...state,
    ...componentProps.iconProps,
    children: _icon,
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
