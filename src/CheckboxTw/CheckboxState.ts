import {
  CheckboxOptions as RenderlesskitCheckboxOptions,
  CheckboxState as RenderlesskitCheckboxState,
  CheckboxActions as RenderlesskitCheckboxActions,
  CheckboxInitialState as RenderlesskitCheckboxInitialState,
  useCheckboxState as useRenderlesskitCheckboxState,
} from "../checkboxReakit";

export function useCheckboxState(
  props: CheckboxInitialState = {},
): CheckboxStateReturn {
  const { state, setState } = useRenderlesskitCheckboxState(props);
  const { size = "md", icon, label, description, value } = props;

  const isChecked =
    Array.isArray(state) && value ? state.includes(value) : state === true;
  const isIndeterminate = state === "indeterminate";
  const isUnchecked = !isChecked && !isIndeterminate;

  return {
    state,
    setState,
    size,
    icon,
    label,
    description,
    value,
    isChecked,
    isIndeterminate,
    isUnchecked,
  };
}

export type CheckboxInitialState = RenderlesskitCheckboxInitialState & {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size?: keyof Renderlesskit.GetThemeValue<"checkboxNew", "icon", "size">;

  /**
   * Provide custom icons as a replacement for the default ones.
   */
  icon?: React.ReactNode;

  /**
   * Label for the Checkbox.
   */
  label?: string;

  /**
   * Description for the Checkbox.
   */
  description?: string;

  /**
   * Checkbox's value is going to be used when multiple checkboxes share the
   * same state. Checking a checkbox with value will add it to the state
   * array.
   */
  value?: RenderlesskitCheckboxOptions["value"];
};

export type CheckboxState = RenderlesskitCheckboxState &
  Pick<CheckboxInitialState, "icon" | "label" | "description" | "value"> &
  Required<Pick<CheckboxInitialState, "size">> & {
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
  };

export type CheckboxActions = RenderlesskitCheckboxActions & {};

export type CheckboxStateReturn = CheckboxState & CheckboxActions;
