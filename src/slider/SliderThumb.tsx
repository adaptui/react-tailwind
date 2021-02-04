import React from "react";
import { Tooltip, useTooltipState, TooltipReference } from "reakit";
import {
  cx,
  SliderInput,
  SliderThumb as RenderlessSliderThumb,
} from "@renderlesskit/react";

import { Box } from "../box";
import { runIfFn, useTheme } from "..";
import { SliderProps, useSliderPropsContext, useSliderValues } from "./Slider";
import { forwardRefWithAs } from "../utils/types";

type SliderThumbProps = Omit<SliderProps, "size" | "orientation" | "origin">;

export const SliderThumb = forwardRefWithAs<
  SliderThumbProps,
  HTMLDivElement,
  "div"
>(({ tooltipContent, tooltipVisible, children, ...props }, ref) => {
  const theme = useTheme();
  const tooltip = useTooltipState({});

  const contextProps = useSliderPropsContext();

  const orientation = contextProps.orientation || "horizontal";
  const size = contextProps.size || "sm";
  const origin = contextProps.origin || 0;

  const { isVertical, isReversed, getThumbPercent, state } = useSliderValues({
    orientation: orientation,
    origin: origin,
  });

  React.useEffect(() => {
    tooltip.unstable_update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.values]);

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
          <Box
            ref={ref}
            className={thumbStyles}
            key={`thumb-${index}`}
            style={thumbDynamicStyles(index)}
          >
            <RenderlessSliderThumb
              as={TooltipReference}
              {...tooltip}
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
            {tooltipVisible ? (
              <Tooltip
                {...tooltip}
                as="div"
                className={theme.slider.common.tooltipContent}
              >
                {tooltipContent
                  ? runIfFn(tooltipContent, state)
                  : state.getThumbValueLabel(index)}
              </Tooltip>
            ) : null}
          </Box>
        );
      })}
    </>
  );
});
