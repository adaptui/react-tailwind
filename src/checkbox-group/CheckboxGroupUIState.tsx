export const useCheckboxGroupUIState = (
  props: CheckboxGroupUIStateProps,
): CheckboxGroupUIState => {
  const {
    size = "md",
    themeColor = "base",
    stack = "vertical",
    maxVisibleItems = null,
  } = props;

  return {
    size,
    themeColor,
    stack,
    maxVisibleItems,
  };
};

export type CheckboxGroupUIState = {
  /**
   * How large should the checkbox be?
   *
   * @default md
   */
  size: keyof AdaptUI.GetThemeValue<"checkbox", "size">;

  /**
   * How the checkbox should be themed?
   *
   * @default base
   */
  themeColor: keyof AdaptUI.GetThemeValue<"checkbox", "themeColor">;

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
  Pick<
    CheckboxGroupUIState,
    "size" | "stack" | "maxVisibleItems" | "themeColor"
  >
>;
