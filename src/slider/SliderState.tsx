import {
  SliderAction as RenderlesskitSliderActions,
  SliderInitialState as RenderlesskitSliderInitialState,
  SliderState as RenderlesskitSliderState,
  useSliderState as useRenderlesskitSliderState,
} from "@renderlesskit/react";

import { EqualsIcon } from "../icons";
import { useTheme } from "../theme";
import { RenderPropType } from "../utils";

import { SliderProps } from "./Slider";
import { SliderThumbStateReturn } from "./SliderThumbState";

export type SliderState = RenderlesskitSliderState & {
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
  knobIcon: RenderPropType<SliderThumbStateReturn>;
};

export type SliderActions = RenderlesskitSliderActions & {};

export type SliderStateReturn = SliderState & SliderActions;

export type SliderInitialState = RenderlesskitSliderInitialState &
  Partial<Pick<SliderState, "range" | "size" | "knobIcon" | "tooltip">> & {};

export function useSliderState(props: SliderInitialState): SliderStateReturn {
  const {
    range = false,
    size = "md",
    knobIcon,
    tooltip = true,
    ...rest
  } = props;
  const slider = useRenderlesskitSliderState(rest);

  return { ...slider, range, size, knobIcon, tooltip };
}

export const SliderDefaultKnobIcon: SliderProps["knobIcon"] = state => {
  const { size } = state;

  const theme = useTheme("slider");
  const className = theme.icon.size[size];

  return <EqualsIcon className={className} />;
};
