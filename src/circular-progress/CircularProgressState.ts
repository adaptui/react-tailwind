import {
  ProgressInitialState as RenderlesskitProgressInitialState,
  ProgressState as RenderlesskitProgressState,
  useProgressState as useRenderlesskitProgressState,
} from "@renderlesskit/react";

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
};

export type CircularProgressActions = {};

export type CircularProgressStateReturn = CircularProgressState &
  CircularProgressActions;

export type CircularProgressInitialState = RenderlesskitProgressInitialState &
  Partial<Pick<CircularProgressState, "size">>;

export function useCircularProgressState(
  props: CircularProgressInitialState = {},
): CircularProgressStateReturn {
  const state = useRenderlesskitProgressState(props);
  const { size = "md" } = props;

  return {
    ...state,
    size,
  };
}
