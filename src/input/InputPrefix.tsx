import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { INPUT_PREFIX_KEYS } from "./__keys";
import { InputProps } from "./Input";
import { InputStateReturn } from "./InputState";

export type InputPrefixOptions = BoxOptions &
  Pick<InputStateReturn, "size" | "variant" | "invalid"> & {
    disabled: InputProps["disabled"];
  };

export type InputPrefixHTMLProps = BoxHTMLProps;

export type InputPrefixProps = InputPrefixOptions & InputPrefixHTMLProps;

export const useInputPrefix = createHook<
  InputPrefixOptions,
  InputPrefixHTMLProps
>({
  name: "InputPrefix",
  compose: useBox,
  keys: INPUT_PREFIX_KEYS,

  useProps(options, htmlProps) {
    const { size, variant, invalid, disabled } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("input");
    const className = cx(
      theme.prefix.common,
      theme.prefix.size[size],
      theme.prefix.variant[variant].common,
      disabled || invalid ? "" : theme.prefix.variant[variant].interactions,
      disabled ? theme.prefix.variant[variant].disabled : "",
      invalid ? theme.prefix.variant[variant].invalid : "",
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
