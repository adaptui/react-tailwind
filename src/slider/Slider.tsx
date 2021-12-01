import * as React from "react";
import { useSliderBaseState } from "@renderlesskit/react";

import { SliderFilledTrack } from "./SliderFilledTrack";
import { SliderContextProvider, useSliderProps } from "./SliderProps";
import { SliderInitialState } from "./SliderState";
import { SliderThumb } from "./SliderThumb";
import { SliderTrack } from "./SliderTrack";
import { SliderTrackWrapper } from "./SliderTrackWrapper";
import { SliderWrapper, SliderWrapperHTMLProps } from "./SliderWrapper";

export type SliderOwnProps = Omit<SliderWrapperHTMLProps, "defaultValue"> & {};

export type SliderProps = SliderInitialState & SliderOwnProps;

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (props, ref) => {
    const state = useSliderBaseState(props);
    const {
      wrapperProps,
      trackWrapperProps,
      trackProps,
      filledTrackProps,
      thumbProps,
      state: sliderState,
    } = useSliderProps({ ...props, state });

    return (
      <SliderContextProvider {...state}>
        <SliderWrapper ref={ref} {...wrapperProps}>
          <SliderTrackWrapper {...trackWrapperProps}>
            <SliderTrack {...trackProps} />
            <SliderFilledTrack {...filledTrackProps} />
          </SliderTrackWrapper>
          {!sliderState.range ? (
            <SliderThumb
              {...thumbProps}
              state={state}
              aria-label="Thumb"
              index={0}
            />
          ) : (
            <>
              <SliderThumb
                {...thumbProps}
                state={state}
                aria-label="Thumb 0"
                index={0}
              />
              <SliderThumb
                {...thumbProps}
                state={state}
                aria-label="Thumb 1"
                index={1}
              />
            </>
          )}
        </SliderWrapper>
      </SliderContextProvider>
    );
  },
);

Slider.displayName = "Slider";
