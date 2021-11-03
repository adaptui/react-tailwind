import { getComponentProps, runIfFn, splitProps } from "../utils";

import { USE_PROGRESS_STATE_KEYS } from "./__keys";
import { ProgressOwnProps, ProgressProps } from "./Progress";
import { ProgressBarProps } from "./ProgressBar";
import { ProgressHintProps } from "./ProgressHint";
import { ProgressLabelProps } from "./ProgressLabel";
import {
  ProgressInitialState,
  ProgressState,
  useProgressState,
} from "./ProgressState";
import { ProgressTrackProps } from "./ProgressTrack";
import { ProgressWrapperProps } from "./ProgressWrapper";

export const useProgressStateSplit = (props: ProgressProps) => {
  const [stateProps, progressProps] = splitProps(
    props,
    USE_PROGRESS_STATE_KEYS,
  ) as [ProgressInitialState, ProgressOwnProps];
  const state = useProgressState(stateProps);

  return [state, progressProps, stateProps] as const;
};

const componentMap = {
  ProgressWrapper: "wrapperProps",
  ProgressLabel: "labelProps",
  ProgressHint: "hintProps",
  ProgressBar: "barProps",
  ProgressTrack: "trackProps",
};

export const useProgressProps = (
  props: React.PropsWithChildren<ProgressProps>,
) => {
  const [state, progressProps] = useProgressStateSplit(props);
  const { label, hint } = state;
  const { children, ...restProps } = progressProps;
  const { componentProps } = getComponentProps(componentMap, children, state);

  const _label: ProgressState["label"] =
    componentProps?.textProps?.children || label;
  const _hint: ProgressState["hint"] =
    componentProps?.hintProps?.children || hint;

  const wrapperProps: ProgressWrapperProps = {
    ...state,
    ...restProps,
    label: _label,
    ...componentProps.wrapperProps,
  };

  const barProps: ProgressBarProps = {
    ...state,
    ...componentProps.barProps,
  };

  const trackProps: ProgressTrackProps = {
    ...state,
    ...componentProps.trackProps,
  };

  const labelProps: ProgressLabelProps = {
    ...state,
    ...componentProps.labelProps,
    children: runIfFn(_label, state),
  };

  const hintProps: ProgressHintProps = {
    ...state,
    ...componentProps.trackProps,
    children: runIfFn(_hint, state),
  };

  return {
    label: _label,
    hint: _hint,
    state,
    wrapperProps,
    labelProps,
    hintProps,
    barProps,
    trackProps,
  };
};
