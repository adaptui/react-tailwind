import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { CHECKBOX_DESCRIPTION_KEYS } from "./__keys";
import { CheckboxStateReturn } from "./CheckboxState";

export type CheckboxDescriptionOptions = BoxOptions &
  Pick<CheckboxStateReturn, "size">;

export type CheckboxDescriptionHTMLProps = BoxHTMLProps;

export type CheckboxDescriptionProps = CheckboxDescriptionOptions &
  CheckboxDescriptionHTMLProps;

export const useCheckboxDescription = createHook<
  CheckboxDescriptionOptions,
  CheckboxDescriptionHTMLProps
>({
  name: "CheckboxDescription",
  compose: useBox,
  keys: CHECKBOX_DESCRIPTION_KEYS,

  useProps(options, htmlProps) {
    const { size } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("checkbox");
    const className = cx(
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
