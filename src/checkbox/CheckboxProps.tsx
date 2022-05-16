import { useMemo } from "react";

import { getComponentProps, isString, runIfFn } from "../utils";

import { CheckboxProps } from "./Checkbox";
import { CheckboxDescriptionProps } from "./CheckboxDescription";
import { CheckboxIconProps } from "./CheckboxIcon";
import { CheckboxInputProps } from "./CheckboxInput";
import { CheckboxLabelProps } from "./CheckboxLabel";
import { CheckboxState, useCheckboxState } from "./CheckboxState";
import { CheckboxTextProps } from "./CheckboxText";

const componentMap = {
  CheckboxLabel: "labelProps",
  CheckboxInput: "inputProps",
  CheckboxIcon: "iconProps",
  CheckboxText: "textProps",
  CheckboxDescription: "descriptionProps",
};

export function useCheckboxProps(
  props: React.PropsWithChildren<CheckboxProps>,
): CheckboxPropsReturn {
  const {
    defaultOptions,
    options,
    setOptions,
    size,
    icon,
    label,
    description,
    state: _state,
    children,
    className,
    style,
    ...restProps
  } = props;
  const state = useCheckboxState({
    defaultOptions,
    options,
    setOptions,
    state: _state,
    size,
    icon,
    label,
    description,
    value: restProps.value,
  });

  const { componentProps } = getComponentProps(componentMap, children, state);

  const _icon: CheckboxProps["icon"] =
    componentProps?.iconProps?.children || state.icon;
  const _label: CheckboxProps["label"] =
    componentProps?.textProps?.children || state.label;
  const _description: CheckboxProps["description"] =
    componentProps?.descriptionProps?.children || state.description;

  const labelProps: CheckboxLabelProps = useMemo(
    () => ({
      state: { ...state, label: _label, description: _description },
      className,
      style,
      disabled: restProps.disabled,
      ...componentProps.labelProps,
    }),
    [
      _description,
      _label,
      className,
      componentProps.labelProps,
      restProps.disabled,
      state,
      style,
    ],
  );

  const inputProps: CheckboxInputProps = useMemo(
    () => ({
      state: state,
      ...restProps,
      ...componentProps.inputProps,
    }),
    [componentProps.inputProps, restProps, state],
  );

  const iconProps: CheckboxIconProps = useMemo(
    () => ({
      state: { ...state, label: _label, description: _description },
      ...componentProps.iconProps,
      children: runIfFn(_icon, state),
    }),
    [_description, _icon, _label, state, componentProps.iconProps],
  );

  const textProps: CheckboxTextProps = useMemo(
    () => ({
      state,
      ...componentProps.textProps,
      children: isString(_label) ? _label : runIfFn(_label, state),
    }),
    [_label, state, componentProps.textProps],
  );

  const descriptionProps: CheckboxDescriptionProps = useMemo(
    () => ({
      state,
      ...componentProps.descriptionProps,
      children: isString(_description)
        ? _description
        : runIfFn(_description, state),
    }),
    [_description, state, componentProps.descriptionProps],
  );

  const compoundedProps = useMemo(
    () => ({
      labelProps,
      inputProps,
      iconProps,
      textProps,
      descriptionProps,
      state: { ...state, label: _label, description: _description },
    }),
    [
      labelProps,
      inputProps,
      iconProps,
      textProps,
      descriptionProps,
      state,
      _label,
      _description,
    ],
  );
  return compoundedProps;
}

export type CheckboxPropsReturn = {
  labelProps: CheckboxLabelProps;
  inputProps: CheckboxInputProps;
  iconProps: CheckboxIconProps;
  textProps: CheckboxTextProps;
  descriptionProps: CheckboxDescriptionProps;
  state: CheckboxState;
};
