import * as React from "react";

import { Tooltip, TooltipAnchor } from "../tooltip";
import { withIconA11y } from "../utils";

import { SliderThumbContainer } from "./SliderThumbContainer";
import { SliderThumbInput } from "./SliderThumbInput";
import { SliderThumbLabel } from "./SliderThumbLabel";
import { SliderThumbProps, useSliderThumbProps } from "./SliderThumbProps";
import { SliderThumbWrapper } from "./SliderThumbWrapper";

export const SliderThumb = React.forwardRef<HTMLInputElement, SliderThumbProps>(
  (props, ref) => {
    const { wrapperProps, labelProps, containerProps, inputProps, uiProps } =
      useSliderThumbProps(props);
    const { index, state, tooltip, isDisabled, knobIcon } = uiProps;
    const { isThumbDragging, getThumbValueLabel } = state.baseState;

    return (
      <SliderThumbWrapper {...wrapperProps}>
        {tooltip && !isDisabled ? (
          <Tooltip
            content={getThumbValueLabel(index)}
            isDragging={isThumbDragging(index)}
            withArrow={true}
          >
            <TooltipAnchor described>
              {props => {
                return (
                  <SliderThumbLabel {...labelProps} {...props}>
                    <SliderThumbInput ref={ref} {...inputProps} />
                    <SliderThumbContainer {...containerProps}>
                      {knobIcon ? withIconA11y(knobIcon, uiProps) : null}
                    </SliderThumbContainer>
                  </SliderThumbLabel>
                );
              }}
            </TooltipAnchor>
          </Tooltip>
        ) : (
          <SliderThumbLabel {...labelProps}>
            <SliderThumbInput ref={ref} {...inputProps} />
            <SliderThumbContainer {...containerProps}>
              {knobIcon ? withIconA11y(knobIcon, uiProps) : null}
            </SliderThumbContainer>
          </SliderThumbLabel>
        )}
      </SliderThumbWrapper>
    );
  },
);

SliderThumb.displayName = "SliderThumb";
