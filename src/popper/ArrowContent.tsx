import { createComponent, createHook } from "reakit-system";
import { useForkRef } from "reakit-utils";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";

import { POPOVER_DISCLOSURE_KEYS } from "./__keys";
import { PopoverStateReturn } from "./PopoverState";

export type ArrowContentOptions = BoxOptions &
  Pick<PopoverStateReturn, "setArrow">;

export type ArrowContentHTMLProps = BoxHTMLProps;

export type ArrowContentProps = ArrowContentOptions & ArrowContentHTMLProps;

export const useArrowContent = createHook<
  ArrowContentOptions,
  ArrowContentHTMLProps
>({
  name: "ArrowContent",
  compose: useBox,
  keys: POPOVER_DISCLOSURE_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    const { setArrow } = options;
    const { ref: htmlRef, ...restHtmlProps } = htmlProps;

    return {
      ref: useForkRef(setArrow, htmlRef),
      ...restHtmlProps,
    };
  },
});

export const ArrowContent = createComponent({
  as: "div",
  memo: true,
  useHook: useArrowContent,
});
