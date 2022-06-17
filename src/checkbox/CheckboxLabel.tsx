import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { CheckboxInputOptions } from "./CheckboxInput";
import { CheckboxUIProps } from "./CheckboxProps";

export const useCheckboxLabel = createHook<CheckboxLabelOptions>(
  ({
    state,
    size,
    themeColor,
    isChecked,
    isIndeterminate,
    isUnchecked,
    icon,
    label,
    description,
    disabled,
    stack,
    maxVisibleItems,
    ...props
  }) => {
    const theme = useTheme("checkbox");
    const className = cx(
      theme.label.base,
      disabled ? theme.label.disabled : "",
      label && !description && size ? theme.size[size].label : "",
      label && !description && themeColor
        ? !disabled
          ? cx(
              theme.themeColor[themeColor].default.label,
              theme.themeColor[themeColor].hover.label,
              theme.themeColor[themeColor].active.label,
              theme.themeColor[themeColor].focus.label,
            )
          : theme.themeColor[themeColor].disabled.label
        : "",
      stack && maxVisibleItems != null ? theme.label.showMore[stack] : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const CheckboxLabel = createComponent<CheckboxLabelOptions>(props => {
  const htmlProps = useCheckboxLabel(props);

  return createElement("label", htmlProps);
});

export type CheckboxLabelOptions<T extends As = "label"> = BoxOptions<T> &
  Pick<CheckboxInputOptions, "disabled"> &
  Partial<CheckboxUIProps> & {};

export type CheckboxLabelProps<T extends As = "label"> = Props<
  CheckboxLabelOptions<T>
>;
