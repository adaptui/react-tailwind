import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { INPUT_WRAPPER_KEYS } from "./__keys";

export type InputSuffixOptions = BoxOptions & {};

export type InputSuffixHTMLProps = BoxHTMLProps;

export type InputSuffixProps = InputSuffixOptions & InputSuffixHTMLProps;

export const useInputSuffix = createHook<
  InputSuffixOptions,
  InputSuffixHTMLProps
>({
  name: "InputSuffix",
  compose: useBox,
  keys: INPUT_WRAPPER_KEYS,

  useProps(options, htmlProps) {
    const {} = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("input");
    const className = cx(htmlClassName);

    return { className, ...restHtmlProps };
  },
});

export const InputSuffix = createComponent({
  as: "div",
  memo: true,
  useHook: useInputSuffix,
});
