import { CheckIcon, DashIcon } from "../icons";
import { getComponentProps, runIfFn, splitProps, withIconA11y } from "../utils";

import { USE_CHECKBOX_STATE_KEYS } from "./__keys";
import { CheckboxOwnProps, CheckboxProps } from "./Checkbox";
import { CheckboxDescriptionProps } from "./CheckboxDescription";
import { CheckboxIconProps } from "./CheckboxIcon";
import { CheckboxInputProps } from "./CheckboxInput";
import { CheckboxLabelProps } from "./CheckboxLabel";
import { CheckboxInitialState, useCheckboxState } from "./CheckboxState";
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

export const CheckboxDefaultIcon: CheckboxOwnProps["icon"] = state => {
  const { isChecked, isIndeterminate } = state;

  return (
    <>
      {isChecked ? withIconA11y(<CheckIcon />) : null}
      {isIndeterminate ? withIconA11y(<DashIcon />) : null}
    </>
  );
};

export const useCheckboxProps = (
  props: React.PropsWithChildren<CheckboxProps>,
) => {
  const [state, checkboxProps] = useCheckboxStateSplit(props);
  const {
    icon = CheckboxDefaultIcon,
    label,
    description,
    className,
    style,
    children,
    ...restProps
  } = checkboxProps;
  const { componentProps } = getComponentProps(componentMap, children, state);

  const _icon: CheckboxOwnProps["icon"] =
    componentProps?.iconProps?.children || icon;
  const _label: CheckboxOwnProps["label"] =
    componentProps?.textProps?.children || label;
  const _description: CheckboxOwnProps["description"] =
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
