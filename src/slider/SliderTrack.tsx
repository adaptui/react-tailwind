import React from "react";
import { cx, SliderTrack as RenderlessSliderTrack } from "@renderlesskit/react";

import { useTheme } from "..";
import { SliderProps, useSliderPropsContext, useSliderValues } from "./Slider";

export type SliderTrackProps = Omit<
  SliderProps,
  "thumbContent" | "tooltipContent" | "size" | "orientation" | "origin"
>;

export const SliderTrack: React.FC<SliderTrackProps> = props => {
  const theme = useTheme();
  const contextProps = useSliderPropsContext();

  const orientation = contextProps.orientation || "horizontal";
  const size = contextProps.size || "sm";
  const origin = contextProps.origin || 0;

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

  const trackContainerStyles = cx(
    theme.slider.common.track.base,
    theme.slider[orientation].track.base,
  );

  const trackMainStyles = cx(
    theme.slider.common.track.main,
    theme.slider[orientation].track.main,
    theme.slider[orientation].track.size[size],
  );

  const trackFilledStyles = cx(
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
    <RenderlessSliderTrack {...state} className={trackContainerStyles}>
      <div className={trackMainStyles}>
        {!isMulti ? (
          <div className={trackFilledStyles} style={trackDynamicStyles} />
        ) : null}
      </div>
    </RenderlessSliderTrack>
  );
};
