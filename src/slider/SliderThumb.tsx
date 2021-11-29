import * as React from "react";

import { Tooltip } from "../tooltip";
import { runIfFn, withIconA11y } from "../utils";

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
    const { wrapperProps, containerProps, inputProps, state } =
      useSliderThumbProps(props);

    return (
      <SliderThumbWrapper {...wrapperProps}>
        {state.tooltip && !state.sliderState.baseState.isDisabled ? (
          <Tooltip
            side="top"
            withArrow
            content={state.sliderState.baseState.getThumbValueLabel(
              state.index,
            )}
          >
            <SliderThumbContainer {...containerProps} tabIndex={-1}>
              <SliderThumbInput ref={ref} {...inputProps} />
              {state.knobIcon
                ? withIconA11y(runIfFn(state.knobIcon, state))
                : null}
            </SliderThumbContainer>
          </Tooltip>
        ) : (
          <SliderThumbContainer {...containerProps} tabIndex={-1}>
            <SliderThumbInput ref={ref} {...inputProps} />
            {state.knobIcon
              ? withIconA11y(runIfFn(state.knobIcon, state))
              : null}
          </SliderThumbContainer>
        )}
      </SliderThumbWrapper>
    );
  },
);

SliderThumb.displayName = "SliderThumb";
