import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxProps, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SliderUIProps } from "./SliderProps";

export const useSliderTrack = createHook<SliderTrackOptions>(
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
    const className = cx(
      theme.track,
      size ? theme.size[size]?.track : "",
      themeColor ? theme.themeColor[themeColor]?.track : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const SliderTrack = createComponent<SliderTrackOptions>(props => {
  const htmlProps = useSliderTrack(props);

  return createElement("div", htmlProps);
});

export type SliderTrackOptions<T extends As = "div"> = BoxProps<T> &
  Partial<SliderUIProps> & {};

export type SliderTrackProps<T extends As = "div"> = Props<
  SliderTrackOptions<T>
>;
