import { RenderProp } from "ariakit-utils";

import { CircularProgressUIProps } from "./CircularProgressProps";

export const useCircularProgressUIState = (
  props: CircularProgressUIStateProps,
): CircularProgressUIState => {
  const { size = "md", hint } = props;

  return { size, hint };
};

export type Value = boolean | string | number | Array<string | number>;

export type CircularProgressUIState = {
  /**
   * How large should the progress be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<
    "circularProgress",
    "barWrapper",
    "common",
    "size"
  >;

  /**
   * Hint for the CircularProgress.
   */
  hint?: RenderProp<CircularProgressUIProps> | string;
};

export type CircularProgressUIStateProps = Partial<
  Pick<CircularProgressUIState, "size" | "hint">
> & {};
