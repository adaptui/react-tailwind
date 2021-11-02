import { useImage, UseImageProps, UseImageStatus } from "../hooks";
import { UserIcon } from "../icons";
import { isNull, RenderPropType } from "../utils";

import { AvatarDefaultStatusIndicators } from "./AvatarDefaultStatusIndicators";
import { useAvatarGroup } from "./AvatarGroup";
import { getInitialsFromNameDefault } from "./AvatarProps";

export type AvatarState = {
  /**
   * If `true`, Avatar looks like a round.
   *
   * @default true
   */
  circular: boolean;
  /**
   * How large should avatar be?
   *
   * @default xl
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
   *
   */
  showFallback: boolean;

  /**
   * Shows AvatarBadge with the given type
   *
   * @default none
   */
  status: "none" | "active" | "typing" | "sleep" | "away";

  /**
   * Status Indicators to show based on the statu.
   */
  statusIndicators: RenderPropType<AvatarStateReturn>;

  /**
   * StatusIndicator's Background Color & StatusIndicator Ring Color.
   *
   * @default ["bg-white", "ring-white"]"
   */
  parentsBackground: string[];

  /**
   * If `true`, the `Avatar` will show a `border` around it.
   *
   * Best for a group of avatars
   *
   * @default false
   */
  showRing: boolean;

  /**
   * Color of the `border` to match it's parent background.
   *
   * @default ring-white
   */
  ringColor: string;
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
    | "size"
    | "icon"
    | "name"
    | "circular"
    | "status"
    | "statusIndicators"
    | "showRing"
    | "ringColor"
  >
> &
  Partial<Pick<AvatarActions, "getInitialsFromName">> & {
    /**
     * Avatar containers background to match the StatusIndicator's background & ring color.
     */
    parentsBackground?: string[];
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
    parentsBackground = ["bg-white", "ring-white"],
    getInitialsFromName = getInitialsFromNameDefault,
    showRing = false,
    ringColor = "ring-white",
  } = props;

  const initials = getInitialsFromName(name, size);

  const context = useAvatarGroup();
  const contextState = isNull(context) ? {} : context;

  /**
   * Use the image hook to only show the image when it has loaded
   */
  const { status: imageStatus, showFallback } = useImage(props);

  return {
    circular,
    size,
    icon: icon,
    name,
    initials,
    status,
    parentsBackground,
    getInitialsFromName,
    imageStatus,
    showFallback,
    statusIndicators,
    showRing,
    ringColor,
    ...contextState,
  };
}
