import * as React from "react";

import { SliderFilledTrack } from "./SliderFilledTrack";
import { useSliderProps } from "./SliderProps";
import { SliderInitialState } from "./SliderState";
import { SliderThumb } from "./SliderThumb";
import { SliderTrack } from "./SliderTrack";
import { SliderTrackWrapper } from "./SliderTrackWrapper";
import { SliderWrapper, SliderWrapperHTMLProps } from "./SliderWrapper";

export type SliderOwnProps = Omit<SliderWrapperHTMLProps, "defaultValue"> & {};

export type SliderProps = SliderInitialState & SliderOwnProps;

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (props, ref) => {
    const {
      wrapperProps,
      trackWrapperProps,
      trackProps,
      filledTrackProps,
      thumbProps,
      state,
    } = useSliderProps(props);

    return (
      <SliderWrapper ref={ref} {...wrapperProps}>
        <SliderTrackWrapper {...trackWrapperProps}>
          <SliderTrack {...trackProps} />
          <SliderFilledTrack {...filledTrackProps} />
        </SliderTrackWrapper>
        {!state.range ? (
          <SliderThumb {...thumbProps} aria-label="Thumb" index={0} />
        ) : (
          <>
            <SliderThumb {...thumbProps} aria-label="Thumb 0" index={0} />
            <SliderThumb {...thumbProps} aria-label="Thumb 1" index={1} />
          </>
        )}
      </SliderWrapper>
    );
  },
);

Slider.displayName = "Slider";
