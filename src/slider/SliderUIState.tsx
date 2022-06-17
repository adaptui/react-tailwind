import { RenderProp } from "../utils";
import { SliderThumbUIProps } from "..";

import { SliderUIProps } from "./SliderProps";

export function useSliderUIState(props: SliderUIStateProps): SliderUIState {
  const {
    range = false,
    size = "md",
    themeColor = "base",
    tooltip = true,
    knobIcon,
  } = props;

  return {
    range,
    size,
    themeColor,
    knobIcon,
    tooltip,
  };
}

export type SliderUIState = {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size: keyof AdaptUI.GetThemeValue<"slider", "size">;

  /**
   * How the slider should be themed?
   *
   * @default base
   */
  themeColor: keyof AdaptUI.GetThemeValue<"slider", "themeColor">;

  /**
   * True, if you need a range slider.
   */
  range: boolean;

  /**
   * True, if your slider needs a tooltip.
   */
  tooltip: boolean;

  /**
   * Provide custom icons as a replacement for the default ones.
   */
  knobIcon: RenderProp<SliderUIProps> | RenderProp<SliderThumbUIProps>;
};

export type SliderUIStateProps = Partial<
  Pick<SliderUIState, "range" | "size" | "themeColor" | "knobIcon" | "tooltip">
> & {};
