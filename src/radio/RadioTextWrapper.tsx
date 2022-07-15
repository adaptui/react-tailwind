import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { RadioInputOptions } from "./RadioInput";
import { RadioUIProps } from "./RadioProps";

export const useRadioTextWrapper = createHook<RadioTextWrapperOptions>(
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
      label && !description ? theme.textWrapper : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const RadioTextWrapper = createComponent<RadioTextWrapperOptions>(
  props => {
    const htmlProps = useRadioTextWrapper(props);

    return createElement("div", htmlProps);
  },
  "RadioTextWrapper",
);

export type RadioTextWrapperOptions<T extends As = "div"> = BoxOptions<T> &
  Pick<RadioInputOptions, "disabled"> &
  Partial<RadioUIProps> & {};

export type RadioTextWrapperProps<T extends As = "div"> = Props<
  RadioTextWrapperOptions<T>
>;
