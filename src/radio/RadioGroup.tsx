import * as React from "react";

import { getComponentProps, RenderProp } from "../utils";

import {
  RadioGroupInitialState,
  RadioGroupStateReturn,
  RadioStateContextProvider,
  useRadioGroupStateSplit,
} from "./RadioGroupState";
import { RadioShowMore } from "./RadioShowMore";
import {
  RenderlesskitRadioGroup,
  RenderlesskitRadioGroupHTMLProps,
} from "./RenderlesskitRadioGroup";

export type RadioGroupOwnProps = RenderlesskitRadioGroupHTMLProps & {};

export type RadioGroupProps = RadioGroupInitialState &
  RadioGroupOwnProps &
  RenderProp<RadioGroupStateReturn>;

const componentMap = {
  ShowMoreContent: "contentProps",
  ShowMoreButton: "buttonProps",
};

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, ref) => {
    const [state, radioGroupProps] = useRadioGroupStateSplit(props);
    const { children, ...restProps } = radioGroupProps;
    const { componentProps, finalChildren } = getComponentProps(
      componentMap,
      children,
      state,
    );
    const visibleChildren =
      state.maxVisibleItems == null
        ? finalChildren
        : finalChildren.slice(0, state.maxVisibleItems);
    const moreChildren =
      state.maxVisibleItems == null ||
      finalChildren.length <= state.maxVisibleItems
        ? null
        : finalChildren.slice(state.maxVisibleItems);

    return (
      <RenderlesskitRadioGroup ref={ref} {...state} {...restProps}>
        <RadioStateContextProvider value={state}>
          {visibleChildren}
          {moreChildren ? (
            <RadioShowMore
              children={moreChildren}
              componentProps={componentProps}
            />
          ) : null}
        </RadioStateContextProvider>
      </RenderlesskitRadioGroup>
    );
  },
);

RadioGroup.displayName = "RadioGroup";
