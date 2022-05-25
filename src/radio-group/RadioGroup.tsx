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
      buttonProps,
      contentProps,
      uiProps,
    } = useRadioGroupProps(props);

    return (
      <RadioGroupWrapper ref={ref} {...wrapperProps}>
        <RadioGroupContextProvider {...uiProps}>
          {visibleChildren}
          {moreChildren ? (
            <RadioShowMore
              moreChildren={moreChildren}
              buttonProps={buttonProps}
              contentProps={contentProps}
              uiProps={uiProps}
            />
          ) : null}
        </RadioGroupContextProvider>
      </RadioGroupWrapper>
    );
  },
);

RadioGroup.displayName = "RadioGroup";
