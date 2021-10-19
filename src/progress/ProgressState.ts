import { splitProps } from "reakit-utils";
import {
  ProgressInitialState as RenderlesskitProgressInitialState,
  ProgressState as RenderlesskitProgressState,
  useProgressState as useRenderlesskitProgressState,
} from "@renderlesskit/react";

import { getComponentProps } from "../utils";

import { USE_PROGRESS_STATE_KEYS } from "./__keys";
import { ProgressOwnProps, ProgressProps } from "./Progress";
import { ProgressBarProps } from "./ProgressBar";
import { ProgressTrackProps } from "./ProgressTrack";

export type ProgressState = RenderlesskitProgressState & {
  /**
   * How large should the progress be?
   *
   * @default "md"
   */
  size: keyof Renderlesskit.GetThemeValue<"progress", "track", "size">;
};

export type ProgressStateReturn = ProgressState;

export type ProgressInitialState = RenderlesskitProgressInitialState &
  Partial<Pick<ProgressState, "size">>;

export function useProgressState(
  props: ProgressInitialState = {},
): ProgressStateReturn {
  const state = useRenderlesskitProgressState(props);
  const { size = "md" } = props;

  return {
    ...state,
    size,
  };
}

export const useProgressStateSplit = (props: ProgressProps) => {
  const [stateProps, switchProps] = splitProps(
    props,
    USE_PROGRESS_STATE_KEYS,
  ) as [ProgressInitialState, ProgressOwnProps];
  const state = useProgressState(stateProps);

  return [state, switchProps, stateProps] as const;
};

const componentMap = {
  ProgressBar: "barProps",
  ProgressTrack: "trackProps",
};

export const useProgressProps = (
  props: React.PropsWithChildren<ProgressProps>,
) => {
  const [state, switchProps] = useProgressStateSplit(props);
  const { children, ...restProps } = switchProps;
  const { componentProps } = getComponentProps(componentMap, children, state);

  const barProps: ProgressBarProps = {
    ...state,
    ...restProps,
    ...componentProps.barProps,
  };

  const trackProps: ProgressTrackProps = {
    ...state,
    ...componentProps.trackProps,
  };

  return {
    state,
    barProps,
    trackProps,
  };
};
