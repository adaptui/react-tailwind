import {
  SliderBaseStateProps,
  SliderState,
  SliderStateProps,
  useSliderBaseState,
  useSliderState,
} from "@adaptui/react";

import { getComponentProps, RenderProp } from "../utils";

import { SliderFilledTrackProps } from "./SliderFilledTrack";
import { SliderThumbProps } from "./SliderThumbProps";
import { SliderTrackProps } from "./SliderTrack";
import { SliderTrackWrapperProps } from "./SliderTrackWrapper";
import {
  SliderUIState,
  SliderUIStateProps,
  useSliderUIState,
} from "./SliderUIState";
import { SliderWrapperProps } from "./SliderWrapper";

const componentMap = {
  SliderWrapper: "wrapperProps",
  SliderTrackWrapper: "trackWrapperProps",
  SliderTrack: "trackProps",
  SliderFilledTrack: "filledTrackProps",
};

export const useSliderProps = ({
  range,
  size,
  knobIcon,
  tooltip,
  children,
  value,
  defaultValue,
  onChange,
  onChangeEnd,
  minValue,
  maxValue,
  step,
  orientation,
  isDisabled,
  label,
  formatOptions,
  id,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  "aria-details": ariaDetails,
  ...restProps
}: SliderProps): SliderPropsReturn => {
  const baseState = useSliderBaseState({
    value,
    defaultValue,
    onChange,
    onChangeEnd,
    minValue,
    maxValue,
    step,
    orientation,
    isDisabled,
    label,
  });
  const state = useSliderState({
    state: baseState,
    value,
    defaultValue,
    onChange,
    onChangeEnd,
    minValue,
    maxValue,
    step,
    orientation,
    isDisabled,
    label,
    id,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    "aria-details": ariaDetails,
  });
  const uiState = useSliderUIState({ range, size, knobIcon, tooltip });
  let uiProps: SliderUIProps = { ...uiState, state };

  const { componentProps } = getComponentProps(componentMap, children, uiProps);

  const wrapperProps: SliderWrapperProps = {
    ...uiProps,
    ...restProps,
    ...componentProps.wrapperProps,
  };

  const trackWrapperProps: SliderTrackWrapperProps = {
    ...uiProps,
    ...componentProps.trackWrapperProps,
  };

  const trackProps: SliderTrackProps = {
    ...uiProps,
    ...componentProps.trackProps,
  };

  const filledTrackProps: SliderFilledTrackProps = {
    ...uiProps,
    ...componentProps.filledTrackProps,
  };

  const thumbProps: SliderThumbProps = {
    size,
    knobIcon,
    tooltip,
    state: state.baseState,
    trackRef: state.trackRef,
    orientation,
    isDisabled,
    ...componentProps.thumbProps,
  };

  return {
    uiProps,
    wrapperProps,
    trackWrapperProps,
    trackProps,
    filledTrackProps,
    thumbProps,
  };
};

export type SliderUIProps = SliderUIState & {
  state: SliderState;
};

export type SliderProps = Omit<SliderStateProps, "state"> &
  Pick<SliderBaseStateProps, "formatOptions"> &
  Omit<SliderWrapperProps, "state" | "children" | "defaultValue" | "onChange"> &
  SliderUIStateProps & {
    children?: RenderProp<SliderUIProps>;
  };

export type SliderPropsReturn = {
  wrapperProps: SliderWrapperProps;
  trackWrapperProps: SliderTrackWrapperProps;
  trackProps: SliderTrackProps;
  filledTrackProps: SliderFilledTrackProps;
  thumbProps: SliderThumbProps;
  uiProps: SliderUIProps;
};
