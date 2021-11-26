import {
  SliderAction as RenderlesskitSliderActions,
  SliderInitialState as RenderlesskitSliderInitialState,
  SliderState as RenderlesskitSliderState,
  useSliderState as useRenderlesskitSliderState,
} from "@renderlesskit/react";

export type SliderState = RenderlesskitSliderState & {};

export type SliderActions = RenderlesskitSliderActions & {};

export type SliderStateReturn = SliderState & SliderActions;

export type SliderInitialState = RenderlesskitSliderInitialState & {};

export function useSliderState(
  props: RenderlesskitSliderInitialState,
): SliderStateReturn {
  const slider = useRenderlesskitSliderState(props);

  return { ...slider };
}
