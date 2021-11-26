import * as React from "react";

import { SliderThumbContainer } from "./SliderThumbContainer";
import { SliderThumbInput } from "./SliderThumbInput";
import { useSliderThumbProps } from "./SliderThumbProps";
import { SliderThumbInitialState } from "./SliderThumbState";
import {
  SliderThumbWrapper,
  SliderThumbWrapperHTMLProps,
} from "./SliderThumbWrapper";

export type SliderThumbOwnProps = SliderThumbWrapperHTMLProps & {};

export type SliderThumbProps = SliderThumbInitialState & SliderThumbOwnProps;

export const SliderThumb = React.forwardRef<HTMLDivElement, SliderThumbProps>(
  (props, ref) => {
    const { wrapperProps, containerProps, inputProps } =
      useSliderThumbProps(props);

    return (
      <SliderThumbWrapper {...wrapperProps}>
        <SliderThumbContainer {...containerProps}>
          <SliderThumbInput ref={ref} {...inputProps} />
        </SliderThumbContainer>
      </SliderThumbWrapper>
    );
  },
);

SliderThumb.displayName = "SliderThumb";
