import { createComponent, createHook } from "reakit-system";
import { InputHTMLProps, InputOptions, useInput } from "reakit";

import { useTheme } from "../theme";
import { cx } from "../utils";

import { INPUT_WRAPPER_KEYS } from "./__keys";

export type InputMainOptions = InputOptions & {};

export type InputMainHTMLProps = InputHTMLProps;

export type InputMainProps = InputMainOptions & InputMainHTMLProps;

export const useInputMain = createHook<InputMainOptions, InputMainHTMLProps>({
  name: "InputMain",
  compose: useInput,
  keys: INPUT_WRAPPER_KEYS,

  useProps(options, htmlProps) {
    const {} = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("input");
    const className = cx(theme.main, htmlClassName);

    return { className, ...restHtmlProps };
  },
});

export const InputMain = createComponent({
  as: "input",
  memo: true,
  useHook: useInputMain,
});
