import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { CheckboxInputOptions } from "./CheckboxInput";
import { CheckboxUIProps } from "./CheckboxProps";

export const useCheckboxDescription = createHook<CheckboxDescriptionOptions>(
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
      theme.description,
      size ? theme.size[size]?.description : "",
      themeColor
        ? !disabled
          ? cx(
              theme.themeColor[themeColor]?.default?.description,
              theme.themeColor[themeColor]?.hover?.description,
              theme.themeColor[themeColor]?.active?.description,
              theme.themeColor[themeColor]?.focus?.description,
            )
          : theme.themeColor[themeColor]?.disabled?.description
        : "",
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
  "CheckboxDescription",
);

export type CheckboxDescriptionOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<CheckboxUIProps> &
  Pick<CheckboxInputOptions, "disabled"> & {};

export type CheckboxDescriptionProps<T extends As = "div"> = Props<
  CheckboxDescriptionOptions<T>
>;
