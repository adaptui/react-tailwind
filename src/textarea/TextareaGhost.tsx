import { createHook } from "reakit-system";
import { TabbableHTMLProps, TabbableOptions, useTabbable } from "reakit";
import { useForkRef } from "reakit-utils";
import { ariaAttr, createComponent } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { tcm } from "../utils";

import { TEXTAREA_GHOST_KEYS } from "./__keys";
import { TextareaStateReturn } from "./TextareaState";

export type TextareaGhostOptions = TabbableOptions &
  Pick<
    TextareaStateReturn,
    "size" | "variant" | "icon" | "invalid" | "resize" | "ghostRef"
  > & {};

export type TextareaGhostHTMLProps = Omit<TabbableHTMLProps, "size" | "prefix">;

export type TextareaGhostProps = TextareaGhostOptions & TextareaGhostHTMLProps;

export const useTextareaGhost = createHook<
  TextareaGhostOptions,
  TextareaGhostHTMLProps
>({
  name: "TextareaGhost",
  compose: useTabbable,
  keys: TEXTAREA_GHOST_KEYS,

  useProps(options, htmlProps) {
    const { size, variant, invalid, disabled, resize, ghostRef } = options;
    const {
      className: htmlClassName,
      ref: htmlRef,
      ...restHtmlProps
    } = htmlProps;

    const theme = useTheme("textarea");
    const className = tcm(
      theme.base.common,
      theme.base.size[size],
      theme.base.variant[variant].common,
      disabled || invalid ? "" : theme.base.variant[variant].interactions,
      disabled ? theme.base.variant[variant].disabled : "",
      invalid ? theme.base.variant[variant].invalid : "",
      theme.base.resize[resize],
      theme.ghost,
      htmlClassName,
    );

    return {
      ref: useForkRef(ghostRef, htmlRef),
      className,
      disabled,
      "aria-invalid": ariaAttr(invalid),
      ...restHtmlProps,
    };
  },
});

export const TextareaGhost = createComponent({
  as: "textarea",
  memo: true,
  useHook: useTextareaGhost,
});
