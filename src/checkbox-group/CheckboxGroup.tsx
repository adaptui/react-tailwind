import * as React from "react";

import { RenderProp } from "../utils";

import { useCheckboxGroupProps } from "./CheckboxGroupProps";
import {
  CheckboxGroupContextProvider,
  CheckboxGroupInitialState,
  CheckboxGroupStateReturn,
} from "./CheckboxGroupState";
import {
  CheckboxGroupWrapper,
  CheckboxGroupWrapperHTMLProps,
} from "./CheckboxGroupWrapper";
import { CheckboxShowMore } from "./CheckboxShowMore";

export type CheckboxGroupOwnProps = CheckboxGroupWrapperHTMLProps & {};

export type CheckboxGroupProps = CheckboxGroupInitialState &
  CheckboxGroupOwnProps &
  RenderProp<CheckboxGroupStateReturn>;

export const CheckboxGroup = React.forwardRef<
  HTMLDivElement,
  CheckboxGroupProps
>((props, ref) => {
  const { state, componentProps, visibleChildren, moreChildren, ...restProps } =
    useCheckboxGroupProps(props);

  return (
    <CheckboxGroupWrapper ref={ref} {...state} {...restProps}>
      <CheckboxGroupContextProvider {...state}>
        {visibleChildren}
        {moreChildren ? (
          <CheckboxShowMore
            children={moreChildren}
            componentProps={componentProps}
          />
        ) : null}
      </CheckboxGroupContextProvider>
    </CheckboxGroupWrapper>
  );
});

CheckboxGroup.displayName = "CheckboxGroup";
