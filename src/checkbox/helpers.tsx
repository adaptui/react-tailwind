import { splitProps } from "reakit-utils";

import {
  CheckboxInitialState,
  useCheckboxState,
  CheckboxStateReturn,
  CheckboxDescriptionProps,
  CheckboxIconProps,
  CheckboxInputProps,
  CheckboxLabelProps,
  CheckboxTextProps,
  USE_CHECKBOX_STATE_KEYS,
  CheckboxProps,
  CheckboxOwnProps,
} from "./index";
import { Dict } from "../utils/types";
import {
  getValidChildren,
  runIfFn,
  runIfFnChildren,
  withIconA11y,
} from "../utils";
import { CheckIcon, IndeterminateIcon } from "..";

export const useCheckboxStateSplit = (props: CheckboxProps) => {
  const [stateProps, checkboxProps] = splitProps(
    props,
    USE_CHECKBOX_STATE_KEYS,
  ) as [CheckboxInitialState, CheckboxOwnProps];
  const state = useCheckboxState(stateProps);

  return [state, checkboxProps, stateProps] as [
    CheckboxStateReturn,
    CheckboxOwnProps,
    CheckboxInitialState,
  ];
};

const ComponentPropsMap = {
  CheckboxLabel: "labelProps",
  CheckboxInput: "inputProps",
  CheckboxIcon: "iconProps",
  CheckboxText: "textProps",
  CheckboxDescription: "descriptionProps",
};

export const getCheckboxComponentProps = (children: React.ReactNode) => {
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

export const CheckboxDefaultIcon: CheckboxOwnProps["icon"] = state => {
  const { isChecked, isIndeterminate } = state;

  return (
    <>
      {isChecked ? withIconA11y(<CheckIcon />) : null}
      {isIndeterminate ? withIconA11y(<IndeterminateIcon />) : null}
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

  const componentProps = getCheckboxComponentProps(
    runIfFnChildren(children, state),
  );

  const labelProps: CheckboxLabelProps = {
    ...state,
    className,
    style,
    ...componentProps.labelProps,
  };

  const inputProps: CheckboxInputProps = {
    ...state,
    ...restProps,
    ...componentProps.inputProps,
  };

  const _icon: CheckboxOwnProps["icon"] =
    componentProps?.iconProps?.children || icon;
  const iconProps: CheckboxIconProps = {
    ...state,
    ...componentProps.iconProps,
    children: runIfFn(_icon, state),
  };

  const _label: CheckboxOwnProps["label"] =
    componentProps?.textProps?.children || label;
  const textProps: CheckboxTextProps = {
    ...state,
    ...componentProps.textProps,
    children: runIfFn(_label, state),
  };

  const _description: CheckboxOwnProps["description"] =
    componentProps?.descriptionProps?.children || description;
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
