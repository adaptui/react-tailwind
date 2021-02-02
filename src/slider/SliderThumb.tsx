import React from "react";
import {
  cx,
  SliderInput,
  SliderThumb as RenderlessSliderThumb,
} from "@renderlesskit/react";
import { VisuallyHidden } from "reakit";

import { useTheme } from "..";
import { SliderProps, useSliderValues } from "./Slider";

export const SliderThumb: React.FC<SliderProps> = ({
  orientation = "horizontal",
  origin,
  children, // TODO Add render prop on slider thumb
}) => {
  const theme = useTheme();

  const { isVertical, isReversed, getThumbPercent, state } = useSliderValues({
    orientation,
    origin,
  });

  const thumbStyles = cx(
    theme.slider.common.thumb.base,
    theme.slider[orientation].thumb.base,
  );

  const thumbHandleStyles = cx(
    theme.slider.common.thumb.handle,
    theme.slider[orientation].thumb.handle,
  );

  const thumbDynamicStyles = (index: number) => {
    const percent = getThumbPercent(index) * 100;
    const calc = `calc(${percent}% - 7px)`;
    return {
      right: isReversed ? calc : "",
      left: !isReversed && !isVertical ? calc : "",
      bottom: isVertical ? calc : "",
    };
  };

  return (
    <>
      {[...new Array(state.values.length).keys()].map(index => {
        return (
          <div
            className={thumbStyles}
            key={`thumb-${index}`}
            style={thumbDynamicStyles(index)}
          >
            <RenderlessSliderThumb
              {...state}
              index={index}
              className={thumbHandleStyles}
            >
              <VisuallyHidden>
                <SliderInput index={index} {...state} />
              </VisuallyHidden>
              {/* {children} */}
            </RenderlessSliderThumb>
          </div>
        );
      })}
    </>
  );
};
