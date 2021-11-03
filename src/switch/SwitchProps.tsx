import { getComponentProps, runIfFn, USE_SWITCH_STATE_KEYS } from "../index";
import { splitProps } from "../utils";

import { SwitchOwnProps, SwitchProps } from "./Switch";
import { SwitchDescriptionProps } from "./SwitchDescription";
import { SwitchIconProps } from "./SwitchIcon";
import { SwitchInputProps } from "./SwitchInput";
import { SwitchLabelProps } from "./SwitchLabel";
import { SwitchInitialState, useSwitchState } from "./SwitchState";
import { SwitchTextProps } from "./SwitchText";

export const useSwitchStateSplit = (props: SwitchProps) => {
  const [stateProps, switchProps] = splitProps(
    props,
    USE_SWITCH_STATE_KEYS,
  ) as [SwitchInitialState, SwitchOwnProps];
  const state = useSwitchState(stateProps);

  return [state, switchProps, stateProps] as const;
};

const componentMap = {
  SwitchLabel: "labelProps",
  SwitchInput: "inputProps",
  SwitchIcon: "iconProps",
  SwitchText: "textProps",
  SwitchDescription: "descriptionProps",
};

export const useSwitchProps = (props: React.PropsWithChildren<SwitchProps>) => {
  const [state, switchProps] = useSwitchStateSplit(props);
  const { icon, label, description } = state;
  const { className, style, children, ...restProps } = switchProps;
  const { componentProps } = getComponentProps(componentMap, children, state);

  const _icon: SwitchProps["icon"] =
    componentProps?.iconProps?.children || icon;
  const _label: SwitchProps["label"] =
    componentProps?.textProps?.children || label;
  const _description: SwitchProps["description"] =
    componentProps?.descriptionProps?.children || description;

  const labelProps: SwitchLabelProps = {
    ...state,
    className,
    style,
    description: _description,
    disabled: restProps.disabled,
    ...componentProps.labelProps,
  };

  const inputProps: SwitchInputProps = {
    ...state,
    ...restProps,
    ...componentProps.inputProps,
  };

  const iconProps: SwitchIconProps = {
    ...state,
    description: _description,
    ...componentProps.iconProps,
    children: runIfFn(_icon, { ...state, disabled: restProps.disabled }),
  };

  const textProps: SwitchTextProps = {
    ...state,
    ...componentProps.textProps,
    children: runIfFn(_label, state),
  };

  const descriptionProps: SwitchDescriptionProps = {
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
