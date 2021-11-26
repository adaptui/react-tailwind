import { createComponent, createHook } from "reakit-system";
import {
  SliderTrackHTMLProps,
  SliderTrackOptions,
  useSliderTrack,
} from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { cx } from "../utils";

import { SLIDER_TRACK_WRAPPER_KEYS } from "./__keys";

export type SliderTrackWrapperOptions = BoxOptions & SliderTrackOptions & {};

export type SliderTrackWrapperHTMLProps = BoxHTMLProps & SliderTrackHTMLProps;

export type SliderTrackWrapperProps = SliderTrackWrapperOptions &
  SliderTrackWrapperHTMLProps;

export const useSliderTrackWrapper = createHook<
  SliderTrackWrapperOptions,
  SliderTrackWrapperHTMLProps
>({
  name: "SliderTrackWrapper",
  compose: [useBox, useSliderTrack],
  keys: SLIDER_TRACK_WRAPPER_KEYS,

  useProps(options, htmlProps) {
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    // const theme = useTheme("slider");
    const className = cx(
      "relative w-full py-[7px] cursor-pointer",
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const SliderTrackWrapper = createComponent({
  as: "div",
  memo: true,
  useHook: useSliderTrackWrapper,
});
