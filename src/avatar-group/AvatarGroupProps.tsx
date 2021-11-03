import { getValidChildren, isUndefined, splitProps } from "../utils";

import { USE_AVATAR_GROUP_STATE_KEYS } from "./__keys";
import { AvatarGroupOwnProps, AvatarGroupProps } from "./AvatarGroup";
import {
  AvatarGroupInitialState,
  useAvatarGroupState,
} from "./AvatarGroupState";

export const useAvatarGroupStateSplit = (props: AvatarGroupProps) => {
  const [stateProps, GroupProps] = splitProps(
    props,
    USE_AVATAR_GROUP_STATE_KEYS,
  ) as [AvatarGroupInitialState, AvatarGroupOwnProps];
  const state = useAvatarGroupState(stateProps);

  return [state, GroupProps, stateProps] as const;
};

export const useAvatarGroupProps = (
  props: React.PropsWithChildren<AvatarGroupProps>,
) => {
  const [state, groupProps] = useAvatarGroupStateSplit(props);
  const { children, ...restProps } = groupProps;
  const { max, ...restState } = state;

  /**
   * Check if all the children are valid React components.
   */
  const validChildren = getValidChildren(children);

  /**
   * Get the avatars within the max
   */
  const childrenWithinMax = isUndefined(max)
    ? validChildren
    : validChildren.slice(0, max);

  /**
   * Get the remaining avatar count
   */
  const excessChildrenCount = isUndefined(max) ? 0 : validChildren.length - max;

  return {
    state,
    childrenWithinMax,
    excessChildrenCount,
    context: restState,
    ...restProps,
  };
};
