import * as React from "react";

import { RenderProp } from "../utils";

import { useRadioGroupProps } from "./RadioGroupProps";
import {
  RadioGroupContextProvider,
  RadioGroupInitialState,
  RadioGroupStateReturn,
} from "./RadioGroupState";
import {
  RadioGroupWrapper,
  RadioGroupWrapperHTMLProps,
} from "./RadioGroupWrapper";
import { RadioShowMore } from "./RadioShowMore";

export type RadioGroupOwnProps = RadioGroupWrapperHTMLProps & {};

export type RadioGroupProps = RadioGroupInitialState &
  RadioGroupOwnProps &
  RenderProp<RadioGroupStateReturn>;

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, ref) => {
    const {
      state,
      componentProps,
      visibleChildren,
      moreChildren,
      ...restProps
    } = useRadioGroupProps(props);

    return (
      <RadioGroupWrapper ref={ref} {...state} {...restProps}>
        <RadioGroupContextProvider {...state}>
          {visibleChildren}
          {moreChildren ? (
            <RadioShowMore
              children={moreChildren}
              componentProps={componentProps}
            />
          ) : null}
        </RadioGroupContextProvider>
      </RadioGroupWrapper>
    );
  },
);

RadioGroup.displayName = "RadioGroup";
