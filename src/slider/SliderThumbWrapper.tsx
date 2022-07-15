import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { SliderThumbUIProps } from "./SliderThumbProps";

export const useSliderThumbWrapper = createHook<SliderThumbWrapperOptions>(
  ({
    state,
    size,
    themeColor,
    knobIcon,
    tooltip,
    index,
    isDisabled,
    ...props
  }) => {
    const theme = useTheme("slider");
    const className = cx(theme.thumbWrapper, props.className);
    const style = {
      left:
        state && index != null && size
          ? `calc(${state.baseState.getThumbPercent(index) * 100}% - ${
              theme.size[size]?.thumbWrapper
            })`
          : undefined,
      ...props.style,
    };

    props = { ...props, className, style };
    props = useBox(props);

    return props;
  },
);

export const SliderThumbWrapper = createComponent<SliderThumbWrapperOptions>(
  props => {
    const htmlProps = useSliderThumbWrapper(props);

    return createElement("div", htmlProps);
  },
  "SliderThumbWrapper",
);

export type SliderThumbWrapperOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<SliderThumbUIProps> & {};

export type SliderThumbWrapperProps<T extends As = "div"> = Props<
  SliderThumbWrapperOptions<T>
>;
