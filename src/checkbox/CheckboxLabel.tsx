import { createComponent, createHook } from "reakit-system";
import { RoleHTMLProps, RoleOptions, useRole } from "reakit";

import { tcm } from "../utils";
import { useTheme } from "../theme";
import { CHECKBOX_LABEL_KEYS } from "./__keys";

export type CheckboxLabelOptions = RoleOptions;

export type CheckboxLabelHTMLProps = RoleHTMLProps;

export type CheckboxLabelProps = CheckboxLabelOptions & CheckboxLabelHTMLProps;

export const useCheckboxLabel = createHook<
  CheckboxLabelOptions,
  CheckboxLabelHTMLProps
>({
  name: "CheckboxLabel",
  compose: useRole,
  keys: CHECKBOX_LABEL_KEYS,

  useProps(options, htmlProps) {
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("checkbox");
    const className = tcm(theme.label, htmlClassName);

    return { className, ...restHtmlProps };
  },
});

export const CheckboxLabel = createComponent({
  as: "label",
  memo: true,
  useHook: useCheckboxLabel,
});
