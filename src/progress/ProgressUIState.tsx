import { RenderProp } from "../utils";

import { ProgressUIProps } from "./ProgressProps";

export const useProgressUIState = (
  props: ProgressUIStateProps,
): ProgressUIState => {
  const { size = "md", themeColor = "base", label, hint } = props;

  return { size, themeColor, label, hint };
};

export type ProgressUIState = {
  /**
   * How large should the progress be?
   *
   * @default md
   */
  size: keyof AdaptUI.GetThemeValue<"progress", "size">;

  /**
   * How the progress should be themed?
   *
   * @default base
   */
  themeColor: keyof AdaptUI.GetThemeValue<"button", "themeColor">;

  /**
   * Label for the Progress.
   */
  label?: RenderProp<ProgressUIProps> | string;

  /**
   * Hint for the Progress & should be provided along with label
   */
  hint?: RenderProp<ProgressUIProps> | string;
};

export type ProgressUIStateProps = Partial<
  Pick<ProgressUIState, "size" | "label" | "hint" | "themeColor">
> & {};
