export const useRadioGroupUIState = (
  props: RadioGroupUIStateProps,
): RadioGroupUIState => {
  const {
    size = "md",
    stack = "vertical",
    themeColor = "base",
    maxVisibleItems = null,
  } = props;

  return {
    size,
    themeColor,
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
  size: keyof AdaptUI.GetThemeValue<"radio", "size">;

  /**
   * How the radio should be themed?
   *
   * @default base
   */
  themeColor: keyof AdaptUI.GetThemeValue<"radio", "themeColor">;

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
  Pick<RadioGroupUIState, "size" | "themeColor" | "stack" | "maxVisibleItems">
>;
