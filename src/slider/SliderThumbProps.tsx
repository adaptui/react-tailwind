import { useMemo } from "react";
import {
  SliderThumbState,
  SliderThumbStateProps,
  useSliderThumbState,
} from "@adaptui/react";

import { getComponentProps, RenderProp } from "../utils";

import { SliderThumbContainerProps } from "./SliderThumbContainer";
import { SliderThumbInputProps } from "./SliderThumbInput";
import { SliderThumbLabelProps } from "./SliderThumbLabel";
import {
  SliderThumbUIState,
  SliderThumbUIStateProps,
  useSliderThumbUIState,
} from "./SliderThumbUIState";
import { SliderThumbWrapperProps } from "./SliderThumbWrapper";

const componentMap = {
  SliderThumbWrapper: "wrapperProps",
  SliderThumbLabel: "labelProps",
  SliderThumbInput: "inputProps",
  SliderThumbContainer: "containerProps",
};

export const useSliderThumbProps = ({
  size,
  themeColor,
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
  const uiState = useSliderThumbUIState({
    size,
    themeColor,
    knobIcon,
    tooltip,
  });
  const uiProps: SliderThumbUIProps = useMemo(
    () => ({
      ...uiState,
      index,
      isDisabled,
      state: _state,
    }),
    [_state, index, isDisabled, uiState],
  );
  const { componentProps } = getComponentProps(componentMap, children, uiProps);

  const wrapperProps: SliderThumbWrapperProps = useMemo(
    () => ({
      ...uiProps,
      className,
      style,
      ...componentProps.wrapperProps,
    }),
    [className, componentProps.wrapperProps, style, uiProps],
  );

  const labelProps: SliderThumbLabelProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.labelWrapper,
    }),
    [componentProps.labelWrapper, uiProps],
  );

  const inputProps: SliderThumbInputProps = useMemo(
    () => ({
      ...uiProps,
      ...restProps,
      ...componentProps.inputProps,
    }),
    [componentProps.inputProps, restProps, uiProps],
  );

  const containerProps: SliderThumbContainerProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.containerProps,
    }),
    [componentProps.containerProps, uiProps],
  );

  return {
    wrapperProps,
    labelProps,
    inputProps,
    containerProps,
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
  labelProps: SliderThumbLabelProps;
  containerProps: SliderThumbContainerProps;
  inputProps: SliderThumbInputProps;
  uiProps: SliderThumbUIProps;
};
