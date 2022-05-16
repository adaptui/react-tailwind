import { CheckboxState } from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import {
  CheckboxBasicProps,
  CheckboxUiState,
} from "./stories/CheckboxBasic.component";

export const useCheckboxIcon = createHook<CheckboxIconOptions>(
  ({
    state,
    isChecked,
    isIndeterminate,
    isUnchecked,
    size = "md",
    label,
    description,
    ...props
  }) => {
    const theme = useTheme("checkbox");
    const className = cx(
      theme.icon.common,
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
  Pick<CheckboxBasicProps, "size" | "label" | "description"> &
  Pick<CheckboxUiState, "isChecked" | "isIndeterminate" | "isUnchecked"> & {
    /**
     * Object returned by the `useCheckboxState` hook. If not provided, the
     * internal state will be used.
     */
    state: CheckboxState;
  };

export type CheckboxIconProps<T extends As = "span"> = Props<
  CheckboxIconOptions<T>
>;
