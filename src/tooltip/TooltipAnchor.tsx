import { createHook } from "reakit-system";
import {
  createComponent,
  TooltipAnchorHTMLProps as RenderlesskitTooltipAnchorHTMLProps,
  TooltipAnchorOptions as RenderlesskitTooltipAnchorOptions,
  useTooltipAnchor as useRenderlesskitTooltipAnchor,
} from "@renderlesskit/react";

import { RenderPropType } from "../utils";

import { TOOLTIP_REFERENCE_KEYS } from "./__keys";
import { TooltipStateReturn } from "./TooltipState";

export type TooltipAnchorOptions = RenderlesskitTooltipAnchorOptions & {
  prefix: RenderPropType<TooltipStateReturn>;
};

export type TooltipAnchorHTMLProps = Omit<
  RenderlesskitTooltipAnchorHTMLProps,
  "prefix"
>;

export type TooltipAnchorProps = TooltipAnchorOptions & TooltipAnchorHTMLProps;

export const useTooltipAnchor = createHook<
  TooltipAnchorOptions,
  TooltipAnchorHTMLProps
>({
  name: "TooltipAnchor",
  compose: useRenderlesskitTooltipAnchor,
  keys: TOOLTIP_REFERENCE_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    return htmlProps;
  },
});

export const TooltipAnchor = createComponent({
  as: "div",
  memo: true,
  useHook: useTooltipAnchor,
});
