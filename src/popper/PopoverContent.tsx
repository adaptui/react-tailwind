import { createComponent, createHook } from "reakit-system";
import { useForkRef } from "reakit-utils";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";

import { POPOVER_DISCLOSURE_KEYS } from "./__keys";
import { PopoverStateReturn } from "./PopoverState";

export type PopoverContentOptions = BoxOptions &
  Pick<PopoverStateReturn, "setPopper">;

export type PopoverContentHTMLProps = BoxHTMLProps;

export type PopoverContentProps = PopoverContentOptions &
  PopoverContentHTMLProps;

export const usePopoverContent = createHook<
  PopoverContentOptions,
  PopoverContentHTMLProps
>({
  name: "PopoverContent",
  compose: useBox,
  keys: POPOVER_DISCLOSURE_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    const { setPopper } = options;
    const { ref: htmlRef, ...restHtmlProps } = htmlProps;

    return {
      ref: useForkRef(setPopper, htmlRef),
      ...restHtmlProps,
    };
  },
});

export const PopoverContent = createComponent({
  as: "button",
  memo: true,
  useHook: usePopoverContent,
});
