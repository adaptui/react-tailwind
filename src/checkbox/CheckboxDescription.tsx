import { createComponent, createHook } from "reakit-system";
import { RoleHTMLProps, RoleOptions, useRole } from "reakit";

import { tcm } from "../utils";
import { useTheme } from "../theme";
import { CHECKBOX_DESCRIPTION_KEYS } from "./__keys";
import { CheckboxStateReturn } from "./CheckboxState";

export type CheckboxDescriptionOptions = RoleOptions &
  Pick<CheckboxStateReturn, "size">;

export type CheckboxDescriptionHTMLProps = RoleHTMLProps;

export type CheckboxDescriptionProps = CheckboxDescriptionOptions &
  CheckboxDescriptionHTMLProps;

export const useCheckboxDescription = createHook<
  CheckboxDescriptionOptions,
  CheckboxDescriptionHTMLProps
>({
  name: "CheckboxDescription",
  compose: useRole,
  keys: CHECKBOX_DESCRIPTION_KEYS,

  useProps(options, htmlProps) {
    const { size } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("checkbox");
    const className = tcm(
      theme.description.base,
      theme.description.size[size],
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const CheckboxDescription = createComponent({
  as: "div",
  memo: true,
  useHook: useCheckboxDescription,
});
