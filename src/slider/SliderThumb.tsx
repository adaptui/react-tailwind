import * as React from "react";

import { Tooltip, TooltipAnchor } from "../tooltip";
import { runIfFn, withIconA11y } from "../utils";

import { SliderThumbContainer } from "./SliderThumbContainer";
import { SliderThumbInput } from "./SliderThumbInput";
import { SliderThumbProps, useSliderThumbProps } from "./SliderThumbProps";
import { SliderThumbWrapper } from "./SliderThumbWrapper";

export const SliderThumb = React.forwardRef<HTMLInputElement, SliderThumbProps>(
  (props, ref) => {
    const { wrapperProps, containerProps, inputProps, uiProps } =
      useSliderThumbProps(props);
    const { index, state, tooltip, isDisabled, knobIcon } = uiProps;
    const { isThumbDragging, getThumbValueLabel } = state.baseState;

    return (
      <SliderThumbWrapper {...wrapperProps}>
        {tooltip && !isDisabled ? (
          <Tooltip
            content={getThumbValueLabel(uiProps.index)}
            isDragging={isThumbDragging(index)}
            withArrow={true}
          >
            <TooltipAnchor described>
              {props => {
                const { onMouseEnter, onMouseLeave, ...restProps } = props;
                return (
                  <label>
                    <SliderThumbInput
                      ref={ref}
                      {...inputProps}
                      {...restProps}
                    />
                    <SliderThumbContainer
                      {...containerProps}
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                    >
                      {uiProps.knobIcon
                        ? withIconA11y(runIfFn(uiProps.knobIcon, uiProps))
                        : null}
                    </SliderThumbContainer>
                  </label>
                );
              }}
            </TooltipAnchor>
          </Tooltip>
        ) : (
          <label>
            <SliderThumbInput ref={ref} {...inputProps} />
            <SliderThumbContainer {...containerProps} tabIndex={-1}>
              {knobIcon ? withIconA11y(runIfFn(knobIcon, uiProps)) : null}
            </SliderThumbContainer>
          </label>
        )}
      </SliderThumbWrapper>
    );
  },
);

SliderThumb.displayName = "SliderThumb";
