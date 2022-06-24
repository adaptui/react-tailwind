import * as React from "react";

import { RadioGroupContextProvider } from "./__utils";
import { RadioGroupProps, useRadioGroupProps } from "./RadioGroupProps";
import { RadioGroupWrapper } from "./RadioGroupWrapper";
import { RadioShowMore } from "./RadioShowMore";

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, ref) => {
    const {
      visibleChildren,
      moreChildren,
      wrapperProps,
      showMoreProps,
      uiProps,
    } = useRadioGroupProps(props);

    //  TODO: Disabled state for Text & Description
    //  TODO: Ask usage of js for active state across all components
    return (
      <RadioGroupWrapper ref={ref} {...wrapperProps}>
        <RadioGroupContextProvider {...uiProps}>
          {visibleChildren}
          {moreChildren ? <RadioShowMore {...showMoreProps} /> : null}
        </RadioGroupContextProvider>
      </RadioGroupWrapper>
    );
  },
);

RadioGroup.displayName = "RadioGroup";
