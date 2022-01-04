import { createHook } from "reakit-system";
import {
  CheckboxHTMLProps,
  CheckboxOptions,
  createComponent,
  useCheckbox,
} from "@renderlesskit/react";

import { useTheme } from "../theme";
import { tcm } from "../utils";

import { SWITCH_INPUT_KEYS } from "./__keys";
import { SwitchStateReturn } from "./SwitchState";

export type SwitchInputOptions = CheckboxOptions &
  Pick<SwitchStateReturn, "size">;

export type SwitchInputHTMLProps = Omit<CheckboxHTMLProps, "size">;

export type SwitchInputProps = SwitchInputOptions & SwitchInputHTMLProps;

export const useSwitchInput = createHook<
  SwitchInputOptions,
  SwitchInputHTMLProps
>({
  name: "SwitchInput",
  compose: useCheckbox,
  keys: SWITCH_INPUT_KEYS,

  useProps(options, htmlProps) {
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("switch");
    const className = tcm(theme.input, htmlClassName);

    return { role: "switch", className, ...restHtmlProps };
  },
});

export const SwitchInput = createComponent({
  as: "input",
  memo: true,
  useHook: useSwitchInput,
});
