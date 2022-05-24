import { RenderProp } from "../utils";
import { SliderThumbUIProps } from "..";

import { SliderUIProps } from "./SliderProps";

export function useSliderUIState(props: SliderUIStateProps): SliderUIState {
  const { range = false, size = "md", tooltip = true, knobIcon } = props;

  return {
    range,
    size,
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
  size: keyof Renderlesskit.GetThemeValue<"slider", "track", "base", "size">;

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
  Pick<SliderUIState, "range" | "size" | "knobIcon" | "tooltip">
> & {};
