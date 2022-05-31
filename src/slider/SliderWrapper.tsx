import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";
import { SliderOptions, useSlider } from "@adaptui/react";

import { BoxProps, useBox } from "../box";
import { useTheme } from "../theme";
import { tcm } from "../utils";

import { SliderUIProps } from "./SliderProps";

export const useSliderWrapper = createHook<SliderWrapperOptions>(
  ({ state, range, size, knobIcon, tooltip, ...props }) => {
    const theme = useTheme("slider");
    const className = tcm(theme.wrapper, props.className);

    props = { ...props, className };
    props = useSlider({ state, ...props });
    props = useBox(props);

    return props;
  },
);

export const SliderWrapper = createComponent<SliderWrapperOptions>(props => {
  const htmlProps = useSliderWrapper(props);

  return createElement("div", htmlProps);
});

export type SliderWrapperOptions<T extends As = "div"> = BoxProps<T> &
  SliderOptions<T> &
  Partial<SliderUIProps> & {};

export type SliderWrapperProps<T extends As = "div"> = Props<
  SliderWrapperOptions<T>
>;
