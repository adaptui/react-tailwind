import React from "react";
import {
  cx,
  SliderInput,
  SliderThumb as RenderlessSliderThumb,
} from "@renderlesskit/react";

import { Box } from "../box";
import { useTheme } from "..";
import { SliderProps, useSliderPropsContext, useSliderValues } from "./Slider";
import { forwardRefWithAs } from "../utils/types";

type SliderThumbProps = Omit<SliderProps, "size" | "orientation" | "origin">;

export const SliderThumb = forwardRefWithAs<
  SliderThumbProps,
  HTMLDivElement,
  "div"
>(({ children, ...props }, ref) => {
  const theme = useTheme();

  const contextProps = useSliderPropsContext();

  const orientation = contextProps.orientation || "horizontal";
  const size = contextProps.size || "sm";
  const origin = contextProps.origin || 0;

  const { isVertical, isReversed, getThumbPercent, state } = useSliderValues({
    orientation: orientation,
    origin: origin,
  });

  const thumbHandleStyles = cx(
    theme.slider.common.thumb.base,
    theme.slider.common.thumb.size[size],
    theme.slider[orientation].thumb.base,
  );

  const thumbDynamicStyles = (index: number) => {
    const percent = getThumbPercent(index) * 100;
    const calc = `calc(${percent}% - ${
      contextProps.thumbSize.current.height / 2
    }px)`;
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
          <RenderlessSliderThumb
            ref={ref}
            key={`thumb-${index}`}
            style={thumbDynamicStyles(index)}
            {...state}
            index={index}
            className={thumbHandleStyles}
          >
            <SliderInput
              className={theme.slider.common.input}
              index={index}
              {...state}
            />
            {children}
          </RenderlessSliderThumb>
        );
      })}
    </>
  );
});
