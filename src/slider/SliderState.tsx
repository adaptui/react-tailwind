import * as React from "react";
import {
  SliderActions as RenderlesskitSliderActions,
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

  /**
   * True, if the value start to change.
   */
  isDragging: boolean;
};

export type SliderActions = RenderlesskitSliderActions & {
  /**
   * Action to change the draggin state
   */
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SliderStateReturn = SliderState & SliderActions;

export type SliderInitialState = RenderlesskitSliderInitialState &
  Partial<Pick<SliderState, "range" | "size" | "knobIcon" | "tooltip">> & {};

export function useSliderState(props: SliderInitialState): SliderStateReturn {
  const {
    range = false,
    size = "md",
    tooltip = true,
    knobIcon,
    onChange: onInitialOnChange,
    onChangeEnd: onInitialOnChangeEnd,
    ...rest
  } = props;
  const [isDragging, setIsDragging] = React.useState(false);

  const onChange = React.useCallback(
    (value: number[]) => {
      onInitialOnChange?.(value);
      if (!isDragging) setIsDragging(true);
    },
    [isDragging, onInitialOnChange],
  );

  const onChangeEnd = React.useCallback(
    (value: number[]) => {
      onInitialOnChangeEnd?.(value);
      setIsDragging(false);
    },
    [onInitialOnChangeEnd],
  );

  const state = useRenderlesskitSliderState({
    ...rest,
    onChange,
    onChangeEnd,
  });

  return {
    ...state,
    range,
    size,
    knobIcon,
    tooltip,
    isDragging,
    setIsDragging,
  };
}

export const SliderDefaultKnobIcon: SliderProps["knobIcon"] = state => {
  const { size } = state;
  const theme = useTheme("slider");
  const className = theme.icon.size[size];

  return <EqualsIcon className={className} />;
};
