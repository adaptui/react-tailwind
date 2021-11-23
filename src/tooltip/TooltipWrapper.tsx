import { createComponent, createHook } from "reakit-system";
import {
  TooltipHTMLProps,
  TooltipOptions,
  useTooltip,
} from "@renderlesskit/react";

import { TOOLTIP_WRAPPER_KEYS } from "./__keys";

export type TooltipWrapperOptions = TooltipOptions;

export type TooltipWrapperHTMLProps = TooltipHTMLProps;

export type TooltipWrapperProps = TooltipWrapperOptions &
  TooltipWrapperHTMLProps;

export const useTooltipWrapper = createHook<
  TooltipWrapperOptions,
  TooltipWrapperHTMLProps
>({
  name: "TooltipWrapper",
  compose: useTooltip,
  keys: TOOLTIP_WRAPPER_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    return htmlProps;
  },
});

export const TooltipWrapper = createComponent({
  as: "div",
  memo: true,
  useHook: useTooltipWrapper,
});
