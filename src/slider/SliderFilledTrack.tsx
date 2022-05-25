import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxProps, useBox } from "../box";
import { useTheme } from "../theme";
import { tcm } from "../utils";

import { SliderUIProps } from "./SliderProps";

export const useSliderFilledTrack = createHook<SliderFilledTrackOptions>(
  ({ state, range, size, knobIcon, tooltip, ...props }) => {
    const theme = useTheme("slider");
    const className = tcm(
      theme.track.filled.common,
      size ? theme.track.filled.size[size] : "",
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
);

export type SliderFilledTrackOptions<T extends As = "div"> = BoxProps<T> &
  Partial<SliderUIProps> & {};

export type SliderFilledTrackProps<T extends As = "div"> = Props<
  SliderFilledTrackOptions<T>
>;
