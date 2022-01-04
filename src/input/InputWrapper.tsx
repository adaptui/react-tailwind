import { createHook } from "reakit-system";
import { createComponent } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { INPUT_WRAPPER_KEYS } from "./__keys";

export type InputWrapperOptions = BoxOptions & {};

export type InputWrapperHTMLProps = BoxHTMLProps;

export type InputWrapperProps = InputWrapperOptions & InputWrapperHTMLProps;

export const useInputWrapper = createHook<
  InputWrapperOptions,
  InputWrapperHTMLProps
>({
  name: "InputWrapper",
  compose: useBox,
  keys: INPUT_WRAPPER_KEYS,

  useProps(options, htmlProps) {
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("input");
    const className = cx(theme.wrapper, htmlClassName);

    return { className, ...restHtmlProps };
  },
});

export const InputWrapper = createComponent({
  as: "div",
  memo: true,
  useHook: useInputWrapper,
});
