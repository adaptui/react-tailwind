import { createComponent, createHook } from "reakit-system";
import { InputHTMLProps, InputOptions, useInput } from "reakit";
import { ariaAttr } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { cx } from "../utils";

import { INPUT_BASE_KEYS } from "./__keys";
import { InputStateReturn } from "./InputState";

export type InputBaseOptions = InputOptions &
  Pick<
    InputStateReturn,
    "size" | "variant" | "prefix" | "suffix" | "invalid"
  > & {};

export type InputBaseHTMLProps = Omit<InputHTMLProps, "size" | "prefix">;

export type InputBaseProps = InputBaseOptions & InputBaseHTMLProps;

export const useInputBase = createHook<InputBaseOptions, InputBaseHTMLProps>({
  name: "InputBase",
  compose: useInput,
  keys: INPUT_BASE_KEYS,

  useProps(options, htmlProps) {
    const { size, variant, prefix, suffix, invalid, disabled } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("input");
    const className = cx(
      theme.base.common,
      theme.base.size[size].common,
      !prefix || !suffix ? theme.base.size[size].withoutAddon : "",
      theme.base.variant[variant].common,
      disabled || invalid ? "" : theme.base.variant[variant].interactions,
      disabled ? theme.base.variant[variant].disabled : "",
      invalid ? theme.base.variant[variant].invalid : "",
      htmlClassName,
    );

    return {
      className,
      disabled,
      "aria-invalid": ariaAttr(invalid),
      ...restHtmlProps,
    };
  },
});

export const InputBase = createComponent({
  as: "input",
  memo: true,
  useHook: useInputBase,
});
