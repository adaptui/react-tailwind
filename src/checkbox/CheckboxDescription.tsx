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

export const useCheckboxDescription = createHook<CheckboxDescriptionOptions>(
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
      theme.description.common,
      size ? theme.description.size[size] : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const CheckboxDescription = createComponent<CheckboxDescriptionOptions>(
  props => {
    const htmlProps = useCheckboxDescription(props);

    return createElement("div", htmlProps);
  },
);

export type CheckboxDescriptionOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<CheckboxUIProps> & {};

export type CheckboxDescriptionProps<T extends As = "div"> = Props<
  CheckboxDescriptionOptions<T>
>;
