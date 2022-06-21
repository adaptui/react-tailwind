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

export const useCheckboxTextWrapper = createHook<CheckboxTextWrapperOptions>(
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
    disabled,
    maxVisibleItems,
    ...props
  }) => {
    const theme = useTheme("checkbox");
    const className = cx(
      label && !description ? theme.textWrapper : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const CheckboxTextWrapper = createComponent<CheckboxTextWrapperOptions>(
  props => {
    const htmlProps = useCheckboxTextWrapper(props);

    return createElement("div", htmlProps);
  },
);

export type CheckboxTextWrapperOptions<T extends As = "div"> = BoxOptions<T> &
  Pick<CheckboxInputOptions, "disabled"> &
  Partial<CheckboxUIProps> & {};

export type CheckboxTextWrapperProps<T extends As = "div"> = Props<
  CheckboxTextWrapperOptions<T>
>;
