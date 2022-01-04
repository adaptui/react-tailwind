import { createHook } from "reakit-system";
import { createComponent } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SLIDER_THUMB_WRAPPER_KEYS } from "./__keys";
import { SliderThumbStateReturn } from "./SliderThumbState";
import { useSliderContext } from ".";

export type SliderThumbWrapperOptions = BoxOptions &
  Pick<SliderThumbStateReturn, "index" | "size">;

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
    const { index, size } = options;
    let state = useSliderContext();
    const {
      className: htmlClassName,
      style: htmlStyle,
      ...restHtmlProps
    } = htmlProps;

    const theme = useTheme("slider");
    const className = cx(theme.thumb.wrapper.common, htmlClassName);
    const style = {
      left: state
        ? `calc(${state.getThumbPercent(index) * 100}% - ${
            theme.thumb.wrapper.size[size]
          })`
        : undefined,
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
