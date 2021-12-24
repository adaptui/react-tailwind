import { createComponent, createHook } from "reakit-system";
import { TabbableHTMLProps, TabbableOptions, useTabbable } from "reakit";
import { ariaAttr } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { tcm } from "../utils";

import { TEXTAREA_BASE_KEYS } from "./__keys";
import { TextareaStateReturn } from "./TextareaState";

export type TextareaBaseOptions = TabbableOptions &
  Pick<
    TextareaStateReturn,
    "size" | "variant" | "icon" | "invalid" | "resize"
  > & {};

export type TextareaBaseHTMLProps = Omit<TabbableHTMLProps, "size" | "prefix">;

export type TextareaBaseProps = TextareaBaseOptions & TextareaBaseHTMLProps;

export const useTextareaBase = createHook<
  TextareaBaseOptions,
  TextareaBaseHTMLProps
>({
  name: "TextareaBase",
  compose: useTabbable,
  keys: TEXTAREA_BASE_KEYS,

  useProps(options, htmlProps) {
    const { size, variant, invalid, disabled, resize } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("textarea");
    const className = tcm(
      theme.base.common,
      theme.base.size[size],
      theme.base.variant[variant].common,
      disabled || invalid ? "" : theme.base.variant[variant].interactions,
      disabled ? theme.base.variant[variant].disabled : "",
      invalid ? theme.base.variant[variant].invalid : "",
      theme.base.resize[resize],
      htmlClassName,
    );

    return {
      className,
      disabled,
      "aria-invalid": ariaAttr(invalid),
      ...restHtmlProps,
    };
  },
});

export const TextareaBase = createComponent({
  as: "textarea",
  memo: true,
  useHook: useTextareaBase,
});
