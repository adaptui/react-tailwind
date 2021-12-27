import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { INPUT_SUFFIX_KEYS } from "./__keys";
import { InputProps } from "./Input";
import { InputStateReturn } from "./InputState";

export type InputSuffixOptions = BoxOptions &
  Pick<InputStateReturn, "size" | "variant" | "invalid"> & {
    disabled: InputProps["disabled"];
  };

export type InputSuffixHTMLProps = BoxHTMLProps;

export type InputSuffixProps = InputSuffixOptions & InputSuffixHTMLProps;

export const useInputSuffix = createHook<
  InputSuffixOptions,
  InputSuffixHTMLProps
>({
  name: "InputSuffix",
  compose: useBox,
  keys: INPUT_SUFFIX_KEYS,

  useProps(options, htmlProps) {
    const { size, variant, disabled, invalid } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("input");
    const className = cx(
      theme.suffix.common,
      theme.suffix.size[size],
      theme.suffix.variant[variant].common,
      disabled || invalid ? "" : theme.suffix.variant[variant].interactions,
      disabled ? theme.suffix.variant[variant].disabled : "",
      invalid ? theme.suffix.variant[variant].invalid : "",
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
