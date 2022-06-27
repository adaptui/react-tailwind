import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";
import { SliderTrackOptions, useSliderTrack } from "@adaptui/react";

import { BoxProps } from "../box";
import { useTheme } from "../theme";
import { tcm } from "../utils";

import { SliderUIProps } from "./SliderProps";

export const useSliderTrackWrapper = createHook<SliderTrackWrapperOptions>(
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
    const className = tcm(theme.trackWrapper, props.className);

    props = { ...props, className };
    props = useSliderTrack({ state, ...props });

    return props;
  },
);

export const SliderTrackWrapper = createComponent<SliderTrackWrapperOptions>(
  props => {
    const htmlProps = useSliderTrackWrapper(props);

    return createElement("div", htmlProps);
  },
);

export type SliderTrackWrapperOptions<T extends As = "div"> = BoxProps<T> &
  SliderTrackOptions<T> &
  Partial<SliderUIProps> & {};

export type SliderTrackWrapperProps<T extends As = "div"> = Props<
  SliderTrackWrapperOptions<T>
>;
