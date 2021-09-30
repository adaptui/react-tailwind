import { splitProps } from "reakit-utils";
import {
  CheckboxActions as RenderlesskitCheckboxActions,
  CheckboxInitialState as RenderlesskitCheckboxInitialState,
  CheckboxState as RenderlesskitCheckboxState,
  useCheckboxState as useRenderlesskitCheckboxState,
} from "@renderlesskit/react";

import {
  CheckIcon,
  getComponentProps,
  IndeterminateIcon,
  runIfFn,
  withIconA11y,
} from "../index";

import { CheckboxProps } from "./Checkbox";
import { CheckboxInputOptions, CheckboxInputProps } from "./CheckboxInput";
import {
  CheckboxDescriptionProps,
  CheckboxIconProps,
  CheckboxLabelProps,
  CheckboxOwnProps,
  CheckboxTextProps,
  USE_CHECKBOX_STATE_KEYS,
} from "./index";

export type CheckboxState = RenderlesskitCheckboxState & {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"checkbox", "icon", "size">;

  /**
   * If true, Checkbox is checked.
   */
  isChecked: boolean;

  /**
   * If true, Checkbox is indeterminate.
   */
  isIndeterminate: boolean;

  /**
   * If true, Checkbox is unchecked.
   */
  isUnchecked: boolean;

  /**
   * Input's value.
   */
  value: CheckboxInputOptions["value"];
};

export type CheckboxActions = RenderlesskitCheckboxActions & {};

export type CheckboxStateReturn = CheckboxState & CheckboxActions;

export type CheckboxInitialState = RenderlesskitCheckboxInitialState &
  Partial<Pick<CheckboxState, "size" | "value">>;

export function useCheckboxState(
  props: CheckboxInitialState = {},
): CheckboxStateReturn {
  const { state, setState } = useRenderlesskitCheckboxState(props);
  const { size = "md", value } = props;

  const isChecked =
    Array.isArray(state) && value ? state.includes(value) : state === true;
  const isIndeterminate = state === "indeterminate";
  const isUnchecked = !isChecked && !isIndeterminate;

  return {
    state,
    setState,
    size,
    value,
    isChecked,
    isIndeterminate,
    isUnchecked,
  };
}

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

  const { componentProps } = getComponentProps(componentMap, children, state);

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
