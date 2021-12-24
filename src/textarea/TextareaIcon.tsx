import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { TEXTAREA_ICON_KEYS } from "./__keys";
import { TextareaStateReturn } from "./TextareaState";

export type TextareaIconOptions = BoxOptions &
  Pick<TextareaStateReturn, "size" | "variant" | "invalid"> & {};

export type TextareaIconHTMLProps = BoxHTMLProps;

export type TextareaIconProps = TextareaIconOptions & TextareaIconHTMLProps;

export const useTextareaIcon = createHook<
  TextareaIconOptions,
  TextareaIconHTMLProps
>({
  name: "TextareaIcon",
  compose: useBox,
  keys: TEXTAREA_ICON_KEYS,

  useProps(options, htmlProps) {
    const { size, variant, invalid } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("input");
    const className = cx(
      theme.prefix.common,
      theme.prefix.size[size],
      theme.prefix.variant[variant].common,
      invalid ? "" : theme.prefix.variant[variant].interactions,
      invalid ? theme.prefix.variant[variant].invalid : "",
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const TextareaIcon = createComponent({
  as: "div",
  memo: true,
  useHook: useTextareaIcon,
});
