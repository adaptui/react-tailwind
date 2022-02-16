import {
  CheckboxActions as RenderlesskitCheckboxActions,
  CheckboxInitialState as RenderlesskitCheckboxInitialState,
  CheckboxState as RenderlesskitCheckboxState,
  useCheckboxState as useRenderlesskitCheckboxState,
} from "@renderlesskit/react";

import { CheckboxGroupState, useCheckboxGroupContext } from "../checkbox-group";
import { CheckIcon, DashIcon } from "../icons";
import { RenderPropType, withIconA11y } from "../utils";

import { CheckboxInputOptions } from "./CheckboxInput";

export type CheckboxState = RenderlesskitCheckboxState &
  Pick<CheckboxGroupState, "maxVisibleItems" | "stack"> & {
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

    /**
     * Provide custom icons as a replacement for the default ones.
     */
    icon: RenderPropType<CheckboxStateReturn>;

    /**
     * Label for the Checkbox.
     */
    label: RenderPropType<CheckboxStateReturn>;

    /**
     * Description for the Checkbox.
     */
    description: RenderPropType<CheckboxStateReturn>;
  };

export type CheckboxActions = RenderlesskitCheckboxActions & {};

export type CheckboxStateReturn = CheckboxState & CheckboxActions;

export type CheckboxInitialState = RenderlesskitCheckboxInitialState &
  Partial<
    Pick<CheckboxState, "size" | "value" | "label" | "description" | "icon">
  >;

export function useCheckboxState(
  props: CheckboxInitialState = {},
): CheckboxStateReturn {
  const { state, setState } = useRenderlesskitCheckboxState(props);
  const {
    size: originalSize,
    value,
    icon = CheckboxDefaultIcon,
    label,
    description,
  } = props;
  const contextState = useCheckboxGroupContext();

  const isChecked =
    Array.isArray(state) && value ? state.includes(value) : state === true;
  const isIndeterminate = state === "indeterminate";
  const isUnchecked = !isChecked && !isIndeterminate;

  return {
    state,
    setState,
    size: originalSize ?? contextState?.size ?? "md",
    value,
    isChecked,
    isIndeterminate,
    isUnchecked,
    maxVisibleItems: contextState?.maxVisibleItems ?? null,
    stack: contextState?.stack ?? "horizontal",
    icon,
    label,
    description,
  };
}

export const CheckboxDefaultIcon: CheckboxState["icon"] = state => {
  const { isChecked, isIndeterminate } = state;

  return (
    <>
      {isChecked ? withIconA11y(<CheckIcon />) : null}
      {isIndeterminate ? withIconA11y(<DashIcon />) : null}
    </>
  );
};
