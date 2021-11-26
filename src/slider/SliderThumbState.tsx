import {
  SliderThumbActions as RenderlesskitSliderThumbActions,
  SliderThumbInitialState as RenderlesskitSliderThumbInitialState,
  SliderThumbState as RenderlesskitSliderThumbState,
  useSliderThumbState as useRenderlesskitSliderThumbState,
} from "@renderlesskit/react";

export type SliderThumbState = RenderlesskitSliderThumbState & {
  /**
   * Index of the thumb for accessing purposes..
   */
  index: number;
};

export type SliderThumbActions = RenderlesskitSliderThumbActions & {};

export type SliderThumbStateReturn = SliderThumbState & SliderThumbActions;

export type SliderThumbInitialState = RenderlesskitSliderThumbInitialState & {};

export function useSliderThumbState(
  props: RenderlesskitSliderThumbInitialState,
): SliderThumbStateReturn {
  const sliderThumb = useRenderlesskitSliderThumbState(props);

  return { ...sliderThumb, index: props.index };
}
