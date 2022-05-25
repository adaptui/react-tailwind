import { AvatarUIState } from "../avatar";

export function useAvatarGroupUIState(
  props: AvatarGroupUIStateProps,
): AvatarGroupUIState {
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

export type AvatarGroupUIState = Pick<
  AvatarUIState,
  "size" | "circular" | "showRing" | "ringColor" | "max"
>;

export type AvatarGroupUIStateProps = Partial<
  Pick<
    AvatarGroupUIState,
    "size" | "circular" | "showRing" | "ringColor" | "max"
  >
>;
