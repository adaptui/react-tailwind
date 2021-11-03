import {
  ProgressInitialState as RenderlesskitProgressInitialState,
  ProgressState as RenderlesskitProgressState,
  useProgressState as useRenderlesskitProgressState,
} from "@renderlesskit/react";

import { RenderPropType } from "../utils";

export type CircularProgressState = RenderlesskitProgressState & {
  /**
   * How large should the progress be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<
    "circularProgress",
    "barWrapper",
    "base",
    "size"
  >;

  /**
   * Hint for the CircularProgress.
   */
  hint: RenderPropType<CircularProgressStateReturn>;
};

export type CircularProgressActions = {};

export type CircularProgressStateReturn = CircularProgressState &
  CircularProgressActions;

export type CircularProgressInitialState = RenderlesskitProgressInitialState &
  Partial<Pick<CircularProgressState, "size" | "hint">>;

export function useCircularProgressState(
  props: CircularProgressInitialState = {},
): CircularProgressStateReturn {
  const state = useRenderlesskitProgressState(props);
  const { size = "md", hint } = props;

  return {
    ...state,
    size,
    hint,
  };
}
