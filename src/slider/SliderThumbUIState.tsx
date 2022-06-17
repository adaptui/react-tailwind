import { RenderProp } from "../utils";

import { SliderThumbUIProps } from "./SliderThumbProps";
import { SliderUIState } from "./SliderUIState";

export function useSliderThumbUIState(
  props: SliderThumbUIStateProps,
): SliderThumbUIState {
  const { size = "md", themeColor = "base", tooltip = true, knobIcon } = props;

  return {
    size,
    themeColor,
    knobIcon,
    tooltip,
  };
}

export type SliderThumbUIState = Pick<SliderUIState, "size" | "themeColor"> & {
  /**
   * True, if your slider needs a tooltip.
   */
  tooltip: boolean;

  /**
   * Provide custom icons as a replacement for the default ones.
   */
  knobIcon: RenderProp<SliderThumbUIProps>;
};

export type SliderThumbUIStateProps = Partial<
  Pick<SliderThumbUIState, "size" | "themeColor" | "knobIcon" | "tooltip">
> & {};
