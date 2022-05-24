import * as React from "react";

import { runIfFn, withIconA11y } from "../utils";

import { SliderThumbContainer } from "./SliderThumbContainer";
import { SliderThumbInput } from "./SliderThumbInput";
import { SliderThumbProps, useSliderThumbProps } from "./SliderThumbProps";
import { SliderThumbWrapper } from "./SliderThumbWrapper";

export const SliderThumb = React.forwardRef<HTMLInputElement, SliderThumbProps>(
  (props, ref) => {
    const { wrapperProps, containerProps, inputProps, uiProps } =
      useSliderThumbProps(props);

    // const tooltip = useTooltipState({ side: "top" });

    return (
      <SliderThumbWrapper {...wrapperProps}>
        {/* {thumbState.tooltip && !thumbState.isDisabled ? (
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
        ) : ( */}
        <SliderThumbContainer {...containerProps} tabIndex={-1}>
          <SliderThumbInput ref={ref} {...inputProps} />
          {uiProps.knobIcon
            ? withIconA11y(runIfFn(uiProps.knobIcon, uiProps))
            : null}
        </SliderThumbContainer>
        {/* )} */}
      </SliderThumbWrapper>
    );
  },
);

SliderThumb.displayName = "SliderThumb";
