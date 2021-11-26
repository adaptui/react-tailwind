import * as React from "react";

import { SliderFilledTrack } from "./SliderFilledTrack";
import { useSliderProps } from "./SliderProps";
import { SliderInitialState } from "./SliderState";
import { SliderTrack } from "./SliderTrack";
import { SliderTrackWrapper } from "./SliderTrackWrapper";
import { SliderWrapper, SliderWrapperHTMLProps } from "./SliderWrapper";

export type SliderOwnProps = SliderWrapperHTMLProps & {};

export type SliderProps = SliderInitialState & SliderOwnProps;

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (props, ref) => {
    const {
      wrapperProps,
      trackWrapperProps,
      trackProps,
      filledTrackProps,
      finalChildren,
    } = useSliderProps(props);

    return (
      <SliderWrapper ref={ref} {...wrapperProps}>
        <SliderTrackWrapper {...trackWrapperProps}>
          <SliderTrack {...trackProps} />
          <SliderFilledTrack {...filledTrackProps} />
        </SliderTrackWrapper>
        {finalChildren}
      </SliderWrapper>
    );
  },
);

Slider.displayName = "Slider";
