import { splitProps } from "reakit-utils";

import { CircleIcon } from "../icons";
import { getComponentProps, runIfFn } from "../utils";

import {
  RADIO_GROUP_STATE_KEYS,
  RadioDescriptionProps,
  RadioGroupStateReturn,
  RadioIconProps,
  RadioInputProps,
  RadioLabelProps,
  RadioOwnProps,
  RadioProps,
  RadioTextProps,
  useRadioStateContext,
} from "./index";

export type RadioStateReturn = RadioGroupStateReturn & {
  /**
   * `true`, if the value of the radio matches the current state.
   */
  isChecked: boolean;
};

export const RadioDefaultIcon: RadioOwnProps["icon"] = state => {
  const { isChecked } = state;

  return <>{isChecked ? <CircleIcon /> : null}</>;
};

export const useRadioState = (props: RadioProps) => {
  const [stateReturnProps, radioProps] = splitProps(
    props,
    RADIO_GROUP_STATE_KEYS,
  ) as [RadioGroupStateReturn, RadioOwnProps];
  const contextState = useRadioStateContext();

  let radioGroupState = stateReturnProps;
  if (contextState != null) {
    radioGroupState = contextState;
  }

  const isChecked = radioGroupState.state === radioProps.value;
  const state: RadioStateReturn = { ...radioGroupState, isChecked };

  return [state, radioProps, stateReturnProps] as const;
};

const componentMap = {
  RadioLabel: "labelProps",
  RadioInput: "inputProps",
  RadioIcon: "iconProps",
  RadioText: "textProps",
  RadioDescription: "descriptionProps",
};

export const useRadioProps = (props: React.PropsWithChildren<RadioProps>) => {
  const [state, radioProps] = useRadioState(props);

  const {
    icon = RadioDefaultIcon,
    label,
    description,
    className,
    style,
    children,
    ...restProps
  } = radioProps;

  const { componentProps } = getComponentProps(componentMap, children, state);

  const labelProps: RadioLabelProps = {
    ...state,
    className,
    style,
    ...componentProps?.labelProps,
  };

  const inputProps: RadioInputProps = {
    ...state,
    ...restProps,
    ...componentProps.inputProps,
  };

  const _icon: RadioOwnProps["icon"] =
    componentProps?.iconProps?.children || icon;
  const iconProps: RadioIconProps = {
    ...state,
    ...componentProps.iconProps,
    children: runIfFn(_icon, state),
  };

  const _label: RadioOwnProps["label"] =
    componentProps?.textProps?.children || label;
  const textProps: RadioTextProps = {
    ...state,
    ...componentProps.textProps,
    children: runIfFn(_label, state),
  };

  const _description: RadioOwnProps["description"] =
    componentProps?.descriptionProps?.children || description;
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
