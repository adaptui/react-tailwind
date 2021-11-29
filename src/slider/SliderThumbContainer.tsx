import { createComponent, createHook } from "reakit-system";
import {
  SliderThumbHTMLProps,
  SliderThumbOptions,
  useSliderThumb,
} from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SLIDER_THUMB_CONTAINER_KEYS } from "./__keys";

export type SliderThumbContainerOptions = BoxOptions & SliderThumbOptions & {};

export type SliderThumbContainerHTMLProps = BoxHTMLProps & SliderThumbHTMLProps;

export type SliderThumbContainerProps = SliderThumbContainerOptions &
  SliderThumbContainerHTMLProps;

export const useSliderThumbContainer = createHook<
  SliderThumbContainerOptions,
  SliderThumbContainerHTMLProps
>({
  name: "SliderThumbContainer",
  compose: [useBox, useSliderThumb],
  keys: SLIDER_THUMB_CONTAINER_KEYS,

  useProps(options, htmlProps) {
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("slider");
    const className = cx(theme.thumb.container, htmlClassName);

    return { className, ...restHtmlProps };
  },
});

export const SliderThumbContainer = createComponent({
  as: "div",
  memo: true,
  useHook: useSliderThumbContainer,
});
