import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { RadioInputOptions } from "./RadioInput";
import { RadioUIProps } from "./RadioProps";

export const useRadioLabel = createHook<RadioLabelOptions>(
  ({
    state,
    size,
    themeColor,
    isChecked,
    icon,
    label,
    description,
    disabled,
    stack,
    maxVisibleItems,
    ...props
  }) => {
    const theme = useTheme("radio");
    const className = cx(
      theme.label.base,
      disabled ? theme.label.disabled : "",
      label && !description && size ? theme.size[size]?.label : "",
      label && !description && themeColor
        ? !disabled
          ? cx(
              theme.themeColor[themeColor]?.default?.label,
              theme.themeColor[themeColor]?.hover?.label,
              theme.themeColor[themeColor]?.active?.label,
              theme.themeColor[themeColor]?.focus?.label,
            )
          : theme.themeColor[themeColor]?.disabled?.label
        : "",
      stack && maxVisibleItems != null ? theme.label.showMore[stack] : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const RadioLabel = createComponent<RadioLabelOptions>(props => {
  const htmlProps = useRadioLabel(props);

  return createElement("label", htmlProps);
}, "RadioLabel");

export type RadioLabelOptions<T extends As = "label"> = BoxOptions<T> &
  Pick<RadioInputOptions, "disabled"> &
  Partial<RadioUIProps> & {};

export type RadioLabelProps<T extends As = "label"> = Props<
  RadioLabelOptions<T>
>;
