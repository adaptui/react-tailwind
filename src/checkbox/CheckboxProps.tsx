import { useMemo } from "react";
import { CheckboxState, CheckboxStateProps, useCheckboxState } from "ariakit";

import {
  CheckboxGroupUIProps,
  useCheckboxGroupContext,
} from "../checkbox-group";
import { getComponentProps, RenderProp, runIfFn } from "../utils";

import { CheckboxDescriptionProps } from "./CheckboxDescription";
import { CheckboxIconProps } from "./CheckboxIcon";
import { CheckboxInputProps } from "./CheckboxInput";
import { CheckboxLabelProps } from "./CheckboxLabel";
import { CheckboxTextProps } from "./CheckboxText";
import {
  CheckboxUIState,
  CheckboxUIStateProps,
  useCheckboxUIState,
  Value,
} from "./CheckboxUIState";

const componentMap = {
  CheckboxLabel: "labelProps",
  CheckboxInput: "inputProps",
  CheckboxIcon: "iconProps",
  CheckboxText: "textProps",
  CheckboxDescription: "descriptionProps",
};

export function useCheckboxProps(props: CheckboxProps): CheckboxPropsReturn {
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
  const groupState = useCheckboxGroupContext();
  const finalState = groupState?.state || state || _state;
  const uiState = useCheckboxUIState({
    state: finalState,
    inputValue,
    size,
    themeColor,
    icon,
    label,
    description,
  });
  let uiProps: CheckboxUIProps = useMemo(
    () => ({
      ...uiState,
      ...(groupState ? groupState : undefined),
      state: finalState,
    }),
    [finalState, groupState, uiState],
  );

  const { componentProps } = getComponentProps(componentMap, children, uiProps);
  const _icon: RenderProp<CheckboxUIProps> =
    componentProps?.iconProps?.children || uiProps.icon;
  const _label: CheckboxProps["label"] =
    componentProps?.textProps?.children || uiProps.label;
  const _description: CheckboxProps["description"] =
    componentProps?.descriptionProps?.children || uiProps.description;

  uiProps = {
    ...uiProps,
    icon: _icon,
    label: _label,
    description: _description,
  };

  const labelProps: CheckboxLabelProps = useMemo(
    () => ({
      ...uiProps,
      className,
      style,
      disabled: restProps.disabled,
      ...componentProps.labelProps,
    }),
    [className, componentProps.labelProps, restProps.disabled, style, uiProps],
  );

  const inputProps: CheckboxInputProps = useMemo(
    () => ({
      ...uiProps,
      value: inputValue,
      ...restProps,
      ...componentProps.inputProps,
    }),
    [componentProps.inputProps, inputValue, restProps, uiProps],
  );

  const iconProps: CheckboxIconProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.iconProps,
      disabled: restProps.disabled,
      children: runIfFn(uiProps.icon, uiProps),
    }),
    [uiProps, restProps.disabled, componentProps.iconProps],
  );

  const textProps: CheckboxTextProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.textProps,
      disabled: restProps.disabled,
      children: runIfFn(uiProps.label, uiProps),
    }),
    [uiProps, restProps.disabled, componentProps.textProps],
  );

  const descriptionProps: CheckboxDescriptionProps = useMemo(
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

export type CheckboxUIProps = CheckboxUIState &
  Partial<CheckboxGroupUIProps> & {
    state: CheckboxState;
  };

export type CheckboxProps = CheckboxStateProps &
  Omit<CheckboxInputProps, "value" | "size" | "defaultValue" | "children"> &
  CheckboxUIStateProps & { children?: RenderProp<CheckboxUIProps> };

export type CheckboxPropsReturn = {
  labelProps: CheckboxLabelProps;
  inputProps: CheckboxInputProps;
  iconProps: CheckboxIconProps;
  textProps: CheckboxTextProps;
  descriptionProps: CheckboxDescriptionProps;
  uiProps: CheckboxUIProps;
};
