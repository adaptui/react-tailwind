import { createComponent, createHook } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SLIDER_TRACK_KEYS } from "./__keys";
import { SliderStateReturn } from "./SliderState";

export type SliderTrackOptions = BoxOptions &
  Pick<SliderStateReturn, "size"> & {};

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
    const { size } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("slider");
    const className = cx(
      theme.track.base.common,
      theme.track.base.size[size],
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const SliderTrack = createComponent({
  as: "div",
  memo: true,
  useHook: useSliderTrack,
});
