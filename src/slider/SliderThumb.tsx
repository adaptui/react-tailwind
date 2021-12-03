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
    const { state, index } = props;
    const { wrapperProps, containerProps, inputProps, thumbState } =
      useSliderThumbProps(props);

    const tooltip = useTooltipState({ side: "top" });

    return (
      <SliderThumbWrapper {...wrapperProps}>
        {thumbState.tooltip && !thumbState.isDisabled ? (
          <>
            <SliderTooltipReference
              isDragging={state.isThumbDragging(index)}
              {...tooltip}
            >
              <SliderThumbContainer {...containerProps} tabIndex={-1}>
                <SliderThumbInput ref={ref} {...inputProps} />
                {thumbState.knobIcon
                  ? withIconA11y(runIfFn(thumbState.knobIcon, thumbState))
                  : null}
              </SliderThumbContainer>
            </SliderTooltipReference>
            <TooltipWrapper ref={ref} {...tooltip}>
              <TooltipContent {...tooltip}>
                {state.getThumbValueLabel(thumbState.index)}
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
            {thumbState.knobIcon
              ? withIconA11y(runIfFn(thumbState.knobIcon, thumbState))
              : null}
          </SliderThumbContainer>
        )}
      </SliderThumbWrapper>
    );
  },
);

SliderThumb.displayName = "SliderThumb";
