import { useMemo } from "react";
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
  themeColor,
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
  const uiState = useSliderUIState({
    range,
    size,
    themeColor,
    knobIcon,
    tooltip,
  });
  let uiProps: SliderUIProps = useMemo(
    () => ({ ...uiState, isDisabled, state }),
    [isDisabled, state, uiState],
  );

  const { componentProps } = getComponentProps(componentMap, children, uiProps);

  const wrapperProps: SliderWrapperProps = useMemo(
    () => ({
      ...uiProps,
      ...restProps,
      isDisabled,
      ...componentProps.wrapperProps,
    }),
    [componentProps.wrapperProps, isDisabled, restProps, uiProps],
  );

  const trackWrapperProps: SliderTrackWrapperProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.trackWrapperProps,
    }),
    [componentProps.trackWrapperProps, uiProps],
  );

  const trackProps: SliderTrackProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.trackProps,
    }),
    [componentProps.trackProps, uiProps],
  );

  const filledTrackProps: SliderFilledTrackProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.filledTrackProps,
    }),
    [componentProps.filledTrackProps, uiProps],
  );

  const thumbProps: SliderThumbProps = useMemo(
    () => ({
      size,
      knobIcon,
      tooltip,
      state: state.baseState,
      trackRef: state.trackRef,
      orientation,
      isDisabled,
      ...componentProps.thumbProps,
    }),
    [
      componentProps.thumbProps,
      isDisabled,
      knobIcon,
      orientation,
      size,
      state.baseState,
      state.trackRef,
      tooltip,
    ],
  );

  return {
    uiProps,
    wrapperProps,
    trackWrapperProps,
    trackProps,
    filledTrackProps,
    thumbProps,
  };
};

export type SliderUIProps = SliderUIState &
  Pick<SliderStateProps, "isDisabled"> & {
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
