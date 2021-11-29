import { createComponent, createHook } from "reakit-system";
import {
  SliderInputHTMLProps,
  SliderInputOptions,
  useSliderInput,
} from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SLIDER_THUMB_INPUT_KEYS } from "./__keys";

export type SliderThumbInputOptions = BoxOptions & SliderInputOptions & {};

export type SliderThumbInputHTMLProps = BoxHTMLProps & SliderInputHTMLProps;

export type SliderThumbInputProps = SliderThumbInputOptions &
  SliderThumbInputHTMLProps;

export const useSliderThumbInput = createHook<
  SliderThumbInputOptions,
  SliderThumbInputHTMLProps
>({
  name: "SliderThumbInput",
  compose: [useBox, useSliderInput],
  keys: SLIDER_THUMB_INPUT_KEYS,

  useProps(options, htmlProps) {
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("slider");
    const className = cx(theme.thumb.input, htmlClassName);

    return { className, ...restHtmlProps };
  },
});

export const SliderThumbInput = createComponent({
  as: "input",
  memo: true,
  useHook: useSliderThumbInput,
});
