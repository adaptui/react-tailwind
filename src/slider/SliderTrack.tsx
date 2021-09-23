import { SliderTrack as RenderlessSliderTrack } from "@renderlesskit/react";

import { BoxProps } from "../box";
import { useTheme } from "../theme";
import { tcm } from "../utils";
import { forwardRefWithAs } from "../utils/types";

import { useSliderValues } from "./hooks/useSliderValues";
import { SliderProps, useSliderPropsContext } from "./Slider";

export type SliderTrackProps = BoxProps &
  Omit<SliderProps, "thumbContent" | "size" | "orientation" | "origin">;

export const SliderTrack = forwardRefWithAs<
  SliderTrackProps,
  HTMLDivElement,
  "div"
>(({ className, ...props }, ref) => {
  const theme = useTheme();
  const {
    padding,
    orientation = "horizontal",
    size = "md",
    origin = 0,
  } = useSliderPropsContext();

  const {
    isVertical,
    isRange,
    isMulti,
    isReversed,
    trackWidth,
    trackLeft,
    trackRight,
    getThumbPercent,
    state,
  } = useSliderValues({ orientation: orientation, origin: origin });

  const trackContainerStyles = tcm(
    theme.slider.common.track.base,
    theme.slider[orientation].track.base,
    className,
  );

  const trackMainStyles = tcm(
    theme.slider.common.track.main,
    theme.slider[orientation].track.main,
    theme.slider[orientation].track.size[size],
  );

  const trackFilledStyles = tcm(
    theme.slider.common.track.filled,
    theme.slider[orientation].track.filled,
    theme.slider[orientation].track.size[size],
  );

  const trackDynamicStyles = {
    [isVertical ? "height" : "width"]: trackWidth,
    left: !isReversed && !isVertical && trackLeft ? trackLeft : "",
    right: isReversed ? trackRight : "",
    bottom: isVertical && isRange ? `${getThumbPercent(0) * 100}%` : "",
  };

  return (
    <RenderlessSliderTrack
      {...state}
      ref={ref}
      className={trackContainerStyles}
      style={{ padding: `${padding}px 0` }}
      {...props}
    >
      <div className={trackMainStyles}>
        {!isMulti ? (
          <div className={trackFilledStyles} style={trackDynamicStyles} />
        ) : null}
        {props.children}
      </div>
    </RenderlessSliderTrack>
  );
});

SliderTrack.displayName = "SliderTrack";
