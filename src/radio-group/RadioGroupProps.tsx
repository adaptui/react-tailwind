import { getComponentProps, splitProps } from "../utils";

import { USE_RADIO_GROUP_STATE_KEYS } from "./__keys";
import { RadioGroupOwnProps, RadioGroupProps } from "./RadioGroup";
import { RadioGroupInitialState, useRadioGroupState } from "./RadioGroupState";

export const useRadioGroupStateSplit = (props: RadioGroupProps) => {
  const [stateProps, GroupProps] = splitProps(
    props,
    USE_RADIO_GROUP_STATE_KEYS,
  ) as [RadioGroupInitialState, RadioGroupOwnProps];
  const state = useRadioGroupState(stateProps);

  return [state, GroupProps, stateProps] as const;
};

const componentMap = {
  ShowMoreContent: "contentProps",
  ShowMoreButton: "buttonProps",
};

export const useRadioGroupProps = (
  props: React.PropsWithChildren<RadioGroupProps>,
) => {
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

  return {
    state,
    componentProps,
    visibleChildren,
    moreChildren,
    ...restProps,
  };
};
