import * as React from "react";

import { ArrowIcon } from "../icons";
import {
  TooltipArrow,
  TooltipArrowContent,
  TooltipContent,
  TooltipWrapper,
  useTooltipState,
} from "../tooltip";
import { SliderTooltipReference } from "../tooltip/SliderTooltipReference";
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

    const tooltip = useTooltipState({});

    return (
      <SliderThumbWrapper {...wrapperProps}>
        {state.tooltip && !state.sliderState.baseState.isDisabled ? (
          <>
            <SliderTooltipReference
              isDragging={state.isDragging}
              setIsDragging={state.setIsDragging}
              {...tooltip}
            >
              <SliderThumbContainer {...containerProps} tabIndex={-1}>
                <SliderThumbInput ref={ref} {...inputProps} />
                {state.knobIcon
                  ? withIconA11y(runIfFn(state.knobIcon, state))
                  : null}
              </SliderThumbContainer>
            </SliderTooltipReference>
            <TooltipWrapper ref={ref} {...tooltip}>
              <TooltipContent {...tooltip}>
                {state.sliderState.baseState.getThumbValueLabel(state.index)}
                <TooltipArrow {...tooltip}>
                  <TooltipArrowContent {...tooltip}>
                    {withIconA11y(runIfFn(<ArrowIcon />, state))}
                  </TooltipArrowContent>
                </TooltipArrow>
              </TooltipContent>
            </TooltipWrapper>
          </>
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
