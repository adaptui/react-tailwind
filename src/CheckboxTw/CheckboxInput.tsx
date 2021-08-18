import {
  useCheckbox,
  CheckboxOptions,
  CheckboxHTMLProps,
} from "../checkboxReakit";
import { cx } from "@renderlesskit/react";
import { createComponent, createHook } from "reakit-system";

import { useTheme } from "../theme";
import { CHECKBOX_INPUT_KEYS } from "./__keys";

export type CheckboxInputOptions = CheckboxOptions;

export type CheckboxInputHTMLProps = CheckboxHTMLProps;

export type CheckboxInputProps = CheckboxInputOptions & CheckboxInputHTMLProps;

export const useCheckboxInput = createHook<
  CheckboxInputOptions,
  CheckboxInputHTMLProps
>({
  name: "CheckboxInput",
  compose: useCheckbox,
  keys: CHECKBOX_INPUT_KEYS,

  useProps(options, htmlProps) {
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("checkboxNew");
    const className = cx(theme.input, htmlClassName);

    return { className, ...restHtmlProps };
  },
});

export const CheckboxInput = createComponent({
  as: "input",
  memo: true,
  useHook: useCheckboxInput,
});
