import * as React from "react";

import { SliderContextProvider } from "./__utils";
import { SliderFilledTrack } from "./SliderFilledTrack";
import { SliderProps, useSliderProps } from "./SliderProps";
import { SliderThumb } from "./SliderThumb";
import { SliderTrack } from "./SliderTrack";
import { SliderTrackWrapper } from "./SliderTrackWrapper";
import { SliderWrapper } from "./SliderWrapper";

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (props, ref) => {
    const {
      wrapperProps,
      trackWrapperProps,
      trackProps,
      filledTrackProps,
      thumbProps,
      uiProps,
    } = useSliderProps(props);

    return (
      <SliderContextProvider {...uiProps}>
        <SliderWrapper ref={ref} {...wrapperProps}>
          <SliderTrackWrapper {...trackWrapperProps}>
            <SliderTrack {...trackProps} />
            <SliderFilledTrack {...filledTrackProps} />
          </SliderTrackWrapper>
          {!uiProps.range ? (
            <SliderThumb {...thumbProps} aria-label="Thumb" index={0} />
          ) : (
            <>
              <SliderThumb {...thumbProps} aria-label="Thumb 0" index={0} />
              <SliderThumb {...thumbProps} aria-label="Thumb 1" index={1} />
            </>
          )}
        </SliderWrapper>
      </SliderContextProvider>
    );
  },
);

Slider.displayName = "Slider";
