import { createContext } from "../utils";

import { AvatarStateReturn } from "./AvatarState";

export type AvatarGroupSharedState = Pick<
  AvatarStateReturn,
  "size" | "circular" | "showRing" | "ringColor"
>;

export type AvatarGroupState = AvatarGroupSharedState & {
  /**
   * Maximum number of avatars to be displayed within the group.
   *
   */
  max?: number;
};

export type AvatarGroupActions = {};

export type AvatarGroupStateReturn = AvatarGroupState & AvatarGroupActions;

export type AvatarGroupInitialState = Partial<
  Pick<AvatarGroupState, "size" | "circular" | "showRing" | "ringColor" | "max">
>;

export function useAvatarGroupState(
  props: AvatarGroupInitialState = {},
): AvatarGroupStateReturn {
  const {
    circular = true,
    size = "xl",
    showRing = true,
    ringColor = "ring-white",
    max,
  } = props;

  return {
    size,
    circular,
    showRing,
    ringColor,
    max,
  };
}

const [AvatarGroupContextProvider, useAvatarGroupContext] =
  createContext<AvatarGroupSharedState>({
    name: "AvatarGroupContextProvider",
    strict: false,
  });

export { AvatarGroupContextProvider, useAvatarGroupContext };
