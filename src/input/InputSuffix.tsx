import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { INPUT_WRAPPER_KEYS } from "./__keys";
import { InputStateReturn } from "./InputState";

export type InputSuffixOptions = BoxOptions &
  Pick<InputStateReturn, "size" | "variant"> & {};

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
    const { size, variant } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("input");
    const className = cx(
      theme.suffix.base,
      theme.suffix.size[size],
      theme.suffix.variant[variant],
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const InputSuffix = createComponent({
  as: "div",
  memo: true,
  useHook: useInputSuffix,
});
