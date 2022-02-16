import {
  createComponent,
  createHook,
  TooltipContentHTMLProps as RenderlesskitTooltipContentHTMLProps,
  TooltipContentOptions as RenderlesskitTooltipContentOptions,
  useTooltipContent as useRenderlesskitTooltipContent,
} from "@renderlesskit/react";

import { useTheme } from "../theme";
import { RenderPropType, tcm } from "../utils";

import { TOOLTIP_ARROW_CONTENT_KEYS } from "./__keys";
import { TooltipStateReturn } from "./TooltipState";

export type TooltipContentOptions = RenderlesskitTooltipContentOptions & {
  prefix: RenderPropType<TooltipStateReturn>;
};

export type TooltipContentHTMLProps = Omit<
  RenderlesskitTooltipContentHTMLProps,
  "prefix"
>;

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
