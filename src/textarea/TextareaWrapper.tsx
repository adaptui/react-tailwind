import { createHook } from "reakit-system";
import { createComponent } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { TEXTAREA_WRAPPER_KEYS } from "./__keys";

export type TextareaWrapperOptions = BoxOptions & {};

export type TextareaWrapperHTMLProps = BoxHTMLProps;

export type TextareaWrapperProps = TextareaWrapperOptions &
  TextareaWrapperHTMLProps;

export const useTextareaWrapper = createHook<
  TextareaWrapperOptions,
  TextareaWrapperHTMLProps
>({
  name: "TextareaWrapper",
  compose: useBox,
  keys: TEXTAREA_WRAPPER_KEYS,

  useProps(options, htmlProps) {
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("textarea");
    const className = cx(theme.wrapper, htmlClassName);

    return { className, ...restHtmlProps };
  },
});

export const TextareaWrapper = createComponent({
  as: "div",
  memo: true,
  useHook: useTextareaWrapper,
});
