import { getComponentProps, splitProps } from "../utils";

import { USE_SLIDER_THUMB_STATE_KEYS } from "./__keys";
import { SliderThumbOwnProps, SliderThumbProps } from "./SliderThumb";
import { SliderThumbContainerProps } from "./SliderThumbContainer";
import { SliderThumbInputProps } from "./SliderThumbInput";
import {
  SliderThumbInitialState,
  useSliderThumbState,
} from "./SliderThumbState";
import { SliderThumbWrapperProps } from "./SliderThumbWrapper";

export const useSliderThumbStateSplit = (props: SliderThumbProps) => {
  const [stateProps, sliderProps] = splitProps(
    props,
    USE_SLIDER_THUMB_STATE_KEYS,
  ) as [SliderThumbInitialState, SliderThumbOwnProps];
  const state = useSliderThumbState(stateProps);

  return [state, sliderProps, stateProps] as const;
};

const componentMap = {
  SliderThumbWrapper: "wrapperProps",
  SliderThumbContainer: "containerProps",
  SliderThumbInput: "inputProps",
};

export const useSliderThumbProps = (
  props: React.PropsWithChildren<SliderThumbProps>,
) => {
  const [state, sliderProps] = useSliderThumbStateSplit(props);
  const { children, ...restProps } = sliderProps;
  const { componentProps } = getComponentProps(componentMap, children, state);

  const wrapperProps: SliderThumbWrapperProps = {
    ...state,
    ...restProps,
    ...componentProps.wrapperProps,
  };

  const containerProps: SliderThumbContainerProps = {
    ...state,
    ...componentProps.containerProps,
  };

  const inputProps: SliderThumbInputProps = {
    ...state,
    ...componentProps.inputProps,
  };

  return { wrapperProps, containerProps, inputProps, state };
};
