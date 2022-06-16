import { AvatarUIState } from "../avatar";

export function useAvatarGroupUIState(
  props: AvatarGroupUIStateProps,
): AvatarGroupUIState {
  const {
    squared = false,
    size = "xl",
    showRing = true,
    ringColor = "ring-white-900",
    max,
  } = props;

  return {
    size,
    squared,
    showRing,
    ringColor,
    max,
  };
}

export type AvatarGroupUIState = Pick<
  AvatarUIState,
  "size" | "squared" | "showRing" | "ringColor" | "max"
>;

export type AvatarGroupUIStateProps = Partial<
  Pick<
    AvatarGroupUIState,
    "size" | "squared" | "showRing" | "ringColor" | "max"
  >
>;
