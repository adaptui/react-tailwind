import { splitProps } from "reakit-utils";
import {
  CheckboxActions,
  CheckboxInitialState,
  CheckboxState,
  useCheckboxState,
} from "@renderlesskit/react";

import { Box, getComponentProps, runIfFn, tcm, useTheme } from "../index";

import {
  SwitchDescriptionProps,
  SwitchIconProps,
  SwitchLabelProps,
  SwitchOwnProps,
  SwitchTextProps,
  USE_SWITCH_STATE_KEYS,
} from "./index";
import { SwitchProps } from "./Switch";
import { SwitchInputOptions, SwitchInputProps } from "./SwitchInput";

export type SwitchState = CheckboxState & {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"switch", "icon", "size">;

  /**
   * Input's value.
   */
  value: SwitchInputOptions["value"];

  /**
   * If true, Checkbox is checked.
   */
  isChecked: boolean;
};

export type SwitchActions = CheckboxActions & {};

export type SwitchStateReturn = SwitchState & SwitchActions;

export type SwitchInitialState = CheckboxInitialState &
  Partial<Pick<SwitchState, "size" | "value">>;

export function useSwitchState(
  props: SwitchInitialState = {},
): SwitchStateReturn {
  const { state, setState } = useCheckboxState(props);
  const { size = "md", value } = props;

  const isChecked =
    Array.isArray(state) && value ? state.includes(value) : state === true;

  return {
    state,
    setState,
    size,
    value,
    isChecked,
  };
}

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

export const SwitchDefaultIcon: SwitchOwnProps["icon"] = state => {
  const { size, isChecked, disabled } = state;

  const theme = useTheme("switch");
  const switchIconContentStyles = tcm(
    theme.icon.children.base,
    theme.icon.children.size.default[size],
    isChecked
      ? theme.icon.children.size.checked[size]
      : theme.icon.children.size.unChecked[size],
    disabled ? theme.icon.children.size.disabled[size] : "",
  );

  return <Box as="span" className={switchIconContentStyles} />;
};

export const useSwitchProps = (props: React.PropsWithChildren<SwitchProps>) => {
  const [state, switchProps] = useSwitchStateSplit(props);
  const {
    icon = SwitchDefaultIcon,
    label,
    description,
    className,
    style,
    children,
    ...restProps
  } = switchProps;
  const { componentProps } = getComponentProps(componentMap, children, state);

  const _icon: SwitchOwnProps["icon"] =
    componentProps?.iconProps?.children || icon;
  const _label: SwitchOwnProps["label"] =
    componentProps?.textProps?.children || label;
  const _description: SwitchOwnProps["description"] =
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
