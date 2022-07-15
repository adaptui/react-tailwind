import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { CheckboxInputOptions } from "./CheckboxInput";
import { CheckboxUIProps } from "./CheckboxProps";

export const useCheckboxIcon = createHook<CheckboxIconOptions>(
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
    stack,
    maxVisibleItems,
    disabled,
    ...props
  }) => {
    const theme = useTheme("checkbox");
    const className = cx(
      theme.icon,
      size ? theme.size[size]?.icon : "",
      themeColor && isUnchecked === true
        ? !disabled
          ? cx(
              theme.themeColor[themeColor]?.default?.icon?.unChecked,
              theme.themeColor[themeColor]?.hover?.icon?.unChecked,
              theme.themeColor[themeColor]?.active?.icon?.unChecked,
              theme.themeColor[themeColor]?.focus?.icon?.unChecked,
            )
          : theme.themeColor[themeColor]?.disabled?.icon?.unChecked
        : "",
      themeColor && isChecked === true
        ? !disabled
          ? cx(
              theme.themeColor[themeColor]?.default?.icon?.checked,
              theme.themeColor[themeColor]?.hover?.icon?.checked,
              theme.themeColor[themeColor]?.active?.icon?.checked,
              theme.themeColor[themeColor]?.focus?.icon?.checked,
            )
          : theme.themeColor[themeColor]?.disabled?.icon?.checked
        : "",
      themeColor && isIndeterminate === true
        ? !disabled
          ? cx(
              theme.themeColor[themeColor]?.default?.icon?.indeterminate,
              theme.themeColor[themeColor]?.hover?.icon?.indeterminate,
              theme.themeColor[themeColor]?.active?.icon?.indeterminate,
              !label || description
                ? theme.themeColor[themeColor]?.focus?.icon?.indeterminate
                : "",
            )
          : theme.themeColor[themeColor]?.disabled?.icon?.indeterminate
        : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const CheckboxIcon = createComponent<CheckboxIconOptions>(props => {
  const htmlProps = useCheckboxIcon(props);

  return createElement("span", htmlProps);
}, "CheckboxIcon");

export type CheckboxIconOptions<T extends As = "span"> = BoxOptions<T> &
  Partial<CheckboxUIProps> &
  Pick<CheckboxInputOptions, "disabled"> & {};

export type CheckboxIconProps<T extends As = "span"> = Props<
  CheckboxIconOptions<T>
>;
