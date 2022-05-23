import { useMemo } from "react";
import {
  ProgressState,
  ProgressStateProps,
  useProgressState,
} from "@renderlesskit/react";

import { Children, getComponentProps, runIfFn } from "../utils";

import { ProgressBarProps } from "./ProgressBar";
import { ProgressHintProps } from "./ProgressHint";
import { ProgressLabelProps } from "./ProgressLabel";
import { ProgressTrackProps } from "./ProgressTrack";
import { ProgressUIState, useProgressUIState } from "./ProgressUIState";
import { ProgressWrapperProps } from "./ProgressWrapper";

const componentMap = {
  ProgressWrapper: "wrapperProps",
  ProgressLabel: "labelProps",
  ProgressHint: "hintProps",
  ProgressBar: "barProps",
  ProgressTrack: "trackProps",
};

export function useProgressProps(props: ProgressProps): ProgressPropsReturn {
  let { value, min, max, size, label, hint, children, ...restProps } = props;
  const state = useProgressState({
    value,
    min,
    max,
  });
  const uiState = useProgressUIState({ size, label, hint });
  let uiProps: ProgressUIProps = useMemo(
    () => ({
      state,
      ...uiState,
    }),
    [state, uiState],
  );

  const { componentProps } = getComponentProps(componentMap, children, uiProps);
  const _hint: ProgressProps["hint"] =
    componentProps?.hintProps?.children || uiProps.hint;
  const _label: ProgressProps["label"] =
    componentProps?.textProps?.children || uiProps.label;

  uiProps = {
    ...uiProps,
    label: _label,
    hint: _hint,
  };

  const wrapperProps: ProgressWrapperProps = useMemo(
    () => ({
      ...uiProps,
      ...restProps,
      ...componentProps.wrapperProps,
    }),
    [componentProps.wrapperProps, restProps, uiProps],
  );

  const labelProps: ProgressLabelProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.labelProps,
      children: runIfFn(uiProps.label, uiProps),
    }),
    [componentProps.labelProps, uiProps],
  );

  const hintProps: ProgressHintProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.hintProps,
      children: runIfFn(uiProps.hint, uiProps),
    }),
    [uiProps, componentProps.hintProps],
  );

  const barProps: ProgressBarProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.barProps,
    }),
    [uiProps, componentProps.barProps],
  );

  const trackProps: ProgressTrackProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.trackProps,
    }),
    [uiProps, componentProps.trackProps],
  );

  const compoundedProps = useMemo(
    () => ({
      labelProps,
      wrapperProps,
      hintProps,
      trackProps,
      barProps,
      uiProps,
    }),
    [labelProps, wrapperProps, hintProps, trackProps, barProps, uiProps],
  );
  return compoundedProps;
}

export type ProgressUIProps = ProgressUIState & {
  state: ProgressState;
};

export type ProgressProps = ProgressStateProps &
  Omit<ProgressWrapperProps, "state" | "children"> &
  Pick<ProgressUIState, "label" | "hint"> &
  Partial<Pick<ProgressUIState, "size">> & {
    children?: Children<ProgressUIProps>;
  };

export type ProgressPropsReturn = {
  labelProps: ProgressLabelProps;
  wrapperProps: ProgressWrapperProps;
  hintProps: ProgressHintProps;
  barProps: ProgressBarProps;
  trackProps: ProgressTrackProps;
  uiProps: ProgressUIProps;
};
