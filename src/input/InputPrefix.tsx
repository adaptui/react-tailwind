import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { INPUT_WRAPPER_KEYS } from "./__keys";
import { InputStateReturn } from "./InputState";

export type InputPrefixOptions = BoxOptions &
  Pick<InputStateReturn, "size" | "variant"> & {};

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
    const { size, variant } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("input");
    const className = cx(
      theme.prefix.base,
      theme.prefix.size[size],
      theme.prefix.variant[variant],
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const InputPrefix = createComponent({
  as: "div",
  memo: true,
  useHook: useInputPrefix,
});
