import { useMemo } from "react";
import { CheckboxState, CheckboxStateProps, useCheckboxState } from "ariakit";

import { Value } from "../checkbox";
import { getComponentProps, RenderProp, runIfFn } from "../utils";

import { SwitchDescriptionProps } from "./SwitchDescription";
import { SwitchIconProps } from "./SwitchIcon";
import { SwitchInputProps } from "./SwitchInput";
import { SwitchLabelProps } from "./SwitchLabel";
import { SwitchTextProps } from "./SwitchText";
import {
  SwitchUIState,
  SwitchUIStateProps,
  useSwitchUIState,
} from "./SwitchUIState";

const componentMap = {
  SwitchLabel: "labelProps",
  SwitchInput: "inputProps",
  SwitchIcon: "iconProps",
  SwitchText: "textProps",
  SwitchDescription: "descriptionProps",
};

export function useSwitchProps(props: SwitchProps): SwitchPropsReturn {
  let {
    state,
    defaultValue = false,
    value,
    setValue,
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
  const _state = useCheckboxState<Value>({
    defaultValue,
    value,
    setValue,
  });
  const finalState = state || _state;
  const uiState = useSwitchUIState({
    state: finalState,
    inputValue,
    size,
    themeColor,
    icon,
    label,
    description,
  });
  let uiProps: SwitchUIProps = useMemo(
    () => ({
      ...uiState,
      state: finalState,
      disabled: restProps.disabled,
    }),
    [finalState, restProps.disabled, uiState],
  );

  const { componentProps } = getComponentProps(componentMap, children, uiProps);
  const _icon: RenderProp<SwitchUIProps> =
    componentProps?.iconProps?.children || uiProps.icon;
  const _label: SwitchProps["label"] =
    componentProps?.textProps?.children || uiProps.label;
  const _description: SwitchProps["description"] =
    componentProps?.descriptionProps?.children || uiProps.description;

  uiProps = {
    ...uiProps,
    icon: _icon,
    label: _label,
    description: _description,
  };

  const labelProps: SwitchLabelProps = useMemo(
    () => ({
      ...uiProps,
      className,
      style,
      disabled: restProps.disabled,
      ...componentProps.labelProps,
    }),
    [className, componentProps.labelProps, restProps.disabled, style, uiProps],
  );

  const inputProps: SwitchInputProps = useMemo(
    () => ({
      ...uiProps,
      value: inputValue,
      ...restProps,
      ...componentProps.inputProps,
    }),
    [componentProps.inputProps, inputValue, restProps, uiProps],
  );

  const iconProps: SwitchIconProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.iconProps,
      disabled: restProps.disabled,
      children: runIfFn(uiProps.icon, uiProps),
    }),
    [uiProps, restProps.disabled, componentProps.iconProps],
  );

  const textProps: SwitchTextProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.textProps,
      disabled: restProps.disabled,
      children: runIfFn(uiProps.label, uiProps),
    }),
    [uiProps, restProps.disabled, componentProps.textProps],
  );

  const descriptionProps: SwitchDescriptionProps = useMemo(
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
      textProps,
      descriptionProps,
      uiProps,
    }),
    [labelProps, inputProps, iconProps, textProps, descriptionProps, uiProps],
  );
  return compoundedProps;
}

export type SwitchUIProps = SwitchUIState & {
  state: CheckboxState;
  disabled: SwitchInputProps["disabled"];
};

export type SwitchProps = CheckboxStateProps &
  Omit<SwitchInputProps, "value" | "size" | "defaultValue" | "children"> &
  SwitchUIStateProps & { children?: RenderProp<SwitchUIProps> };

export type SwitchPropsReturn = {
  labelProps: SwitchLabelProps;
  inputProps: SwitchInputProps;
  iconProps: SwitchIconProps;
  textProps: SwitchTextProps;
  descriptionProps: SwitchDescriptionProps;
  uiProps: SwitchUIProps;
};
