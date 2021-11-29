import { getComponentProps, splitProps } from "../utils";

import { USE_SLIDER_STATE_KEYS } from "./__keys";
import { SliderOwnProps, SliderProps } from "./Slider";
import { SliderFilledTrackProps } from "./SliderFilledTrack";
import { SliderInitialState, useSliderState } from "./SliderState";
import { SliderTrackProps } from "./SliderTrack";
import { SliderTrackWrapperProps } from "./SliderTrackWrapper";
import { SliderWrapperProps } from "./SliderWrapper";

export const useSliderStateSplit = (props: SliderProps) => {
  const [stateProps, sliderProps] = splitProps(
    props,
    USE_SLIDER_STATE_KEYS,
  ) as [SliderInitialState, SliderOwnProps];
  const state = useSliderState(stateProps);

  return [state, sliderProps, stateProps] as const;
};

const componentMap = {
  SliderWrapper: "wrapperProps",
  SliderTrackWrapper: "trackWrapperProps",
  SliderTrack: "trackProps",
  SliderFilledTrack: "filledTrackProps",
};

export const useSliderProps = (props: React.PropsWithChildren<SliderProps>) => {
  const [state, sliderProps] = useSliderStateSplit(props);
  const { children, ...restProps } = sliderProps;
  const { componentProps, finalChildren } = getComponentProps(
    componentMap,
    children,
    state,
  );

  const wrapperProps: SliderWrapperProps = {
    ...state,
    ...restProps,
    ...componentProps.wrapperProps,
  };

  const trackWrapperProps: SliderTrackWrapperProps = {
    ...state,
    ...componentProps.trackWrapperProps,
  };

  const trackProps: SliderTrackProps = {
    ...state,
    ...componentProps.trackProps,
  };

  const filledTrackProps: SliderFilledTrackProps = {
    ...state,
    ...componentProps.filledTrackProps,
  };

  return {
    wrapperProps,
    trackWrapperProps,
    trackProps,
    filledTrackProps,
    finalChildren,
  };
};
