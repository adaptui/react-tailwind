import {
  unstable_IdActions,
  unstable_IdInitialState,
  unstable_IdState,
  unstable_useIdState,
} from "reakit";
import { splitProps } from "reakit-utils";
import {
  MeterInitialState as RenderlesskitMeterInitialState,
  MeterState as RenderlesskitMeterState,
  useMeterState as useRenderlesskitMeterState,
} from "@renderlesskit/react";

import { getComponentProps, runIfFn } from "../utils";

import { USE_METER_STATE_KEYS } from "./__keys";
import { MeterOwnProps, MeterProps } from "./Meter";
import { MeterBarProps } from "./MeterBar";
import { MeterBarWrapperProps } from "./MeterBarWrapper";
import { MeterHintProps } from "./MeterHint";
import { MeterLabelProps } from "./MeterLabel";
import { MeterTrackProps } from "./MeterTrack";
import { MeterWrapperProps } from "./MeterWrapper";

export type MeterState = unstable_IdState &
  RenderlesskitMeterState & {
    /**
     * How large should the meter be?
     *
     * @default md
     */
    size: keyof Renderlesskit.GetThemeValue<"meter", "track", "size">;

    /**
     * No of intervals for the meter.
     *
     * @default 1
     */
    intervals: number;

    /**
     * If true, meter bar intervals will have flat broders
     */
    flatBorders: boolean;
  };

export type MeterActions = unstable_IdActions;

export type MeterStateReturn = MeterState & MeterActions;

export type MeterInitialState = unstable_IdInitialState &
  RenderlesskitMeterInitialState &
  Partial<Pick<MeterState, "size" | "intervals" | "flatBorders">>;

export function useMeterState(props: MeterInitialState = {}): MeterStateReturn {
  const state = useRenderlesskitMeterState(props);
  const id = unstable_useIdState();
  const { size = "md", intervals = 1, flatBorders = true } = props;

  return {
    ...state,
    ...id,
    size,
    intervals,
    flatBorders: intervals === 1 ? false : flatBorders,
  };
}

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
  const { label, hint, children, ...restProps } = meterProps;
  const { componentProps } = getComponentProps(componentMap, children, state);

  const _label: MeterOwnProps["label"] =
    componentProps?.textProps?.children || label;
  const _hint: MeterOwnProps["hint"] =
    componentProps?.hintProps?.children || hint;

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
