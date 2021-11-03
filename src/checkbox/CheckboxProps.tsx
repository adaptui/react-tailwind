import { getComponentProps, runIfFn, splitProps } from "../utils";

import { USE_CHECKBOX_STATE_KEYS } from "./__keys";
import { CheckboxOwnProps, CheckboxProps } from "./Checkbox";
import { CheckboxDescriptionProps } from "./CheckboxDescription";
import { CheckboxIconProps } from "./CheckboxIcon";
import { CheckboxInputProps } from "./CheckboxInput";
import { CheckboxLabelProps } from "./CheckboxLabel";
import {
  CheckboxInitialState,
  CheckboxState,
  useCheckboxState,
} from "./CheckboxState";
import { CheckboxTextProps } from "./CheckboxText";

export const useCheckboxStateSplit = (props: CheckboxProps) => {
  const [stateProps, checkboxProps] = splitProps(
    props,
    USE_CHECKBOX_STATE_KEYS,
  ) as [CheckboxInitialState, CheckboxOwnProps];
  const state = useCheckboxState(stateProps);

  return [state, checkboxProps, stateProps] as const;
};

const componentMap = {
  CheckboxLabel: "labelProps",
  CheckboxInput: "inputProps",
  CheckboxIcon: "iconProps",
  CheckboxText: "textProps",
  CheckboxDescription: "descriptionProps",
};

export const useCheckboxProps = (
  props: React.PropsWithChildren<CheckboxProps>,
) => {
  const [state, checkboxProps] = useCheckboxStateSplit(props);
  const { icon, label, description } = state;
  const { className, style, children, ...restProps } = checkboxProps;
  const { componentProps } = getComponentProps(componentMap, children, state);

  const _icon: CheckboxState["icon"] =
    componentProps?.iconProps?.children || icon;
  const _label: CheckboxState["label"] =
    componentProps?.textProps?.children || label;
  const _description: CheckboxState["description"] =
    componentProps?.descriptionProps?.children || description;

  const labelProps: CheckboxLabelProps = {
    ...state,
    className,
    style,
    label: _label,
    description: _description,
    disabled: restProps.disabled,
    ...componentProps.labelProps,
  };

  const inputProps: CheckboxInputProps = {
    ...state,
    ...restProps,
    ...componentProps.inputProps,
  };

  const iconProps: CheckboxIconProps = {
    ...state,
    label: _label,
    description: _description,
    ...componentProps.iconProps,
    children: runIfFn(_icon, state),
  };

  const textProps: CheckboxTextProps = {
    ...state,
    ...componentProps.textProps,
    children: runIfFn(_label, state),
  };

  const descriptionProps: CheckboxDescriptionProps = {
    ...state,
    ...componentProps.descriptionProps,
    children: runIfFn(_description, state),
  };

  return {
    state,
    labelProps,
    inputProps,
    iconProps,
    textProps,
    descriptionProps,
    icon: _icon,
    label: _label,
    description: _description,
  };
};
