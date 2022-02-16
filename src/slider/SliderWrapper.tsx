import {
  createComponent,
  createHook,
  SliderGroupHTMLProps,
  SliderGroupOptions,
  useSliderGroup,
} from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SLIDER_WRAPPER_KEYS } from "./__keys";

export type SliderWrapperOptions = BoxOptions & SliderGroupOptions & {};

export type SliderWrapperHTMLProps = BoxHTMLProps & SliderGroupHTMLProps;

export type SliderWrapperProps = SliderWrapperOptions & SliderWrapperHTMLProps;

export const useSliderWrapper = createHook<
  SliderWrapperOptions,
  SliderWrapperHTMLProps
>({
  name: "SliderWrapper",
  compose: [useBox, useSliderGroup],
  keys: SLIDER_WRAPPER_KEYS,

  useProps(options, htmlProps) {
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("slider");
    const className = cx(theme.wrapper, htmlClassName);

    return { className, ...restHtmlProps };
  },
});

export const SliderWrapper = createComponent({
  as: "div",
  memo: true,
  useHook: useSliderWrapper,
});
