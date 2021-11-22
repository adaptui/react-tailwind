import { createComponent, createHook } from "reakit-system";
import {
  TooltipContentHTMLProps as RenderlesskitTooltipContentHTMLProps,
  TooltipContentOptions as RenderlesskitTooltipContentOptions,
  useTooltipContent as useRenderlesskitTooltipContent,
} from "@renderlesskit/react";

import { useTheme } from "../theme";
import { tcm } from "../utils";

import { TOOLTIP_ARROW_CONTENT_KEYS } from "./__keys";

export type TooltipContentOptions = RenderlesskitTooltipContentOptions;

export type TooltipContentHTMLProps = RenderlesskitTooltipContentHTMLProps;

export type TooltipContentProps = TooltipContentOptions &
  TooltipContentHTMLProps;

export const useTooltipContent = createHook<
  TooltipContentOptions,
  TooltipContentHTMLProps
>({
  name: "TooltipContent",
  compose: useRenderlesskitTooltipContent,
  keys: TOOLTIP_ARROW_CONTENT_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("tooltip");
    const className = tcm(theme.content, htmlClassName);

    return { className, ...restHtmlProps };
  },
});

export const TooltipContent = createComponent({
  as: "div",
  memo: true,
  useHook: useTooltipContent,
});
