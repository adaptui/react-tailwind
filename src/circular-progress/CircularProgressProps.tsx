import { useMemo } from "react";
import {
  ProgressState,
  ProgressStateProps,
  useProgressState,
} from "@renderlesskit/react";

import { Children, getComponentProps, runIfFn } from "../utils";

import { CircularProgressBarProps } from "./CircularProgressBar";
import { CircularProgressBarWrapperProps } from "./CircularProgressBarWrapper";
import { CircularProgressHintProps } from "./CircularProgressHint";
import { CircularProgressTrackProps } from "./CircularProgressTrack";
import {
  CircularProgressUIState,
  useCircularProgressUIState,
} from "./CircularProgressUIState";
import { CircularProgressWrapperProps } from "./CircularProgressWrapper";

const componentMap = {
  CircularProgressWrapper: "wrapperProps",
  CircularProgressBarWrapper: "barWrapperProps",
  CircularProgressHint: "hintProps",
  CircularProgressBar: "barProps",
  CircularProgressTrack: "trackProps",
};

export function useCircularProgressProps(
  props: CircularProgressProps,
): CircularProgressPropsReturn {
  let { value, min, max, size, hint, children, ...restProps } = props;
  const state = useProgressState({
    value,
    min,
    max,
  });
  const uiState = useCircularProgressUIState({ size, hint });
  let uiProps: CircularProgressUIProps = useMemo(
    () => ({
      state,
      ...uiState,
    }),
    [state, uiState],
  );

  const { componentProps } = getComponentProps(componentMap, children, uiProps);
  const _hint: CircularProgressProps["hint"] =
    componentProps?.hintProps?.children || uiProps.hint;

  uiProps = {
    ...uiProps,
    hint: _hint,
  };

  const wrapperProps: CircularProgressWrapperProps = useMemo(
    () => ({
      ...uiProps,
      ...restProps,
      ...componentProps.wrapperProps,
    }),
    [componentProps.wrapperProps, restProps, uiProps],
  );

  const barWrapperProps: CircularProgressBarWrapperProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.barWrapperProps,
    }),
    [componentProps.barWrapperProps, uiProps],
  );

  const hintProps: CircularProgressHintProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.hintProps,
      children: runIfFn(uiProps.hint, uiProps),
    }),
    [uiProps, componentProps.hintProps],
  );

  const barProps: CircularProgressBarProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.barProps,
    }),
    [uiProps, componentProps.barProps],
  );

  const trackProps: CircularProgressTrackProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.trackProps,
    }),
    [uiProps, componentProps.trackProps],
  );

  const compoundedProps = useMemo(
    () => ({
      barWrapperProps,
      wrapperProps,
      hintProps,
      trackProps,
      barProps,
      uiProps,
    }),
    [barWrapperProps, wrapperProps, hintProps, trackProps, barProps, uiProps],
  );
  return compoundedProps;
}

export type CircularProgressUIProps = CircularProgressUIState & {
  state: ProgressState;
};

export type CircularProgressProps = ProgressStateProps &
  Omit<CircularProgressWrapperProps, "state" | "children"> &
  Pick<CircularProgressUIState, "hint"> &
  Partial<Pick<CircularProgressUIState, "size">> & {
    children?: Children<CircularProgressUIProps>;
  };

export type CircularProgressPropsReturn = {
  barWrapperProps: CircularProgressBarWrapperProps;
  wrapperProps: CircularProgressWrapperProps;
  hintProps: CircularProgressHintProps;
  barProps: CircularProgressBarProps;
  trackProps: CircularProgressTrackProps;
  uiProps: CircularProgressUIProps;
};
