import { splitProps } from "reakit-utils";
import {
  ProgressInitialState as RenderlesskitProgressInitialState,
  ProgressState as RenderlesskitProgressState,
  useProgressState as useRenderlesskitProgressState,
} from "@renderlesskit/react";

import { getComponentProps, runIfFn } from "../utils";

import { USE_CIRCULAR_PROGRESS_STATE_KEYS } from "./__keys";
import {
  CircularProgressOwnProps,
  CircularProgressProps,
} from "./CircularProgress";
import { CircularProgressBarProps } from "./CircularProgressBar";
import { CircularProgressBarWrapperProps } from "./CircularProgressBarWrapper";
import { CircularProgressHintProps } from "./CircularProgressHint";
import { CircularProgressTrackProps } from "./CircularProgressTrack";
import { CircularProgressWrapperProps } from "./CircularProgressWrapper";

export type CircularProgressState = RenderlesskitProgressState & {
  /**
   * How large should the progress be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<
    "circularProgress",
    "barWrapper",
    "base",
    "size"
  >;
};

export type CircularProgressActions = {};

export type CircularProgressStateReturn = CircularProgressState &
  CircularProgressActions;

export type CircularProgressInitialState = RenderlesskitProgressInitialState &
  Partial<Pick<CircularProgressState, "size">>;

export function useCircularProgressState(
  props: CircularProgressInitialState = {},
): CircularProgressStateReturn {
  const state = useRenderlesskitProgressState(props);
  const { size = "md" } = props;

  return {
    ...state,
    size,
  };
}

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
  const { hint, children, ...restProps } = progressProps;
  const { componentProps } = getComponentProps(componentMap, children, state);
  console.log("%cchildren", "color: #731d1d", children);
  console.log("%ccomponentProps", "color: #f200e2", componentProps);

  const _hint: CircularProgressOwnProps["hint"] =
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
