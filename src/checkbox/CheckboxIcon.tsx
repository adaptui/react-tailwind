import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { CHECKBOX_ICON_KEYS } from "./__keys";
import { CheckboxProps } from "./Checkbox";
import { CheckboxStateReturn } from "./CheckboxState";

export type CheckboxIconOptions = BoxOptions &
  Pick<
    CheckboxStateReturn,
    "isChecked" | "isIndeterminate" | "isUnchecked" | "size"
  > & {
    description?: CheckboxProps["description"];
  };

export type CheckboxIconHTMLProps = BoxHTMLProps;

export type CheckboxIconProps = CheckboxIconOptions & CheckboxIconHTMLProps;

export const useCheckboxIcon = createHook<
  CheckboxIconOptions,
  CheckboxIconHTMLProps
>({
  name: "CheckboxIcon",
  compose: useBox,
  keys: CHECKBOX_ICON_KEYS,

  useProps(options, htmlProps) {
    const { isChecked, isIndeterminate, isUnchecked, size, description } =
      options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("checkbox");
    const className = cx(
      theme.icon.base,
      description ? theme.icon.description : "",
      theme.icon.size[size],
      isUnchecked
        ? cx(
            theme.icon.unChecked.default,
            theme.icon.unChecked.hover,
            theme.icon.unChecked.active,
            theme.icon.unChecked.focus,
            theme.icon.unChecked.disabled,
          )
        : "",
      isChecked
        ? cx(
            theme.icon.checked.default,
            theme.icon.checked.hover,
            theme.icon.checked.active,
            theme.icon.checked.focus,
            theme.icon.checked.disabled,
          )
        : "",
      isIndeterminate
        ? cx(
            theme.icon.checked.default,
            theme.icon.indeterminate.hover,
            theme.icon.indeterminate.active,
            theme.icon.indeterminate.focus,
            theme.icon.indeterminate.disabled,
          )
        : "",
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const CheckboxIcon = createComponent({
  as: "span",
  memo: true,
  useHook: useCheckboxIcon,
});
