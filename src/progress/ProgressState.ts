import {
  unstable_IdActions,
  unstable_IdInitialState,
  unstable_IdState,
  unstable_useIdState,
} from "reakit";
import { splitProps } from "reakit-utils";
import {
  ProgressInitialState as RenderlesskitProgressInitialState,
  ProgressState as RenderlesskitProgressState,
  useProgressState as useRenderlesskitProgressState,
} from "@renderlesskit/react";

import { getComponentProps, runIfFn } from "../utils";

import { USE_PROGRESS_STATE_KEYS } from "./__keys";
import { ProgressOwnProps, ProgressProps } from "./Progress";
import { ProgressBarProps } from "./ProgressBar";
import { ProgressHintProps } from "./ProgressHint";
import { ProgressLabelProps } from "./ProgressLabel";
import { ProgressTrackProps } from "./ProgressTrack";
import { ProgressWrapperProps } from "./ProgressWrapper";

export type ProgressState = unstable_IdState &
  RenderlesskitProgressState & {
    /**
     * How large should the progress be?
     *
     * @default md
     */
    size: keyof Renderlesskit.GetThemeValue<"progress", "track", "size">;
  };

export type ProgressActions = unstable_IdActions;

export type ProgressStateReturn = ProgressState & ProgressActions;

export type ProgressInitialState = unstable_IdInitialState &
  RenderlesskitProgressInitialState &
  Partial<Pick<ProgressState, "size">>;

export function useProgressState(
  props: ProgressInitialState = {},
): ProgressStateReturn {
  const state = useRenderlesskitProgressState(props);
  const id = unstable_useIdState();
  const { size = "md" } = props;

  return {
    ...state,
    ...id,
    size,
  };
}

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
  const { label, hint, children, ...restProps } = progressProps;
  const { componentProps } = getComponentProps(componentMap, children, state);

  const _label: ProgressOwnProps["label"] =
    componentProps?.textProps?.children || label;
  const _hint: ProgressOwnProps["hint"] =
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
