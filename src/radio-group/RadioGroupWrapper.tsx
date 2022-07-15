import { RadioGroupOptions, useRadioGroup } from "ariakit";
import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { RadioGroupUIProps } from "./RadioGroupProps";

export const useRadioGroupWrapper = createHook<RadioGroupWrapperOptions>(
  ({ state, size, themeColor, stack, maxVisibleItems, prefix, ...props }) => {
    const theme = useTheme("radioGroup");
    const className = cx(
      stack ? theme[stack] : "",
      stack && size ? theme.size[size]?.[stack] : "",
      props.className,
    );

    props = { ...props, className };
    props = useRadioGroup({ state, ...props });
    props = useBox(props);

    return props;
  },
);

export const RadioGroupWrapper = createComponent<RadioGroupWrapperOptions>(
  props => {
    const htmlProps = useRadioGroupWrapper(props);

    return createElement("div", htmlProps);
  },
  "RadioGroupWrapper",
);

export type RadioGroupWrapperOptions<T extends As = "div"> = BoxOptions<T> &
  RadioGroupOptions<T> &
  Partial<RadioGroupUIProps> & {};

export type RadioGroupWrapperProps<T extends As = "div"> = Props<
  RadioGroupWrapperOptions<T>
>;
