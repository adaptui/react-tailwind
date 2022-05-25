import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { CheckboxUIProps } from "./CheckboxProps";

export const useCheckboxIcon = createHook<CheckboxIconOptions>(
  ({
    state,
    size,
    isChecked,
    isIndeterminate,
    isUnchecked,
    icon,
    label,
    description,
    stack,
    maxVisibleItems,
    ...props
  }) => {
    const theme = useTheme("checkbox");
    const className = cx(
      theme.icon.common,
      size ? theme.icon.size[size] : "",
      isUnchecked === true
        ? cx(
            theme.icon.unChecked.default,
            theme.icon.unChecked.hover,
            theme.icon.unChecked.active,
            theme.icon.unChecked.focus,
            theme.icon.unChecked.disabled,
          )
        : "",
      isChecked === true
        ? cx(
            theme.icon.checked.default,
            theme.icon.checked.hover,
            theme.icon.checked.active,
            theme.icon.checked.focus,
            theme.icon.checked.disabled,
          )
        : "",
      isIndeterminate === true
        ? cx(
            theme.icon.checked.default,
            theme.icon.indeterminate.hover,
            theme.icon.indeterminate.active,
            !label || description ? theme.icon.indeterminate.focus : "",
            theme.icon.indeterminate.disabled,
          )
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
});

export type CheckboxIconOptions<T extends As = "span"> = BoxOptions<T> &
  Partial<CheckboxUIProps> & {};

export type CheckboxIconProps<T extends As = "span"> = Props<
  CheckboxIconOptions<T>
>;
