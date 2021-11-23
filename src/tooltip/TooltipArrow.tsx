import { createComponent, createHook } from "reakit-system";
import {
  TooltipArrowHTMLProps as RenderlesskitTooltipArrowHTMLProps,
  TooltipArrowOptions as RenderlesskitTooltipArrowOptions,
  useTooltipArrow as useRenderlesskitTooltipArrow,
} from "@renderlesskit/react";

import { TOOLTIP_ARROW_KEYS } from "./__keys";

export type TooltipArrowOptions = RenderlesskitTooltipArrowOptions;

export type TooltipArrowHTMLProps = RenderlesskitTooltipArrowHTMLProps;

export type TooltipArrowProps = TooltipArrowOptions & TooltipArrowHTMLProps;

export const useTooltipArrow = createHook<
  TooltipArrowOptions,
  TooltipArrowHTMLProps
>({
  name: "TooltipArrow",
  compose: useRenderlesskitTooltipArrow,
  keys: TOOLTIP_ARROW_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    return htmlProps;
  },
});

export const TooltipArrow = createComponent({
  as: "div",
  memo: true,
  useHook: useTooltipArrow,
});
