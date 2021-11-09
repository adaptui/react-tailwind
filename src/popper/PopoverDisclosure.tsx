import { createComponent, createHook } from "reakit-system";
import { useForkRef } from "reakit-utils";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";

import { POPOVER_DISCLOSURE_KEYS } from "./__keys";
import { PopoverStateReturn } from "./PopoverState";

export type PopoverDisclosureOptions = BoxOptions &
  Pick<PopoverStateReturn, "setAnchor">;

export type PopoverDisclosureHTMLProps = BoxHTMLProps;

export type PopoverDisclosureProps = PopoverDisclosureOptions &
  PopoverDisclosureHTMLProps;

export const usePopoverDisclosure = createHook<
  PopoverDisclosureOptions,
  PopoverDisclosureHTMLProps
>({
  name: "PopoverDisclosure",
  compose: useBox,
  keys: POPOVER_DISCLOSURE_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    const { setAnchor } = options;
    const { ref: htmlRef, ...restHtmlProps } = htmlProps;

    return {
      ref: useForkRef(setAnchor, htmlRef),
      ...restHtmlProps,
    };
  },
});

export const PopoverDisclosure = createComponent({
  as: "button",
  memo: true,
  useHook: usePopoverDisclosure,
});
