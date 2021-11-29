import { createComponent, createHook } from "reakit-system";
import {
  TooltipReferenceHTMLProps as RenderlesskitTooltipReferenceHTMLProps,
  TooltipReferenceOptions as RenderlesskitTooltipReferenceOptions,
  useTooltipReference as useRenderlesskitTooltipReference,
} from "@renderlesskit/react";

import { RenderPropType } from "../utils";

import { TOOLTIP_REFERENCE_KEYS } from "./__keys";
import { TooltipStateReturn } from "./TooltipState";

export type TooltipReferenceOptions = RenderlesskitTooltipReferenceOptions & {
  prefix: RenderPropType<TooltipStateReturn>;
};

export type TooltipReferenceHTMLProps = Omit<
  RenderlesskitTooltipReferenceHTMLProps,
  "prefix"
>;

export type TooltipReferenceProps = TooltipReferenceOptions &
  TooltipReferenceHTMLProps;

export const useTooltipReference = createHook<
  TooltipReferenceOptions,
  TooltipReferenceHTMLProps
>({
  name: "TooltipReference",
  compose: useRenderlesskitTooltipReference,
  keys: TOOLTIP_REFERENCE_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    return htmlProps;
  },
});

export const TooltipReference = createComponent({
  as: "div",
  memo: true,
  useHook: useTooltipReference,
});
