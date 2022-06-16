import { cx } from "ariakit-utils";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";

import { CheckboxInputOptions } from "./CheckboxInput";
import { CheckboxUIProps } from "./CheckboxProps";

export const useCheckboxText = createHook<CheckboxTextOptions>(
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
      theme.text,
      size ? theme.size[size].text : "",
      themeColor
        ? !disabled
          ? cx(
              theme.themeColor[themeColor].default.text,
              theme.themeColor[themeColor].hover.text,
              theme.themeColor[themeColor].active.text,
              theme.themeColor[themeColor].focus.text,
            )
          : theme.themeColor[themeColor].disabled.text
        : "",
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
  Pick<CheckboxInputOptions, "disabled"> &
  Partial<CheckboxUIProps> & {};

export type CheckboxTextProps<T extends As = "div"> = Props<
  CheckboxTextOptions<T>
>;
