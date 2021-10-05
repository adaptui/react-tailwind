import { createComponent, createHook } from "reakit-system";

import { CloseIcon } from "../icons";

import { CLOSE_BUTTON_KEYS } from "./__keys";
import { ButtonHTMLProps, ButtonOptions, useButton } from "./Button";

export type CloseButtonOptions = ButtonOptions;

export type CloseButtonHTMLProps = ButtonHTMLProps;

export type CloseButtonProps = CloseButtonOptions & CloseButtonHTMLProps;

export const useCloseButton = createHook<
  CloseButtonOptions,
  CloseButtonHTMLProps
>({
  name: "CloseButton",
  compose: useButton,
  keys: CLOSE_BUTTON_KEYS,

  useOptions(options, htmlProps) {
    const { children } = htmlProps;
    const { iconOnly = children || <CloseIcon />, ...restOptions } = options;
    return { iconOnly, ...restOptions };
  },

  useProps(options, htmlProps) {
    return { "aria-label": "close", ...htmlProps };
  },
});

export const CloseButton = createComponent({
  as: "button",
  memo: true,
  useHook: useCloseButton,
});
