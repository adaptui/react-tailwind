import { useMemo } from "react";
import {
  CheckboxState as AriakitCheckboxState,
  useCheckboxState as useAriakitCheckboxState,
} from "ariakit";
import { RenderProp, SetState } from "ariakit-utils";

import { RenderPropType } from "../utils";

import { CheckboxDefaultIcon } from "./__utils";
import { CheckboxInputOptions } from "./CheckboxInput";

export function useCheckboxState(
  props: CheckboxStateProps = {},
): CheckboxState {
  const {
    state: groupState,
    size = "md",
    icon = CheckboxDefaultIcon,
    label,
    description,
    value,
    defaultOptions,
    options,
    setOptions,
  } = props;

  const fallbackState = useAriakitCheckboxState({
    defaultValue: defaultOptions,
    value: options,
    setValue: setOptions,
  });
  const checked = groupState ?? fallbackState;

  const isChecked =
    checked && value && Array.isArray(checked.value)
      ? checked.value.includes(value)
      : checked.value === true;
  const isIndeterminate = checked.value === "mixed";
  const isUnchecked = !isChecked && !isIndeterminate;
  console.log("%cisChecked", "color: #00b300", isChecked);

  const state = useMemo(
    () => ({
      size,
      icon,
      label,
      description,
      state: checked,
      isChecked,
      isIndeterminate,
      isUnchecked,
    }),
    [
      size,
      icon,
      label,
      description,
      checked,
      isChecked,
      isIndeterminate,
      isUnchecked,
    ],
  );

  return state;
}

export type CheckboxState = {
  /**
   * The State of the Checkbox.
   */
  state: AriakitCheckboxState;

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
   * How large should the button be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"checkbox", "icon", "size">;

  /**
   * Provide custom icons as a replacement for the default ones.
   *
   * @default CheckboxDefaultIcon
   */
  icon: RenderProp<CheckboxState>;

  /**
   * Label for the Checkbox.
   */
  label?: RenderPropType<CheckboxState> | string;

  /**
   * Description for the Checkbox.
   */
  description?: RenderPropType<CheckboxState> | string;
};

export type Value = boolean | string | number | Array<string | number>;

export type CheckboxStateProps = Partial<
  Pick<CheckboxState, "size" | "icon" | "label" | "description" | "state">
> &
  Pick<CheckboxInputOptions, "value"> & {
    defaultOptions?: Value;
    options?: Value;
    setOptions?: SetState<Value>;
  };
