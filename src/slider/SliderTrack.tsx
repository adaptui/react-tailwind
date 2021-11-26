import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { cx } from "../utils";

import { SLIDER_TRACK_KEYS } from "./__keys";

export type SliderTrackOptions = BoxOptions & {};

export type SliderTrackHTMLProps = BoxHTMLProps;

export type SliderTrackProps = SliderTrackOptions & SliderTrackHTMLProps;

export const useSliderTrack = createHook<
  SliderTrackOptions,
  SliderTrackHTMLProps
>({
  name: "SliderTrack",
  compose: useBox,
  keys: SLIDER_TRACK_KEYS,

  useProps(options, htmlProps) {
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    // const theme = useTheme("slider");
    const className = cx("w-full h-1 bg-gray-200 rounded-sm", htmlClassName);

    return { className, ...restHtmlProps };
  },
});

export const SliderTrack = createComponent({
  as: "div",
  memo: true,
  useHook: useSliderTrack,
});
