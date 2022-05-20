export const useRadioUIState = (
  props: RadioGroupUIStateProps,
): RadioGroupUIState => {
  const { size = "md", stack = "vertical", maxVisibleItems = null } = props;

  return {
    size,
    stack,
    maxVisibleItems,
  };
};

export type RadioGroupUIState = {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"radio", "icon", "size">;

  /**
   * Controls how the group of radios are arranged
   *
   * @default vertical
   */
  stack: "vertical" | "horizontal";

  /**
   * Informs the Radio Group & Radio that Show More is used.
   *
   * @default null
   */
  maxVisibleItems: number | null;
};

export type RadioGroupUIStateProps = Partial<
  Pick<RadioGroupUIState, "size" | "stack" | "maxVisibleItems">
>;
