import { tcm } from "../utils";
import { createComponent, createHook } from "reakit-system";
import { RoleHTMLProps, RoleOptions, useRole } from "reakit";

import { useTheme } from "../theme";
import { CHECKBOX_TEXT_KEYS } from "./__keys";
import { CheckboxStateReturn } from "./CheckboxState";

export type CheckboxTextOptions = RoleOptions &
  Pick<CheckboxStateReturn, "size">;

export type CheckboxTextHTMLProps = RoleHTMLProps;

export type CheckboxTextProps = CheckboxTextOptions & CheckboxTextHTMLProps;

export const useCheckboxText = createHook<
  CheckboxTextOptions,
  CheckboxTextHTMLProps
>({
  name: "CheckboxText",
  compose: useRole,
  keys: CHECKBOX_TEXT_KEYS,

  useProps(options, htmlProps) {
    const { size } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("checkbox");
    const className = tcm(
      theme.text.base,
      theme.text.size[size],
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const CheckboxText = createComponent({
  as: "div",
  memo: true,
  useHook: useCheckboxText,
});
