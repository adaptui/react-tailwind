import { SliderBaseStateReturn } from "@renderlesskit/react";

import { createContext, getComponentProps, splitProps } from "../utils";

import { USE_SLIDER_STATE_KEYS } from "./__keys";
import { SliderOwnProps, SliderProps } from "./Slider";
import { SliderFilledTrackProps } from "./SliderFilledTrack";
import { SliderInitialState, useSliderState } from "./SliderState";
import { SliderThumbProps } from "./SliderThumb";
import { SliderTrackProps } from "./SliderTrack";
import { SliderTrackWrapperProps } from "./SliderTrackWrapper";
import { SliderWrapperProps } from "./SliderWrapper";

export const useSliderStateSplit = (props: SliderProps) => {
  const [stateProps, sliderProps] = splitProps(
    props,
    USE_SLIDER_STATE_KEYS,
  ) as [SliderInitialState, SliderOwnProps];
  const sliderState = useSliderState(stateProps);

  return [sliderState, sliderProps, stateProps] as const;
};

const componentMap = {
  SliderWrapper: "wrapperProps",
  SliderTrackWrapper: "trackWrapperProps",
  SliderTrack: "trackProps",
  SliderFilledTrack: "filledTrackProps",
};

export const useSliderProps = (props: React.PropsWithChildren<SliderProps>) => {
  const [state, sliderProps, stateProps] = useSliderStateSplit(props);
  const { size, knobIcon, tooltip, isDragging, setIsDragging } = state;
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

  const thumbProps: SliderThumbProps = {
    trackRef: state.trackRef,
    orientation: stateProps.orientation,
    isDisabled: stateProps.isDisabled,
    size,
    knobIcon,
    tooltip,
    isDragging,
    setIsDragging,
    ...componentProps.thumbProps,
  };

  return {
    state,
    wrapperProps,
    trackWrapperProps,
    trackProps,
    thumbProps,
    filledTrackProps,
    finalChildren,
  };
};

const [SliderContextProvider, useSliderContext] =
  createContext<SliderBaseStateReturn>({
    name: "SliderContextProvider",
    strict: false,
  });

export { SliderContextProvider, useSliderContext };
