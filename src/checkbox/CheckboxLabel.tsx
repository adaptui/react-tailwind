import { cx } from "@renderlesskit/react";
import { createComponent, createHook } from "reakit-system";

import { useTheme } from "../theme";
import { CHECKBOX_LABEL_KEYS } from "./__keys";
import { BoxHTMLProps, BoxOptions, useBox } from "../box";

export type CheckboxLabelOptions = BoxOptions;

export type CheckboxLabelHTMLProps = BoxHTMLProps;

export type CheckboxLabelProps = CheckboxLabelOptions & CheckboxLabelHTMLProps;

export const useCheckboxLabel = createHook<
  CheckboxLabelOptions,
  CheckboxLabelHTMLProps
>({
  name: "CheckboxLabel",
  compose: useBox,
  keys: CHECKBOX_LABEL_KEYS,

  useProps(options, htmlProps) {
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("checkbox");
    const className = cx(theme.label, htmlClassName);

    return { className, ...restHtmlProps };
  },
});

export const CheckboxLabel = createComponent({
  as: "label",
  memo: true,
  useHook: useCheckboxLabel,
});
