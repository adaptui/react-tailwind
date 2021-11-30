import { createComponent, createHook } from "reakit-system";
import {
  TooltipHTMLProps,
  TooltipOptions,
  useTooltip,
} from "@renderlesskit/react";

import { RenderPropType } from "../utils";

import { TOOLTIP_WRAPPER_KEYS } from "./__keys";
import { TooltipStateReturn } from "./TooltipState";

export type TooltipWrapperOptions = TooltipOptions & {
  prefix: RenderPropType<TooltipStateReturn>;
};

export type TooltipWrapperHTMLProps = Omit<TooltipHTMLProps, "prefix">;

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
