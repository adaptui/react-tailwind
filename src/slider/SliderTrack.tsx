import React from "react";
import { cx, SliderTrack as RenderlessSliderTrack } from "@renderlesskit/react";

import { useTheme } from "..";
import { SliderProps, useSliderValues } from "./Slider";

export const SliderTrack: React.FC<SliderProps> = ({
  orientation = "horizontal",
  origin,
  ...props
}) => {
  const theme = useTheme();

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
  } = useSliderValues({ orientation, origin });

  const trackContainerStyles = cx(
    theme.slider.common.track.base,
    theme.slider[orientation].track.base,
  );

  const trackMainStyles = cx(
    theme.slider.common.track.main,
    theme.slider[orientation].track.main,
  );

  const trackFilledStyles = cx(
    theme.slider.common.track.filled,
    theme.slider[orientation].track.filled,
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
