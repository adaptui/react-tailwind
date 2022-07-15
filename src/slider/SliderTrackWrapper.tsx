import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";
import { SliderTrackOptions, useSliderTrack } from "@adaptui/react";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

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
    const className = cx(theme.trackWrapper, props.className);

    props = { ...props, className };
    props = useSliderTrack({ state, ...props });
    props = useBox(props);

    return props;
  },
);

export const SliderTrackWrapper = createComponent<SliderTrackWrapperOptions>(
  props => {
    const htmlProps = useSliderTrackWrapper(props);

    return createElement("div", htmlProps);
  },
  "SliderTrackWrapper",
);

export type SliderTrackWrapperOptions<T extends As = "div"> = BoxOptions<T> &
  SliderTrackOptions<T> &
  Partial<SliderUIProps> & {};

export type SliderTrackWrapperProps<T extends As = "div"> = Props<
  SliderTrackWrapperOptions<T>
>;
