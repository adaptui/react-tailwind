import { useMemo } from "react";
import { MeterState, MeterStateProps, useMeterState } from "@adaptui/react";

import { getComponentProps, RenderProp, runIfFn } from "../utils";

import { MeterBarProps } from "./MeterBar";
import { MeterBarWrapperProps } from "./MeterBarWrapper";
import { MeterHintProps } from "./MeterHint";
import { MeterLabelProps } from "./MeterLabel";
import { MeterTrackProps } from "./MeterTrack";
import {
  MeterUIState,
  MeterUIStateProps,
  useMeterUIState,
} from "./MeterUIState";
import { MeterWrapperProps } from "./MeterWrapper";

const componentMap = {
  MeterWrapper: "wrapperProps",
  MeterLabel: "labelProps",
  MeterHint: "hintProps",
  MeterBarWrapper: "barWrapperProps",
  MeterBar: "barProps",
  MeterTrack: "trackProps",
};

export function useMeterProps(props: MeterProps): MeterPropsReturn {
  let {
    value,
    min,
    max,
    size,
    themeColor,
    intervals,
    flatBorders,
    label,
    hint,
    children,
    ...restProps
  } = props;
  const state = useMeterState({
    value,
    min,
    max,
  });
  const uiState = useMeterUIState({
    size,
    themeColor,
    flatBorders,
    intervals,
    label,
    hint,
  });
  let uiProps: MeterUIProps = useMemo(
    () => ({
      state,
      ...uiState,
    }),
    [state, uiState],
  );

  const { componentProps } = getComponentProps(componentMap, children, uiProps);
  const _label: MeterProps["label"] =
    componentProps?.textProps?.children || uiProps.label;
  const _hint: MeterProps["hint"] =
    componentProps?.hintProps?.children || uiProps.hint;

  uiProps = {
    ...uiProps,
    label: _label,
    hint: _hint,
  };

  const wrapperProps: MeterWrapperProps = useMemo(
    () => ({
      ...uiProps,
      ...restProps,
      ...componentProps.wrapperProps,
    }),
    [componentProps.wrapperProps, restProps, uiProps],
  );

  const barProps: MeterBarProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.barProps,
    }),
    [componentProps.barProps, uiProps],
  );

  const barWrapperProps: MeterBarWrapperProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.barWrapperProps,
    }),
    [componentProps.barWrapperProps, uiProps],
  );

  const trackProps: MeterTrackProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.trackProps,
    }),
    [componentProps.trackProps, uiProps],
  );

  const labelProps: MeterLabelProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.labelProps,
      children: runIfFn(_label, uiProps),
    }),
    [_label, componentProps.labelProps, uiProps],
  );

  const hintProps: MeterHintProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.hintProps,
      children: runIfFn(_hint, uiProps),
    }),
    [_hint, componentProps.hintProps, uiProps],
  );

  return {
    uiProps,
    wrapperProps,
    labelProps,
    hintProps,
    barWrapperProps,
    barProps,
    trackProps,
  };
}

export type MeterUIProps = MeterUIState & {
  state: MeterState;
};

export type MeterProps = MeterStateProps &
  Omit<MeterWrapperProps, "state" | "children"> &
  MeterUIStateProps & {
    children?: RenderProp<MeterUIProps>;
  };

export type MeterPropsReturn = {
  barWrapperProps: MeterBarWrapperProps;
  wrapperProps: MeterWrapperProps;
  hintProps: MeterHintProps;
  labelProps: MeterLabelProps;
  barProps: MeterBarProps;
  trackProps: MeterTrackProps;
  uiProps: MeterUIProps;
};
