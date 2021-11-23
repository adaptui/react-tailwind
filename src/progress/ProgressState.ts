import {
  unstable_IdActions,
  unstable_IdInitialState,
  unstable_IdState,
  unstable_useIdState,
} from "reakit";
import {
  ProgressInitialState as RenderlesskitProgressInitialState,
  ProgressState as RenderlesskitProgressState,
  useProgressState as useRenderlesskitProgressState,
} from "@renderlesskit/react";

import { RenderPropType } from "../utils";

export type ProgressState = unstable_IdState &
  RenderlesskitProgressState & {
    /**
     * How large should the progress be?
     *
     * @default md
     */
    size: keyof Renderlesskit.GetThemeValue<"progress", "track", "size">;

    /**
     * Label for the Progress.
     */
    label: RenderPropType<ProgressStateReturn>;

    /**
     * Hint for the Progress.
     */
    hint: RenderPropType<ProgressStateReturn>;
  };

export type ProgressActions = unstable_IdActions;

export type ProgressStateReturn = ProgressState & ProgressActions;

export type ProgressInitialState = unstable_IdInitialState &
  RenderlesskitProgressInitialState &
  Partial<Pick<ProgressState, "size" | "label" | "hint">>;

export function useProgressState(
  props: ProgressInitialState = {},
): ProgressStateReturn {
  const state = useRenderlesskitProgressState(props);
  const id = unstable_useIdState({ baseId: "progress" });
  const { size = "md", label, hint } = props;

  return {
    ...state,
    ...id,
    size,
    label,
    hint,
  };
}
