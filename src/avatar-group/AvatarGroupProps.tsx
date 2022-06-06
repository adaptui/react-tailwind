import { getValidChildren, RenderProp } from "../utils";

import {
  AvatarGroupUIState,
  AvatarGroupUIStateProps,
  useAvatarGroupUIState,
} from "./AvatarGroupUIState";
import { AvatarGroupWrapperProps } from "./AvatarGroupWrapper";

export const useAvatarGroupProps = ({
  size,
  squared,
  showRing,
  ringColor,
  max,
  children,
  ...restProps
}: AvatarGroupProps) => {
  const uiState = useAvatarGroupUIState({
    size,
    squared,
    showRing,
    ringColor,
    max,
  });

  /**
   * Check if all the children are valid React components.
   */
  const validChildren = getValidChildren(children);

  /**
   * Get the avatars within the max
   */
  const childrenWithinMax =
    max == null ? validChildren : validChildren.slice(0, max);

  /**
   * Get the remaining avatar count
   */
  const excessChildrenCount = max == null ? 0 : validChildren.length - max;

  return {
    uiProps: uiState,
    childrenWithinMax,
    excessChildrenCount,
    wrapperProps: { ...restProps },
  };
};

export type AvatarGroupUIProps = AvatarGroupUIState;

export type AvatarGroupProps = Omit<AvatarGroupWrapperProps, "children"> &
  AvatarGroupUIStateProps & {
    children?: RenderProp<AvatarGroupUIProps>;
  };

export type AvatarGroupPropsReturn = {
  uiProps: AvatarGroupUIProps;
  childrenWithinMax: React.ReactNode[];
  excessChildrenCount: number;
  wrapperProps: Omit<AvatarGroupWrapperProps, "children">;
};
