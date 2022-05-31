import {
  SliderThumbState,
  SliderThumbStateProps,
  useSliderThumbState,
} from "@adaptui/react";

import { getComponentProps, RenderProp } from "../utils";

import { SliderThumbContainerProps } from "./SliderThumbContainer";
import { SliderThumbInputProps } from "./SliderThumbInput";
import {
  SliderThumbUIState,
  SliderThumbUIStateProps,
  useSliderThumbUIState,
} from "./SliderThumbUIState";
import { SliderThumbWrapperProps } from "./SliderThumbWrapper";

const componentMap = {
  SliderThumbWrapper: "wrapperProps",
  SliderThumbContainer: "containerProps",
  SliderThumbInput: "inputProps",
};

export const useSliderThumbProps = ({
  size,
  knobIcon,
  tooltip,
  index,
  state,
  trackRef,
  orientation,
  isDisabled,
  isRequired,
  label,
  validationState,
  autoFocus,
  id,
  excludeFromTabOrder,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  "aria-details": ariaDetails,
  "aria-errormessage": ariaErrorMessage,
  onKeyDown,
  onKeyUp,
  onFocus,
  onBlur,
  onFocusChange,
  className,
  style,
  children,
  ...restProps
}: SliderThumbProps) => {
  const _state = useSliderThumbState({
    state,
    index,
    trackRef,
    orientation,
    isDisabled,
    isRequired,
    label,
    validationState,
    autoFocus,
    id,
    excludeFromTabOrder,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    "aria-details": ariaDetails,
    "aria-errormessage": ariaErrorMessage,
    onKeyDown,
    onKeyUp,
    onFocus,
    onBlur,
    onFocusChange,
  });
  const uiState = useSliderThumbUIState({ size, knobIcon, tooltip });
  const uiProps: SliderThumbUIProps = {
    ...uiState,
    index,
    isDisabled,
    state: _state,
  };
  const { componentProps } = getComponentProps(componentMap, children, uiProps);

  const wrapperProps: SliderThumbWrapperProps = {
    ...uiProps,
    className,
    style,
    ...componentProps.wrapperProps,
  };

  const containerProps: SliderThumbContainerProps = {
    ...uiProps,
    ...componentProps.containerProps,
  };

  const inputProps: SliderThumbInputProps = {
    ...uiProps,
    ...restProps,
    ...componentProps.inputProps,
  };

  return {
    wrapperProps,
    containerProps,
    inputProps,
    uiProps,
  };
};

export type SliderThumbUIProps = SliderThumbUIState &
  Pick<SliderThumbStateProps, "index" | "isDisabled"> & {
    state: SliderThumbState;
  };

export type SliderThumbProps = SliderThumbStateProps &
  Omit<SliderThumbInputProps, "state" | "children" | "index"> &
  SliderThumbUIStateProps & {
    children?: RenderProp<SliderThumbUIProps>;
  };

export type SliderThumbPropsReturn = {
  wrapperProps: SliderThumbWrapperProps;
  containerProps: SliderThumbContainerProps;
  inputProps: SliderThumbInputProps;
  uiProps: SliderThumbUIProps;
};
