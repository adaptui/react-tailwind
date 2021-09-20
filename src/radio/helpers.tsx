import { splitProps } from "reakit-utils";

import {
  RadioInitialState,
  useRadioState,
  RadioStateReturn,
  RadioDescriptionProps,
  RadioIconProps,
  RadioInputProps,
  RadioLabelProps,
  RadioTextProps,
  USE_RADIO_STATE_KEYS,
  RadioProps,
  RadioOwnProps,
} from "./index";
import { Dict } from "../utils/types";
import { getValidChildren, runIfFn, runIfFnChildren } from "../utils";

export const useRadioStateSplit = (props: RadioProps) => {
  const [stateProps, checkboxProps] = splitProps(
    props,
    USE_RADIO_STATE_KEYS,
  ) as [RadioInitialState, RadioOwnProps];
  const state = useRadioState(stateProps);

  return [state, checkboxProps, stateProps] as [
    RadioStateReturn,
    RadioOwnProps,
    RadioInitialState,
  ];
};

const ComponentPropsMap = {
  RadioLabel: "labelProps",
  RadioInput: "inputProps",
  RadioIcon: "iconProps",
  RadioText: "textProps",
  RadioDescription: "descriptionProps",
};

export const getRadioComponentProps = (children: React.ReactNode) => {
  const validChildren = getValidChildren(children);
  const props: Dict = {};

  validChildren.forEach(child => {
    props[
      // @ts-ignore
      ComponentPropsMap[child.type.displayName]
    ] = child.props;
  });

  return props;
};

// export const RadioDefaultIcon: RadioOwnProps["icon"] = state => {
//   const { isChecked, isIndeterminate } = state;

//   return (
//     <>
//       {isChecked ? withIconA11y(<CheckIcon />) : null}
//       {isIndeterminate ? withIconA11y(<IndeterminateIcon />) : null}
//     </>
//   );
// };

export const useRadioProps = (props: React.PropsWithChildren<RadioProps>) => {
  const [state, checkboxProps] = useRadioStateSplit(props);

  const { icon, label, description, className, style, children, ...restProps } =
    checkboxProps;

  const componentProps = getRadioComponentProps(
    runIfFnChildren(children, state),
  );

  const labelProps: RadioLabelProps = {
    ...state,
    className,
    style,
    ...componentProps.labelProps,
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
