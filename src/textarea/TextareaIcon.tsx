import { createHook } from "reakit-system";
import { createComponent } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { TEXTAREA_ICON_KEYS } from "./__keys";
import { TextareaStateReturn } from "./TextareaState";

export type TextareaIconOptions = BoxOptions &
  Pick<TextareaStateReturn, "size" | "invalid" | "autoSize"> & {};

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
    const { size, invalid, autoSize } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("textarea");
    const className = cx(
      theme.icon.common,
      autoSize ? theme.icon.normal : "",
      theme.icon.size[size],
      invalid ? theme.icon.invalid : "",
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
