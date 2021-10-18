import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { CHECKBOX_LABEL_KEYS } from "./__keys";
import { CheckboxProps } from "./Checkbox";
import { CheckboxStateReturn } from "./CheckboxState";

export type CheckboxLabelOptions = BoxOptions &
  Pick<CheckboxStateReturn, "size" | "maxVisibleItems" | "stack"> & {
    description?: CheckboxProps["description"];
    disabled?: CheckboxProps["disabled"];
  };

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
    const { size, disabled, description, maxVisibleItems, stack } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("checkbox");
    const className = cx(
      theme.label.base,
      !description ? theme.label.size[size] : "",
      !description ? (disabled ? "" : theme.label.only) : "",
      disabled ? theme.label.disabled : "",
      maxVisibleItems != null ? theme.label.showMore[stack] : "",
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const CheckboxLabel = createComponent({
  as: "label",
  memo: true,
  useHook: useCheckboxLabel,
});
