import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SLIDER_FILLED_TRACK_KEYS } from "./__keys";
import { SliderStateReturn } from "./SliderState";

export type SliderFilledTrackOptions = BoxOptions &
  Pick<SliderStateReturn, "baseState" | "range" | "size"> & {};

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
    const { baseState, range, size } = options;
    const { getValuePercent, getThumbPercent, values } = baseState;
    const {
      className: htmlClassName,
      style: htmlStyle,
      ...restHtmlProps
    } = htmlProps;

    const theme = useTheme("slider");
    const className = cx(
      theme.track.filled.normal,
      theme.track.filled.size[size],
      htmlClassName,
    );
    const style = {
      width: !range
        ? `${getValuePercent(values[0]) * 100}%`
        : `${(getThumbPercent(1) - getThumbPercent(0)) * 100}%`,
      left: !range ? undefined : `${getThumbPercent(0) * 100}%`,
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
