import { getComponentProps, splitProps } from "../utils";

import { USE_CHECKBOX_GROUP_STATE_KEYS } from "./__keys";
import { CheckboxGroupOwnProps, CheckboxGroupProps } from "./CheckboxGroup";
import {
  CheckboxGroupInitialState,
  useCheckboxGroupState,
} from "./CheckboxGroupState";

export const useCheckboxGroupStateSplit = (props: CheckboxGroupProps) => {
  const [stateProps, checkboxGroupProps] = splitProps(
    props,
    USE_CHECKBOX_GROUP_STATE_KEYS,
  ) as [CheckboxGroupInitialState, CheckboxGroupOwnProps];
  const state = useCheckboxGroupState(stateProps);

  return [state, checkboxGroupProps, stateProps] as const;
};

const componentMap = {
  ShowMoreContent: "contentProps",
  ShowMoreButton: "buttonProps",
};

export const useCheckboxGroupProps = (
  props: React.PropsWithChildren<CheckboxGroupProps>,
) => {
  const [state, checkboxGroupProps] = useCheckboxGroupStateSplit(props);
  const { children, ...restProps } = checkboxGroupProps;
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

  return {
    state,
    componentProps,
    visibleChildren,
    moreChildren,
    ...restProps,
  };
};
