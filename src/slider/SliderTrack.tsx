import React from "react";
import { cx, SliderTrack as RenderlessSliderTrack } from "@renderlesskit/react";

import { useTheme } from "..";
import { SliderProps, useSliderPropsContext, useSliderValues } from "./Slider";

export const SliderTrack: React.FC<SliderProps> = ({
  orientation,
  origin,
  size,
  ...props
}) => {
  const theme = useTheme();
  const contextProps = useSliderPropsContext();

  const _orientation = orientation || contextProps.orientation || "horizontal";
  const _size = size || contextProps.size || "sm";
  const _origin = origin || contextProps.origin || 0;

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
  } = useSliderValues({ orientation: _orientation, origin: _origin });

  const trackContainerStyles = cx(
    theme.slider.common.track.base,
    theme.slider[_orientation].track.base,
  );

  const trackMainStyles = cx(
    theme.slider.common.track.main,
    theme.slider[_orientation].track.main,
    theme.slider[_orientation].track.size[_size],
  );

  const trackFilledStyles = cx(
    theme.slider.common.track.filled,
    theme.slider[_orientation].track.filled,
    theme.slider[_orientation].track.size[_size],
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
