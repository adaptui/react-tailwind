import { cx } from "@renderlesskit/react";
import { createComponent, createHook } from "reakit-system";

import { useTheme } from "../theme";
import { withIconA11y } from "../utils";
import { CheckboxProps } from "./Checkbox";
import { CHECKBOX_ICON_KEYS } from "./__keys";
import { CheckboxStateReturn } from "./CheckboxState";
import { IndeterminateIcon, CheckIcon } from "../icons";
import { BoxHTMLProps, BoxOptions, useBox } from "../box";

export type CheckboxIconOptions = BoxOptions &
  Pick<
    CheckboxStateReturn,
    "isChecked" | "isIndeterminate" | "isUnchecked" | "size"
  > & { label?: CheckboxProps["label"] };

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
    const { isChecked, isIndeterminate, isUnchecked, size, label } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const checkbox = useTheme("checkboxNew");
    const className = cx(
      checkbox.icon.base,
      checkbox.icon.size.base[size],
      label ? checkbox.icon.size.space[size] : "",
      isUnchecked
        ? cx(
            checkbox.icon.unChecked.default,
            checkbox.icon.unChecked.hover,
            checkbox.icon.unChecked.active,
            checkbox.icon.unChecked.focus,
            checkbox.icon.unChecked.disabled,
          )
        : "",
      isChecked
        ? cx(
            checkbox.icon.checked.default,
            checkbox.icon.checked.hover,
            checkbox.icon.checked.active,
            checkbox.icon.checked.focus,
            checkbox.icon.checked.disabled,
          )
        : "",
      isIndeterminate
        ? cx(
            checkbox.icon.checked.default,
            checkbox.icon.indeterminate.hover,
            checkbox.icon.indeterminate.active,
            checkbox.icon.indeterminate.focus,
            checkbox.icon.indeterminate.disabled,
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

export const CheckboxDefaultIcon = (props: CheckboxStateReturn) => {
  const { isChecked, isIndeterminate } = props;

  return (
    <>
      {isChecked ? withIconA11y(<CheckIcon />) : null}
      {isIndeterminate ? withIconA11y(<IndeterminateIcon />) : null}
    </>
  );
};
