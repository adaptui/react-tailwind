import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";
import { SliderOptions, useSlider } from "@adaptui/react";

import { BoxOptions } from "../box";
import { useTheme } from "../theme";
import { createComponent, tcm } from "../utils";

import { SliderUIProps } from "./SliderProps";

export const useSliderWrapper = createHook<SliderWrapperOptions>(
  ({
    state,
    range,
    size,
    themeColor,
    knobIcon,
    tooltip,
    isDisabled,
    ...props
  }) => {
    const theme = useTheme("slider");
    const className = tcm(
      theme.wrapper.default,
      isDisabled ? theme.wrapper.disabled : " ",
      props.className,
    );

    props = { ...props, className };
    props = useSlider({ state, ...props });

    return props;
  },
);

export const SliderWrapper = createComponent<SliderWrapperOptions>(props => {
  const htmlProps = useSliderWrapper(props);

  return createElement("div", htmlProps);
}, "SliderWrapper");

export type SliderWrapperOptions<T extends As = "div"> = BoxOptions<T> &
  SliderOptions<T> &
  Partial<SliderUIProps> & {};

export type SliderWrapperProps<T extends As = "div"> = Props<
  SliderWrapperOptions<T>
>;
