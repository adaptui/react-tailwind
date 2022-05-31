import { CheckboxState } from "ariakit";

import { RenderProp } from "../utils";

import { CheckboxDefaultIcon } from "./__utils";
import { CheckboxInputProps } from "./CheckboxInput";
import { CheckboxUIProps } from "./CheckboxProps";

export const useCheckboxUIState = (
  props: CheckboxUIStateProps,
): CheckboxUIState => {
  const {
    state,
    inputValue,
    size = "md",
    icon = CheckboxDefaultIcon,
    label,
    description,
  } = props;

  const isChecked =
    state && inputValue && Array.isArray(state.value)
      ? state.value.includes(inputValue)
      : state?.value === true;
  const isIndeterminate = state?.value === "mixed";
  const isUnchecked = !isChecked && !isIndeterminate;

  return {
    isChecked,
    isIndeterminate,
    isUnchecked,
    size,
    icon,
    label,
    description,
  };
};

export type Value = boolean | string | number | Array<string | number>;

export type CheckboxUIState = {
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
  size: keyof AdaptUI.GetThemeValue<"checkbox", "icon", "size">;

  /**
   * Provide custom icons as a replacement for the default ones.
   *
   * @default CheckboxDefaultIcon
   */
  icon: RenderProp<CheckboxUIProps>;

  /**
   * Label for the Checkbox.
   */
  label?: RenderProp<CheckboxUIProps>;

  /**
   * Description for the Checkbox.
   */
  description?: RenderProp<CheckboxUIProps>;
};

export type CheckboxUIStateProps = Partial<
  Pick<CheckboxUIState, "icon" | "label" | "description" | "size">
> & {
  state?: CheckboxState;
  inputValue?: CheckboxInputProps["value"];
};
