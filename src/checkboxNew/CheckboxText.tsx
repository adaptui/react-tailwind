import { cx } from "@renderlesskit/react";
import { BoxHTMLProps, BoxOptions, useBox } from "reakit";
import { createComponent, createHook } from "reakit-system";

import { useTheme } from "../theme";
import { CHECKBOX_TEXT_KEYS } from "./__keys";
import { CheckboxStateReturn } from "./CheckboxState";

export type CheckboxTextOptions = BoxOptions &
  Pick<CheckboxStateReturn, "size">;

export type CheckboxTextHTMLProps = BoxHTMLProps;

export type CheckboxTextProps = CheckboxTextOptions & CheckboxTextHTMLProps;

export const useCheckboxText = createHook<
  CheckboxTextOptions,
  CheckboxTextHTMLProps
>({
  name: "CheckboxText",
  compose: useBox,
  keys: CHECKBOX_TEXT_KEYS,

  useProps(options, htmlProps) {
    const { size } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("checkboxNew");
    const className = cx(theme.text.base, theme.text.size[size], htmlClassName);

    return { className, ...restHtmlProps };
  },
});

export const CheckboxText = createComponent({
  as: "div",
  memo: true,
  useHook: useCheckboxText,
});
