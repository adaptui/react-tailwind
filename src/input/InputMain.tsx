import { createComponent, createHook } from "reakit-system";
import { InputHTMLProps, InputOptions, useInput } from "reakit";

import { useTheme } from "../theme";
import { cx } from "../utils";

import { INPUT_MAIN_KEYS } from "./__keys";
import { InputStateReturn } from "./InputState";

export type InputMainOptions = InputOptions &
  Pick<InputStateReturn, "size" | "variant" | "prefix" | "suffix"> & {};

export type InputMainHTMLProps = Omit<InputHTMLProps, "size" | "prefix">;

export type InputMainProps = InputMainOptions & InputMainHTMLProps;

export const useInputMain = createHook<InputMainOptions, InputMainHTMLProps>({
  name: "InputMain",
  compose: useInput,
  keys: INPUT_MAIN_KEYS,

  useProps(options, htmlProps) {
    const { size, variant, prefix, suffix } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("input");
    const className = cx(
      theme.main.base,
      theme.main.size[size].base,
      !prefix || !suffix ? theme.main.size[size].default : "",
      theme.main.variant[variant],
      htmlClassName,
    );

    return {
      className,
      ...restHtmlProps,
    };
  },
});

export const InputMain = createComponent({
  as: "input",
  memo: true,
  useHook: useInputMain,
});
