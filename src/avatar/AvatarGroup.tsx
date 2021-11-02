import { useMemo } from "react";

import { BoxProps } from "../box";
import {
  createContext,
  forwardRefWithAs,
  getValidChildren,
  isUndefined,
} from "../utils";

import { Avatar, AvatarProps } from "./Avatar";
import { AvatarGroupWrapper } from "./AvatarGroupWrapper";

const [AvatarGroupProvider, useAvatarGroup] =
  createContext<AvatarGroupSharedProps>({
    strict: false,
    name: "AvatarGroupProvider",
  });

export { useAvatarGroup };

export type AvatarGroupSharedProps = Pick<
  AvatarProps,
  "size" | "circular" | "showRing" | "ringColor"
>;

export type AvatarGroupProps = BoxProps &
  AvatarGroupSharedProps & {
    /**
     * Maximum number of avatars to be displayed within the group.
     *
     */
    max?: number;
  };

export const AvatarGroup = forwardRefWithAs<
  AvatarGroupProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const {
    circular = true,
    size = "xl",
    showRing = true,
    ringColor = "ring-white",
    children,
    max,
    ...rest
  } = props;

  const context = useMemo(
    () => ({ size, showRing, ringColor, circular }),
    [size, showRing, ringColor, circular],
  );

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
  const excess = isUndefined(max) ? 0 : validChildren.length - max;

  return (
    <AvatarGroupProvider value={context}>
      <AvatarGroupWrapper ref={ref} size={size} {...rest}>
        {childrenWithinMax}
        {excess > 0 ? (
          <Avatar name={excess.toString()} data-testid="testid-excess_label" />
        ) : null}
      </AvatarGroupWrapper>
    </AvatarGroupProvider>
  );
});

AvatarGroup.displayName = "AvatarGroup";
