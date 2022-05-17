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

export const useCheckboxText = createHook<CheckboxTextOptions>(
  ({
    state,
    size,
    isChecked,
    isIndeterminate,
    isUnchecked,
    icon,
    label,
    description,
    ...props
  }) => {
    const theme = useTheme("checkbox");
    const className = cx(
      theme.text.common,
      size ? theme.text.size[size] : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const CheckboxText = createComponent<CheckboxTextOptions>(props => {
  const htmlProps = useCheckboxText(props);

  return createElement("div", htmlProps);
});

export type CheckboxTextOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<CheckboxUIProps> & {};

export type CheckboxTextProps<T extends As = "div"> = Props<
  CheckboxTextOptions<T>
>;
