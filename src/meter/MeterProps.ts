import { getComponentProps, runIfFn, splitProps } from "../utils";

import { USE_METER_STATE_KEYS } from "./__keys";
import { MeterOwnProps, MeterProps } from "./Meter";
import { MeterBarProps } from "./MeterBar";
import { MeterBarWrapperProps } from "./MeterBarWrapper";
import { MeterHintProps } from "./MeterHint";
import { MeterLabelProps } from "./MeterLabel";
import { MeterInitialState, MeterState, useMeterState } from "./MeterState";
import { MeterTrackProps } from "./MeterTrack";
import { MeterWrapperProps } from "./MeterWrapper";

export const useMeterStateSplit = (props: MeterProps) => {
  const [stateProps, meterProps] = splitProps(props, USE_METER_STATE_KEYS) as [
    MeterInitialState,
    MeterOwnProps,
  ];
  const state = useMeterState(stateProps);

  return [state, meterProps, stateProps] as const;
};

const componentMap = {
  MeterWrapper: "wrapperProps",
  MeterLabel: "labelProps",
  MeterHint: "hintProps",
  MeterBarWrapper: "barWrapperProps",
  MeterBar: "barProps",
  MeterTrack: "trackProps",
};

export const useMeterProps = (props: React.PropsWithChildren<MeterProps>) => {
  const [state, meterProps] = useMeterStateSplit(props);
  const { label, hint } = state;
  const { children, ...restProps } = meterProps;
  const { componentProps } = getComponentProps(componentMap, children, state);

  const _label: MeterState["label"] =
    componentProps?.textProps?.children || label;
  const _hint: MeterState["hint"] = componentProps?.hintProps?.children || hint;

  const wrapperProps: MeterWrapperProps = {
    ...state,
    ...restProps,
    label: _label,
    ...componentProps.wrapperProps,
  };

  const barProps: MeterBarProps = {
    ...state,
    ...componentProps.barProps,
  };

  const barWrapperProps: MeterBarWrapperProps = {
    ...state,
    ...componentProps.barWrapperProps,
  };

  const trackProps: MeterTrackProps = {
    ...state,
    ...componentProps.trackProps,
  };

  const labelProps: MeterLabelProps = {
    ...state,
    ...componentProps.labelProps,
    children: runIfFn(_label, state),
  };

  const hintProps: MeterHintProps = {
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
    barWrapperProps,
    barProps,
    trackProps,
  };
};
