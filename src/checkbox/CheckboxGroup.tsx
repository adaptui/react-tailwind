import * as React from "react";

import { getComponentProps, RenderProp, runIfFnChildren } from "../utils";

import {
  CheckboxGroupInitialState,
  CheckboxGroupStateReturn,
  CheckboxStateContextProvider,
  useCheckboxGroupStateSplit,
} from "./CheckboxGroupState";
import { CheckboxShowMore } from "./CheckboxShowMore";
import {
  RenderlesskitCheckboxGroup,
  RenderlesskitCheckboxGroupHTMLProps,
} from "./RenderlesskitCheckboxGroup";

export type CheckboxGroupOwnProps = RenderlesskitCheckboxGroupHTMLProps & {};

export type CheckboxGroupProps = CheckboxGroupInitialState &
  CheckboxGroupOwnProps &
  RenderProp<CheckboxGroupStateReturn>;

const componentMap = {
  ShowMoreContent: "contentProps",
  ShowMoreButton: "buttonProps",
};

export const CheckboxGroup = React.forwardRef<
  HTMLDivElement,
  CheckboxGroupProps
>((props, ref) => {
  const [state, radioGroupProps] = useCheckboxGroupStateSplit(props);
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
  console.log(
    "%cmoreChildren",
    "color: #0088cc",
    runIfFnChildren(moreChildren),
  );

  return (
    <RenderlesskitCheckboxGroup ref={ref} {...state} {...restProps}>
      <CheckboxStateContextProvider value={state}>
        {visibleChildren}
        {moreChildren ? (
          <CheckboxShowMore
            children={moreChildren}
            componentProps={componentProps}
          />
        ) : null}
      </CheckboxStateContextProvider>
    </RenderlesskitCheckboxGroup>
  );
});

CheckboxGroup.displayName = "CheckboxGroup";
