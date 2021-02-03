import React from "react";
import {
  cx,
  SliderInput,
  SliderThumb as RenderlessSliderThumb,
} from "@renderlesskit/react";
import {
  Tooltip,
  VisuallyHidden,
  useTooltipState,
  TooltipReference,
} from "reakit";

import { runIfFn, useTheme } from "..";
import {
  SliderProps,
  useSliderContext,
  useSliderPropsContext,
  useSliderValues,
} from "./Slider";

export const SliderThumb: React.FC<SliderProps> = ({
  orientation,
  tooltipContent,
  tooltipVisible,
  origin,
  children,
  size,
  ...props
}) => {
  const theme = useTheme();
  const tooltip = useTooltipState({});

  const contextProps = useSliderPropsContext();

  const _orientation = orientation || contextProps.orientation || "horizontal";
  const _size = size || contextProps.size || "sm";
  const _origin = origin || contextProps.origin || 0;

  const { isVertical, isReversed, getThumbPercent, state } = useSliderValues({
    orientation: _orientation,
    origin: _origin,
  });

  React.useEffect(() => {
    tooltip.unstable_update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.values]);

  const thumbStyles = cx(
    theme.slider.common.thumb.base,
    theme.slider[_orientation].thumb.base,
  );

  const thumbHandleStyles = cx(
    theme.slider.common.thumb.handle.base,
    theme.slider.common.thumb.handle.size[_size],
    theme.slider[_orientation].thumb.handle,
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
              as={TooltipReference}
              {...tooltip}
              {...state}
              index={index}
              className={thumbHandleStyles}
            >
              <VisuallyHidden>
                <SliderInput index={index} {...state} />
              </VisuallyHidden>
              {children}
            </RenderlessSliderThumb>
            {tooltipVisible ? (
              <Tooltip
                {...tooltip}
                as="div"
                className="pointer-events-none text-xs"
              >
                {tooltipContent
                  ? runIfFn(tooltipContent, state)
                  : state.getThumbValueLabel(index)}
              </Tooltip>
            ) : null}
          </div>
        );
      })}
    </>
  );
};
