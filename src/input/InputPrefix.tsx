import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { INPUT_WRAPPER_KEYS } from "./__keys";

export type InputPrefixOptions = BoxOptions & {};

export type InputPrefixHTMLProps = BoxHTMLProps;

export type InputPrefixProps = InputPrefixOptions & InputPrefixHTMLProps;

export const useInputPrefix = createHook<
  InputPrefixOptions,
  InputPrefixHTMLProps
>({
  name: "InputPrefix",
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

export const InputPrefix = createComponent({
  as: "div",
  memo: true,
  useHook: useInputPrefix,
});
