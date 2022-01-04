import { createHook } from "reakit-system";
import {
  createComponent,
  TooltipStateReturn,
  TooltipTriggerHTMLProps as RenderlesskitTooltipTriggerHTMLProps,
  TooltipTriggerOptions as RenderlesskitTooltipTriggerOptions,
  useTooltipTrigger as useRenderlesskitTooltipTrigger,
} from "@renderlesskit/react";

import { RenderPropType } from "../utils";

import { TOOLTIP_REFERENCE_KEYS } from "./__keys";

export type TooltipTriggerOptions = RenderlesskitTooltipTriggerOptions & {
  prefix: RenderPropType<TooltipStateReturn>;
};

export type TooltipTriggerHTMLProps = Omit<
  RenderlesskitTooltipTriggerHTMLProps,
  "prefix"
>;

export type TooltipTriggerProps = TooltipTriggerOptions &
  TooltipTriggerHTMLProps;

export const useTooltipTrigger = createHook<
  TooltipTriggerOptions,
  TooltipTriggerHTMLProps
>({
  name: "TooltipTrigger",
  compose: useRenderlesskitTooltipTrigger,
  keys: TOOLTIP_REFERENCE_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    return htmlProps;
  },
});

export const TooltipTrigger = createComponent({
  as: "div",
  memo: true,
  useHook: useTooltipTrigger,
});
