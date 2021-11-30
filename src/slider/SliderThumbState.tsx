import {
  SliderThumbActions as RenderlesskitSliderThumbActions,
  SliderThumbInitialState as RenderlesskitSliderThumbInitialState,
  SliderThumbState as RenderlesskitSliderThumbState,
  useSliderThumbState as useRenderlesskitSliderThumbState,
} from "@renderlesskit/react";

import { RenderPropType } from "../utils";

export type SliderThumbState = RenderlesskitSliderThumbState & {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"slider", "track", "base", "size">;

  /**
   * Index of the thumb for accessing purposes..
   */
  index: number;

  /**
   * True, if your slider needs a tooltip.
   */
  tooltip: boolean;

  /**
   * Provide custom icons as a replacement for the default ones.
   */
  knobIcon: RenderPropType<SliderThumbStateReturn>;

  /**
   * True, if the value start to change.
   */
  isDragging: boolean;
};

export type SliderThumbActions = RenderlesskitSliderThumbActions & {
  /**
   * Action to change the draggin state
   */
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SliderThumbStateReturn = SliderThumbState & SliderThumbActions;

export type SliderThumbInitialState = RenderlesskitSliderThumbInitialState &
  Partial<Pick<SliderThumbState, "size" | "knobIcon" | "tooltip">> &
  Pick<SliderThumbStateReturn, "isDragging" | "setIsDragging"> & {};

export function useSliderThumbState(
  props: SliderThumbInitialState,
): SliderThumbStateReturn {
  const {
    size = "md",
    knobIcon,
    tooltip = true,
    isDragging,
    setIsDragging,
    ...rest
  } = props;
  const sliderThumb = useRenderlesskitSliderThumbState(rest);

  return {
    ...sliderThumb,
    knobIcon,
    index: props.index,
    size,
    tooltip,
    isDragging,
    setIsDragging,
  };
}
