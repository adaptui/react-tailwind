import { createComponent, createHook } from "reakit-system";
import {
  TooltipArrowHTMLProps as RenderlesskitTooltipArrowHTMLProps,
  TooltipArrowOptions as RenderlesskitTooltipArrowOptions,
  useTooltipArrow as useRenderlesskitTooltipArrow,
} from "@renderlesskit/react";

import { RenderPropType } from "../utils";

import { TOOLTIP_ARROW_KEYS } from "./__keys";
import { TooltipStateReturn } from "./TooltipState";

export type TooltipArrowOptions = RenderlesskitTooltipArrowOptions & {
  prefix: RenderPropType<TooltipStateReturn>;
};

export type TooltipArrowHTMLProps = Omit<
  RenderlesskitTooltipArrowHTMLProps,
  "prefix"
>;

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
