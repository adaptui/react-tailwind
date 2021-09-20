import {
  RadioGroupHTMLProps as RenderlesskitRadioGroupHTMLProps,
  RadioGroupOptions as RenderlesskitRadioGroupOptions,
  useRadioGroup as useRenderlesskitRadioGroup,
} from "@renderlesskit/react";
import { createComponent, createHook } from "reakit-system";

import { RADIO_GROUP_KEYS } from "./__keys";

export type RadioGroupOptions = RenderlesskitRadioGroupOptions;

export type RadioGroupHTMLProps = RenderlesskitRadioGroupHTMLProps;

export type RadioGroupProps = RadioGroupOptions & RadioGroupHTMLProps;

export const useRadioGroup = createHook<RadioGroupOptions, RadioGroupHTMLProps>(
  {
    name: "RadioGroup",
    compose: useRenderlesskitRadioGroup,
    keys: RADIO_GROUP_KEYS,

    useOptions(options, htmlProps) {
      return options;
    },

    useProps(options, htmlProps) {
      return htmlProps;
    },
  },
);

export const RadioGroup = createComponent({
  as: "div",
  memo: true,
  useHook: useRadioGroup,
});
