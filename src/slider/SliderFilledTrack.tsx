import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SLIDER_FILLED_TRACK_KEYS } from "./__keys";
import { useSliderContext } from "./SliderProps";
import { SliderStateReturn } from "./SliderState";

export type SliderFilledTrackOptions = BoxOptions &
  Pick<SliderStateReturn, "range" | "size"> & {};

export type SliderFilledTrackHTMLProps = BoxHTMLProps;

export type SliderFilledTrackProps = SliderFilledTrackOptions &
  SliderFilledTrackHTMLProps;

export const useSliderFilledTrack = createHook<
  SliderFilledTrackOptions,
  SliderFilledTrackHTMLProps
>({
  name: "SliderFilledTrack",
  compose: useBox,
  keys: SLIDER_FILLED_TRACK_KEYS,

  useProps(options, htmlProps) {
    const { range, size } = options;
    let state = useSliderContext();

    const {
      className: htmlClassName,
      style: htmlStyle,
      ...restHtmlProps
    } = htmlProps;

    const theme = useTheme("slider");
    const className = cx(
      theme.track.filled.common,
      theme.track.filled.size[size],
      htmlClassName,
    );
    const style = {
      width: state
        ? !range
          ? `${state.getValuePercent(state.values[0]) * 100}%`
          : `${(state.getThumbPercent(1) - state.getThumbPercent(0)) * 100}%`
        : undefined,
      left: !state || !range ? undefined : `${state.getThumbPercent(0) * 100}%`,
      ...htmlStyle,
    };

    return { className, style, ...restHtmlProps };
  },
});

export const SliderFilledTrack = createComponent({
  as: "div",
  memo: true,
  useHook: useSliderFilledTrack,
});
