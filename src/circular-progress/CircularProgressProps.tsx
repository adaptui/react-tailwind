import { getComponentProps, runIfFn, splitProps } from "../utils";

import { USE_CIRCULAR_PROGRESS_STATE_KEYS } from "./__keys";
import {
  CircularProgressOwnProps,
  CircularProgressProps,
} from "./CircularProgress";
import { CircularProgressBarProps } from "./CircularProgressBar";
import { CircularProgressBarWrapperProps } from "./CircularProgressBarWrapper";
import { CircularProgressHintProps } from "./CircularProgressHint";
import {
  CircularProgressInitialState,
  CircularProgressState,
  useCircularProgressState,
} from "./CircularProgressState";
import { CircularProgressTrackProps } from "./CircularProgressTrack";
import { CircularProgressWrapperProps } from "./CircularProgressWrapper";

export const useCircularProgressStateSplit = (props: CircularProgressProps) => {
  const [stateProps, progressProps] = splitProps(
    props,
    USE_CIRCULAR_PROGRESS_STATE_KEYS,
  ) as [CircularProgressInitialState, CircularProgressOwnProps];
  const state = useCircularProgressState(stateProps);

  return [state, progressProps, stateProps] as const;
};

const componentMap = {
  CircularProgressWrapper: "wrapperProps",
  CircularProgressHint: "hintProps",
  CircularProgressBarWrapper: "barWrapperProps",
  CircularProgressTrack: "trackProps",
  CircularProgressBar: "barProps",
};

export const useCircularProgressProps = (
  props: React.PropsWithChildren<CircularProgressProps>,
) => {
  const [state, progressProps] = useCircularProgressStateSplit(props);
  const { hint } = state;
  const { children, ...restProps } = progressProps;
  const { componentProps } = getComponentProps(componentMap, children, state);

  const _hint: CircularProgressState["hint"] =
    componentProps?.textProps?.children || hint;

  const wrapperProps: CircularProgressWrapperProps = {
    ...state,
    ...restProps,
    ...componentProps.wrapperProps,
  };

  const barWrapperProps: CircularProgressBarWrapperProps = {
    ...state,
    hint: _hint,
    ...componentProps.barWrapperProps,
  };

  const trackProps: CircularProgressTrackProps = {
    ...state,
    hint: _hint,
    ...componentProps.trackProps,
  };

  const barProps: CircularProgressBarProps = {
    ...state,
    hint: _hint,
    ...componentProps.barProps,
  };

  const hintProps: CircularProgressHintProps = {
    ...state,
    ...componentProps.hintProps,
    children: runIfFn(_hint, state),
  };

  return {
    hint: _hint,
    state,
    wrapperProps,
    hintProps,
    barWrapperProps,
    trackProps,
    barProps,
  };
};
