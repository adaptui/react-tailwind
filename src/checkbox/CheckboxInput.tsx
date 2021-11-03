import { createComponent, createHook } from "reakit-system";
import {
  CheckboxHTMLProps,
  CheckboxOptions,
  useCheckbox,
} from "@renderlesskit/react";

import { useTheme } from "../theme";
import { tcm } from "../utils";

import { CHECKBOX_INPUT_KEYS } from "./__keys";
import { CheckboxStateReturn } from "./CheckboxState";

export type CheckboxInputOptions = CheckboxOptions &
  Pick<CheckboxStateReturn, "size">;

export type CheckboxInputHTMLProps = Omit<CheckboxHTMLProps, "size">;

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

    const theme = useTheme("checkbox");
    const className = tcm(theme.input, htmlClassName);

    return { className, ...restHtmlProps };
  },
});

export const CheckboxInput = createComponent({
  as: "input",
  memo: true,
  useHook: useCheckboxInput,
});
