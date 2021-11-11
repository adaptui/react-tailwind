import {
  unstable_IdActions,
  unstable_IdInitialState,
  unstable_IdState,
  unstable_useIdState,
} from "reakit";
import {
  MeterInitialState as RenderlesskitMeterInitialState,
  MeterState as RenderlesskitMeterState,
  useMeterState as useRenderlesskitMeterState,
} from "@renderlesskit/react";

import { RenderPropType } from "../utils";

export type MeterState = unstable_IdState &
  RenderlesskitMeterState & {
    /**
     * How large should the meter be?
     *
     * @default md
     */
    size: keyof Renderlesskit.GetThemeValue<"meter", "track", "size">;

    /**
     * No of intervals for the meter.
     *
     * @default 1
     */
    intervals: number;

    /**
     * If true, meter bar intervals will have flat broders
     */
    flatBorders: boolean;

    /**
     * Label for the Meter.
     */
    label: RenderPropType<MeterStateReturn>;

    /**
     * Hint for the Meter.
     */
    hint: RenderPropType<MeterStateReturn>;
  };

export type MeterActions = unstable_IdActions;

export type MeterStateReturn = MeterState & MeterActions;

export type MeterInitialState = unstable_IdInitialState &
  RenderlesskitMeterInitialState &
  Partial<
    Pick<MeterState, "size" | "intervals" | "flatBorders" | "label" | "hint">
  >;

export function useMeterState(props: MeterInitialState = {}): MeterStateReturn {
  const state = useRenderlesskitMeterState(props);
  const id = unstable_useIdState({ baseId: "meter" });
  const { size = "md", intervals = 1, flatBorders = true, label, hint } = props;

  return {
    ...state,
    ...id,
    size,
    intervals,
    flatBorders: intervals === 1 ? false : flatBorders,
    label,
    hint,
  };
}
