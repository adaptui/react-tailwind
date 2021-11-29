import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SLIDER_THUMB_WRAPPER_KEYS } from "./__keys";
import { SliderThumbStateReturn } from "./SliderThumbState";

export type SliderThumbWrapperOptions = BoxOptions &
  Pick<SliderThumbStateReturn, "sliderState" | "index">;

export type SliderThumbWrapperHTMLProps = BoxHTMLProps;

export type SliderThumbWrapperProps = SliderThumbWrapperOptions &
  SliderThumbWrapperHTMLProps;

export const useSliderThumbWrapper = createHook<
  SliderThumbWrapperOptions,
  SliderThumbWrapperHTMLProps
>({
  name: "SliderThumbWrapper",
  compose: useBox,
  keys: SLIDER_THUMB_WRAPPER_KEYS,

  useProps(options, htmlProps) {
    const { sliderState, index } = options;
    const { baseState } = sliderState;
    const { getThumbPercent } = baseState;
    const {
      className: htmlClassName,
      style: htmlStyle,
      ...restHtmlProps
    } = htmlProps;

    const theme = useTheme("slider");
    const className = cx(theme.thumb.wrapper, htmlClassName);
    const style = {
      left: `calc(${getThumbPercent(index) * 100}% - 7px)`,
      ...htmlStyle,
    };

    return { className, style, ...restHtmlProps };
  },
});

export const SliderThumbWrapper = createComponent({
  as: "div",
  memo: true,
  useHook: useSliderThumbWrapper,
});
