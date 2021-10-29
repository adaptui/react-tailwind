import { useImage, UseImageProps, UseImageStatus } from "../hooks";
import { UserIcon } from "../icons";
import { RenderPropType } from "../utils";

import { AvatarDefaultStatusIndicators } from "./AvatarDefaultStatusIndicators";
import { getInitialsFromNameDefault } from "./AvatarProps";

export type AvatarState = {
  /**
   * If `true`, Avatar looks like a round.
   */
  circular: boolean;
  /**
   * How large should avatar be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"avatar", "wrapper", "size">;

  /**
   * Provide custom icons as a replacement for the default ones.
   */
  icon: RenderPropType<AvatarStateReturn>;

  /**
   * Name prop used for `alt` & calculate placeholder initials.
   */
  name: string | null;

  /**
   * Name prop used for `alt` & calculate placeholder initials.
   */
  initials: string | null;

  /**
   * URL for the avatar image
   */
  imageStatus: UseImageStatus;

  /**
   * Move to showing initials or icon if no src found.
   */
  showFallback: boolean;

  /**
   * Shows AvatarBadge with the given type
   */
  status: "none" | "active" | "typing" | "sleep" | "away";

  /**
   * Status Indicators to show based on the statu.
   */
  statusIndicators: RenderPropType<AvatarStateReturn>;

  /**
   * StatusIndicator Ring Color.
   */
  statusIndicatorRingColor: string;

  /**
   * StatusIndicator's Background Color.
   */
  statusIndicatorsBgColor: string;

  /**
   * If `true`, the `Avatar` will show a `border` around it.
   *
   * Best for a group of avatars
   */
  // showBorder?: boolean;
  /**
   * Color of the `border` to match it's parent background.
   */
  // borderColor?: string;
  /**
   * Position for the AvatarBadge
   * @default "bottom-right"
   */
  // position?: keyof Renderlesskit.GetThemeValue<"avatar", "badge", "position">;
};

export type AvatarActions = {
  /**
   * Function to get the initials to display
   */
  getInitialsFromName: (
    name: AvatarState["name"],
    size: AvatarState["size"],
  ) => AvatarState["name"];
};

export type AvatarStateReturn = AvatarState & AvatarActions;

export type AvatarOwnInitialState = Partial<
  Pick<
    AvatarState,
    "size" | "icon" | "name" | "circular" | "status" | "statusIndicators"
  >
> &
  Partial<Pick<AvatarActions, "getInitialsFromName">> & {
    /**
     * Avatar containers background to match the StatusIndicator's background & ring color.
     */
    containerBackground?: string[];
  };

export type AvatarImageInitialState = UseImageProps;

export type AvatarInitialState = AvatarOwnInitialState &
  AvatarImageInitialState;

export function useAvatarState(
  props: AvatarInitialState = {},
): AvatarStateReturn {
  const {
    circular = true,
    size = "xl",
    icon = <UserIcon />,
    statusIndicators = AvatarDefaultStatusIndicators,
    name = null,
    status = "none",
    containerBackground = ["bg-white", "ring-white"],
    getInitialsFromName = getInitialsFromNameDefault,
  } = props;

  const initials = getInitialsFromName(name, size);

  /**
   * Use the image hook to only show the image when it has loaded
   */
  const { status: imageStatus, showFallback } = useImage(props);

  const [statusIndicatorsBgColor, statusIndicatorRingColor] =
    containerBackground;

  return {
    circular,
    size,
    icon: icon,
    name,
    initials,
    status,
    statusIndicatorsBgColor,
    statusIndicatorRingColor,
    getInitialsFromName,
    imageStatus,
    showFallback,
    statusIndicators,
  };
}
