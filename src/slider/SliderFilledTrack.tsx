import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { SliderUIProps } from "./SliderProps";

export const useSliderFilledTrack = createHook<SliderFilledTrackOptions>(
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
      theme.filledTrack,
      size ? theme.size[size].filledTrack : "",
      themeColor ? theme.themeColor[themeColor]?.filledTrack : "",
      props.className,
    );
    const style = {
      width: state
        ? !range
          ? `${
              state.baseState.getValuePercent(state.baseState.values[0]) * 100
            }%`
          : `${
              (state.baseState.getThumbPercent(1) -
                state.baseState.getThumbPercent(0)) *
              100
            }%`
        : undefined,
      left:
        !state || !range
          ? undefined
          : `${state.baseState.getThumbPercent(0) * 100}%`,
      ...props.style,
    };

    props = { ...props, className, style };
    props = useBox(props);

    return props;
  },
);

export const SliderFilledTrack = createComponent<SliderFilledTrackOptions>(
  props => {
    const htmlProps = useSliderFilledTrack(props);

    return createElement("div", htmlProps);
  },
  "SliderFilledTrack",
);

export type SliderFilledTrackOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<SliderUIProps> & {};

export type SliderFilledTrackProps<T extends As = "div"> = Props<
  SliderFilledTrackOptions<T>
>;
