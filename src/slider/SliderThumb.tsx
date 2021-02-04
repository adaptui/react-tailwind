import React from "react";
import { VisuallyHidden } from "reakit";
import {
  cx,
  SliderInput,
  SliderThumb as RenderlessSliderThumb,
} from "@renderlesskit/react";

import { useTheme } from "..";
import { SliderProps, useSliderPropsContext, useSliderValues } from "./Slider";

type SliderThumbProps = Omit<SliderProps, "size" | "orientation" | "origin">;

export const SliderThumb: React.FC<SliderThumbProps> = ({
  children,
  ...props
}) => {
  const theme = useTheme();

  const contextProps = useSliderPropsContext();

  const orientation = contextProps.orientation || "horizontal";
  const size = contextProps.size || "sm";
  const origin = contextProps.origin || 0;

  const { isVertical, isReversed, getThumbPercent, state } = useSliderValues({
    orientation: orientation,
    origin: origin,
  });

  const thumbStyles = cx(
    theme.slider.common.thumb.base,
    theme.slider[orientation].thumb.base,
  );

  const thumbHandleStyles = cx(
    theme.slider.common.thumb.handle.base,
    theme.slider.common.thumb.handle.size[size],
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
              {children}
            </RenderlessSliderThumb>
          </div>
        );
      })}
    </>
  );
};
