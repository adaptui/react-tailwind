import { RenderProp } from "../utils";

import { SliderThumbUIProps } from "./SliderThumbProps";

export function useSliderThumbUIState(
  props: SliderThumbUIStateProps,
): SliderThumbUIState {
  const { size = "md", tooltip = true, knobIcon } = props;

  return {
    size,
    knobIcon,
    tooltip,
  };
}

export type SliderThumbUIState = {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"slider", "track", "base", "size">;

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
  Pick<SliderThumbUIState, "size" | "knobIcon" | "tooltip">
> & {};
