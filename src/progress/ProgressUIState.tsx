import { RenderProp } from "ariakit-utils";

import { ProgressUIProps } from "./ProgressProps";

export const useProgressUIState = (
  props: ProgressUIStateProps,
): ProgressUIState => {
  const { size = "md", label, hint } = props;

  return { size, label, hint };
};

export type ProgressUIState = {
  /**
   * How large should the progress be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"progress", "track", "size">;

  /**
   * Label for the Progress.
   */
  label?: RenderProp<ProgressUIProps> | string;

  /**
   * Hint for the Progress.
   */
  hint?: RenderProp<ProgressUIProps> | string;
};

export type ProgressUIStateProps = Partial<
  Pick<ProgressUIState, "size" | "label" | "hint">
> & {};
