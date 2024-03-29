import { RenderProp } from "../utils";

import { CircularProgressUIProps } from "./CircularProgressProps";

export const useCircularProgressUIState = (
  props: CircularProgressUIStateProps,
): CircularProgressUIState => {
  const { size = "md", themeColor = "base", hint } = props;

  return { size, themeColor, hint };
};

export type CircularProgressUIState = {
  /**
   * How large should the progress be?
   *
   * @default md
   */
  size: keyof AdaptUI.GetThemeValue<"circularProgress", "size">;

  /**
   * How the circular-progress should be themed?
   *
   * @default base
   */
  themeColor: keyof AdaptUI.GetThemeValue<"circularProgress", "themeColor">;

  /**
   * Hint for the CircularProgress.
   */
  hint?: RenderProp<CircularProgressUIProps> | string;
};

export type CircularProgressUIStateProps = Partial<
  Pick<CircularProgressUIState, "size" | "hint" | "themeColor">
> & {};
