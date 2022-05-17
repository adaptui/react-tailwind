import { useMemo } from "react";
import { CheckboxState, CheckboxStateProps, useCheckboxState } from "ariakit";
import { RenderProp } from "ariakit-utils";

import { getComponentProps, runIfFn } from "../utils";

import { CheckboxDescriptionProps } from "./CheckboxDescription";
import { CheckboxIconProps } from "./CheckboxIcon";
import { CheckboxInputProps } from "./CheckboxInput";
import { CheckboxLabelProps } from "./CheckboxLabel";
import { CheckboxTextProps } from "./CheckboxText";
import { CheckboxUIState, useCheckboxUIState, Value } from "./CheckboxUIState";

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

  const uiState = useCheckboxUIState({
    state: state || _state,
    inputValue,
    size,
    icon,
    label,
    description,
  });
  const uiProps: CheckboxUIProps = useMemo(
    () => ({ state: state || _state, ...uiState }),
    [_state, state, uiState],
  );
  const { componentProps } = getComponentProps(componentMap, children, uiProps);
  const _icon: CheckboxProps["icon"] =
    componentProps?.iconProps?.children || uiState.icon;
  const _label: CheckboxProps["label"] =
    componentProps?.textProps?.children || uiState.label;
  const _description: CheckboxProps["description"] =
    componentProps?.descriptionProps?.children || uiState.description;

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
      ...restProps,
      ...componentProps.inputProps,
    }),
    [componentProps.inputProps, restProps, uiProps],
  );

  const iconProps: CheckboxIconProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.iconProps,
      children: runIfFn(_icon, uiProps),
    }),
    [uiProps, componentProps.iconProps, _icon],
  );

  const textProps: CheckboxTextProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.textProps,
      children: runIfFn(_label, uiProps),
    }),
    [uiProps, componentProps.textProps, _label],
  );

  const descriptionProps: CheckboxDescriptionProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.descriptionProps,
      children: runIfFn(_description, uiProps),
    }),
    [uiProps, componentProps.descriptionProps, _description],
  );

  const compoundedProps = useMemo(
    () => ({
      labelProps,
      inputProps,
      iconProps,
      textProps,
      descriptionProps,
      ...uiProps,
    }),
    [labelProps, inputProps, iconProps, textProps, descriptionProps, uiProps],
  );
  return compoundedProps;
}

export type CheckboxPropsReturn = {
  labelProps: CheckboxLabelProps;
  inputProps: CheckboxInputProps;
  iconProps: CheckboxIconProps;
  textProps: CheckboxTextProps;
  descriptionProps: CheckboxDescriptionProps;
} & CheckboxUIProps;

export type CheckboxUIProps = CheckboxUIState & {
  state: CheckboxState;
};

export type CheckboxProps = CheckboxStateProps &
  Omit<CheckboxInputProps, "value" | "size" | "defaultValue" | "children"> &
  Pick<CheckboxUIState, "label" | "description"> &
  Partial<Pick<CheckboxUIState, "size" | "icon">> & {
    state?: CheckboxState;
    inputValue?: CheckboxInputProps["value"];
  } & { children?: React.ReactNode | RenderProp<CheckboxUIProps> };
