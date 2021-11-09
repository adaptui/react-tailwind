import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";

import { ARROW_KEYS } from "./__keys";
import { PopoverStateReturn } from "./PopoverState";

export type ArrowOptions = BoxOptions & Pick<PopoverStateReturn, "arrowStyles">;

export type ArrowHTMLProps = BoxHTMLProps;

export type ArrowProps = ArrowOptions & ArrowHTMLProps;

export const useArrow = createHook<ArrowOptions, ArrowHTMLProps>({
  name: "Arrow",
  compose: useBox,
  keys: ARROW_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    const { arrowStyles } = options;
    const { style: htmlStyle, ...restHtmlProps } = htmlProps;

    return {
      style: {
        ...arrowStyles,
        pointerEvents: "none",
        ...htmlStyle,
      },
      ...restHtmlProps,
    };
  },
});

export const Arrow = createComponent({
  as: "span",
  memo: true,
  useHook: useArrow,
});
