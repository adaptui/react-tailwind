import { RenderProp } from "../utils";

import { MeterUIProps } from "./MeterProps";

export const useMeterUIState = (props: MeterUIStateProps): MeterUIState => {
  const {
    size = "md",
    themeColor = "base",
    intervals = 1,
    flatBorders = true,
    label,
    hint,
  } = props;

  return {
    size,
    themeColor,
    intervals,
    flatBorders: intervals === 1 ? false : flatBorders,
    label,
    hint,
  };
};

export type MeterUIState = {
  /**
   * How large should the meter be?
   *
   * @default md
   */
  size: keyof AdaptUI.GetThemeValue<"meter", "size">;

  /**
   * How the progress should be themed?
   *
   * @default base
   */
  themeColor: keyof AdaptUI.GetThemeValue<"meter", "themeColor">;

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
  label?: RenderProp<MeterUIProps> | string;

  /**
   * Hint for the Meter.
   */
  hint?: RenderProp<MeterUIProps> | string;
};

export type MeterUIStateProps = Partial<
  Pick<
    MeterUIState,
    "size" | "intervals" | "flatBorders" | "label" | "hint" | "themeColor"
  >
> & {};
