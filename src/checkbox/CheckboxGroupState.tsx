import { splitProps } from "reakit-utils";

import { createContext } from "../utils";

import { USE_CHECKBOX_GROUP_STATE_KEYS } from "./__keys";
import { CheckboxGroupOwnProps, CheckboxGroupProps } from "./CheckboxGroup";

export type CheckboxGroupState = {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"checkbox", "icon", "size">;

  /**
   * Controls how the group of checkboxs are arranged
   *
   * @default vertical
   */
  stack: "vertical" | "horizontal";

  /**
   * Informs the Checkbox Group & Checkbox that Show More is used.
   *
   * @default null
   */
  maxVisibleItems: number | null;
};

export type CheckboxGroupActions = {};

export type CheckboxGroupStateReturn = CheckboxGroupState &
  CheckboxGroupActions;

export type CheckboxGroupInitialState = Partial<
  Pick<CheckboxGroupState, "size" | "stack" | "maxVisibleItems">
>;

export function useCheckboxGroupState(
  props: CheckboxGroupInitialState = {},
): CheckboxGroupStateReturn {
  const { size = "md", stack = "vertical", maxVisibleItems = null } = props;

  return {
    size,
    stack,
    maxVisibleItems,
  };
}

const [CheckboxStateContextProvider, useCheckboxStateContext] =
  createContext<CheckboxGroupStateReturn>({
    strict: false,
    name: "CheckboxStateContext",
  });

export { CheckboxStateContextProvider, useCheckboxStateContext };

export const useCheckboxGroupStateSplit = (props: CheckboxGroupProps) => {
  const [stateProps, checkboxGroupProps] = splitProps(
    props,
    USE_CHECKBOX_GROUP_STATE_KEYS,
  ) as [CheckboxGroupInitialState, CheckboxGroupOwnProps];
  const state = useCheckboxGroupState(stateProps);

  return [state, checkboxGroupProps, stateProps] as const;
};
