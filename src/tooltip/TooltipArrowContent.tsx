import {
  createComponent,
  createHook,
  TooltipArrowContentHTMLProps as RenderlesskitTooltipArrowContentHTMLProps,
  TooltipArrowContentOptions as RenderlesskitTooltipArrowContentOptions,
  useTooltipArrowContent as useRenderlesskitTooltipArrowContent,
} from "@renderlesskit/react";

import { useTheme } from "../theme";
import { RenderPropType, tcm } from "../utils";

import { TOOLTIP_ARROW_CONTENT_KEYS } from "./__keys";
import { TooltipStateReturn } from "./TooltipState";

export type TooltipArrowContentOptions =
  RenderlesskitTooltipArrowContentOptions & {
    prefix: RenderPropType<TooltipStateReturn>;
  };

export type TooltipArrowContentHTMLProps = Omit<
  RenderlesskitTooltipArrowContentHTMLProps,
  "prefix"
>;

export type TooltipArrowContentProps = TooltipArrowContentOptions &
  TooltipArrowContentHTMLProps;

export const useTooltipArrowContent = createHook<
  TooltipArrowContentOptions,
  TooltipArrowContentHTMLProps
>({
  name: "TooltipArrowContent",
  compose: useRenderlesskitTooltipArrowContent,
  keys: TOOLTIP_ARROW_CONTENT_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("tooltip");
    const className = tcm(theme.arrow, htmlClassName);

    return { className, ...restHtmlProps };
  },
});

export const TooltipArrowContent = createComponent({
  as: "div",
  memo: true,
  useHook: useTooltipArrowContent,
});
