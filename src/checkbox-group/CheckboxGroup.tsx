import * as React from "react";

import { CheckboxGroupContextProvider } from "./__utils";
import {
  CheckboxGroupProps,
  useCheckboxGroupProps,
} from "./CheckboxGroupProps";
import { CheckboxGroupWrapper } from "./CheckboxGroupWrapper";
import { CheckboxShowMore } from "./CheckboxShowMore";

export const CheckboxGroup = React.forwardRef<
  HTMLDivElement,
  CheckboxGroupProps
>((props, ref) => {
  const {
    visibleChildren,
    moreChildren,
    wrapperProps,
    buttonProps,
    contentProps,
    uiProps,
  } = useCheckboxGroupProps(props);

  return (
    <CheckboxGroupWrapper ref={ref} {...wrapperProps}>
      <CheckboxGroupContextProvider {...uiProps}>
        {visibleChildren}
        {moreChildren ? (
          <CheckboxShowMore
            moreChildren={moreChildren}
            buttonProps={buttonProps}
            contentProps={contentProps}
            uiProps={uiProps}
          />
        ) : null}
      </CheckboxGroupContextProvider>
    </CheckboxGroupWrapper>
  );
});

CheckboxGroup.displayName = "CheckboxGroup";
