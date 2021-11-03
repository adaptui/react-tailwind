import { getComponentProps, runIfFn, splitProps } from "../utils";

import { USE_RADIO_STATE_KEYS } from "./__keys";
import { RadioOwnProps, RadioProps } from "./Radio";
import { RadioDescriptionProps } from "./RadioDescription";
import { RadioIconProps } from "./RadioIcon";
import { RadioInputProps } from "./RadioInput";
import { RadioLabelProps } from "./RadioLabel";
import { RadioInitialState, useRadioState } from "./RadioState";
import { RadioTextProps } from "./RadioText";

export const useRadioStateSplit = (props: RadioProps) => {
  const [stateProps, radioProps] = splitProps(props, USE_RADIO_STATE_KEYS) as [
    RadioInitialState,
    RadioOwnProps,
  ];
  const state = useRadioState(stateProps);

  return [state, radioProps, stateProps] as const;
};

const componentMap = {
  RadioLabel: "labelProps",
  RadioInput: "inputProps",
  RadioIcon: "iconProps",
  RadioText: "textProps",
  RadioDescription: "descriptionProps",
};

export const useRadioProps = (props: React.PropsWithChildren<RadioProps>) => {
  const [state, radioProps] = useRadioStateSplit(props);
  const { icon, label, description } = state;
  const { className, style, children, ...restProps } = radioProps;
  const { componentProps } = getComponentProps(componentMap, children, state);

  const _icon: RadioProps["icon"] = componentProps?.iconProps?.children || icon;
  const _label: RadioProps["label"] =
    componentProps?.textProps?.children || label;
  const _description: RadioProps["description"] =
    componentProps?.descriptionProps?.children || description;

  const labelProps: RadioLabelProps = {
    ...state,
    className,
    style,
    description: _description,
    disabled: restProps.disabled,
    ...componentProps?.labelProps,
  };

  const inputProps: RadioInputProps = {
    ...state,
    ...restProps,
    ...componentProps.inputProps,
  };

  const iconProps: RadioIconProps = {
    ...state,
    ...componentProps.iconProps,
    description: _description,
    children: runIfFn(_icon, state),
  };

  const textProps: RadioTextProps = {
    ...state,
    ...componentProps.textProps,
    children: runIfFn(_label, state),
  };

  const descriptionProps: RadioDescriptionProps = {
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
