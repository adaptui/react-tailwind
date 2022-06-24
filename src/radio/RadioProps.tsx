import { useMemo } from "react";
import { RadioState, RadioStateProps, useRadioState } from "ariakit";

import { RadioGroupUIProps } from "../radio-group";
import { useRadioGroupContext } from "../radio-group/__utils";
import { getComponentProps, RenderProp, runIfFn } from "../utils";

import { RadioDescriptionProps } from "./RadioDescription";
import { RadioIconProps } from "./RadioIcon";
import { RadioInputProps } from "./RadioInput";
import { RadioLabelProps } from "./RadioLabel";
import { RadioTextProps } from "./RadioText";
import { RadioTextWrapperProps } from "./RadioTextWrapper";
import {
  RadioUIState,
  RadioUIStateProps,
  useRadioUIState,
} from "./RadioUIState";

const componentMap = {
  RadioLabel: "labelProps",
  RadioInput: "inputProps",
  RadioIcon: "iconProps",
  RadioTextWrapper: "textWrapperProps",
  RadioText: "textProps",
  RadioDescription: "descriptionProps",
};

export function useRadioProps(props: RadioProps): RadioPropsReturn {
  let {
    state,
    value,
    defaultValue,
    setValue,
    virtualFocus,
    orientation,
    rtl,
    focusLoop,
    focusWrap,
    focusShift,
    moves,
    setMoves,
    includesBaseElement,
    activeId,
    defaultActiveId,
    setActiveId,
    items,
    setItems,
    inputValue,
    size,
    themeColor,
    icon,
    label,
    description,
    className,
    style,
    children,
    ...restProps
  } = props;
  const _state = useRadioState({
    value,
    defaultValue,
    setValue,
    virtualFocus,
    orientation,
    rtl,
    focusLoop,
    focusWrap,
    focusShift,
    moves,
    setMoves,
    includesBaseElement,
    activeId,
    defaultActiveId,
    setActiveId,
    items,
    setItems,
  });
  const groupState = useRadioGroupContext();
  const finalState = groupState?.state || state || _state;
  const uiState = useRadioUIState({
    state: finalState,
    inputValue,
    size,
    themeColor,
    icon,
    label,
    description,
  });
  let uiProps: RadioUIProps = useMemo(
    () => ({
      ...uiState,
      ...(groupState ? groupState : undefined),
      state: finalState,
    }),
    [finalState, groupState, uiState],
  );

  const { componentProps } = getComponentProps(componentMap, children, uiProps);
  const _icon: RenderProp<RadioUIProps> =
    componentProps?.iconProps?.children || uiProps.icon;
  const _label: RadioProps["label"] =
    componentProps?.textProps?.children || uiProps.label;
  const _description: RadioProps["description"] =
    componentProps?.descriptionProps?.children || uiProps.description;

  uiProps = {
    ...uiProps,
    icon: _icon,
    label: _label,
    description: _description,
  };

  const labelProps: RadioLabelProps = useMemo(
    () => ({
      ...uiProps,
      className,
      style,
      disabled: restProps.disabled,
      ...componentProps.labelProps,
    }),
    [className, componentProps.labelProps, restProps.disabled, style, uiProps],
  );

  const inputProps: RadioInputProps = useMemo(
    () => ({
      ...uiProps,
      value: inputValue,
      ...restProps,
      ...componentProps.inputProps,
    }),
    [componentProps.inputProps, inputValue, restProps, uiProps],
  );

  const iconProps: RadioIconProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.iconProps,
      disabled: restProps.disabled,
      children: runIfFn(uiProps.icon, uiProps),
    }),
    [uiProps, restProps.disabled, componentProps.iconProps],
  );

  const textWrapperProps: RadioTextWrapperProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.textWrapperProps,
      disabled: restProps.disabled,
    }),
    [uiProps, restProps.disabled, componentProps.textWrapperProps],
  );

  const textProps: RadioTextProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.textProps,
      disabled: restProps.disabled,
      children: runIfFn(uiProps.label, uiProps),
    }),
    [uiProps, restProps.disabled, componentProps.textProps],
  );

  const descriptionProps: RadioDescriptionProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.descriptionProps,
      disabled: restProps.disabled,
      children: runIfFn(uiProps.description, uiProps),
    }),
    [uiProps, restProps.disabled, componentProps.descriptionProps],
  );

  const compoundedProps = useMemo(
    () => ({
      labelProps,
      inputProps,
      iconProps,
      textWrapperProps,
      textProps,
      descriptionProps,
      uiProps,
    }),
    [
      labelProps,
      inputProps,
      iconProps,
      textWrapperProps,
      textProps,
      descriptionProps,
      uiProps,
    ],
  );
  return compoundedProps;
}

export type RadioUIProps = RadioUIState &
  Partial<RadioGroupUIProps> & {
    state?: RadioState;
  };

export type RadioProps = RadioStateProps &
  Omit<RadioInputProps, "value" | "size" | "children"> &
  RadioUIStateProps & { children?: RenderProp<RadioUIProps> };

export type RadioPropsReturn = {
  labelProps: RadioLabelProps;
  inputProps: RadioInputProps;
  iconProps: RadioIconProps;
  textWrapperProps: RadioTextWrapperProps;
  textProps: RadioTextProps;
  descriptionProps: RadioDescriptionProps;
  uiProps: RadioUIProps;
};
