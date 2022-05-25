export const useCheckboxGroupUIState = (
  props: CheckboxGroupUIStateProps,
): CheckboxGroupUIState => {
  const { size = "md", stack = "vertical", maxVisibleItems = null } = props;

  return {
    size,
    stack,
    maxVisibleItems,
  };
};

export type CheckboxGroupUIState = {
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

export type CheckboxGroupUIStateProps = Partial<
  Pick<CheckboxGroupUIState, "size" | "stack" | "maxVisibleItems">
>;
