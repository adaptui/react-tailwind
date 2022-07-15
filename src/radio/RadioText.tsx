import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { RadioInputOptions } from "./RadioInput";
import { RadioUIProps } from "./RadioProps";

export const useRadioText = createHook<RadioTextOptions>(
  ({
    state,
    size,
    themeColor,
    isChecked,
    icon,
    label,
    description,
    stack,
    disabled,
    maxVisibleItems,
    ...props
  }) => {
    const theme = useTheme("radio");
    const className = cx(
      theme.text,
      size ? theme.size[size]?.text : "",
      themeColor
        ? !disabled
          ? cx(
              theme.themeColor[themeColor]?.default?.text,
              theme.themeColor[themeColor]?.hover?.text,
              theme.themeColor[themeColor]?.active?.text,
              theme.themeColor[themeColor]?.focus?.text,
            )
          : theme.themeColor[themeColor]?.disabled?.text
        : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const RadioText = createComponent<RadioTextOptions>(props => {
  const htmlProps = useRadioText(props);

  return createElement("div", htmlProps);
}, "RadioText");

export type RadioTextOptions<T extends As = "div"> = BoxOptions<T> &
  Pick<RadioInputOptions, "disabled"> &
  Partial<RadioUIProps> & {};

export type RadioTextProps<T extends As = "div"> = Props<RadioTextOptions<T>>;
