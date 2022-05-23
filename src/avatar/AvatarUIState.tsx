import { AvatarGroupUIProps, useAvatarGroupContext } from "../avatar-group";
import { useImage, UseImageProps, UseImageStatus } from "../hooks";
import { UserIcon } from "../icons";
import { RenderProp } from "../utils";

import { getInitialsFromNameDefault } from "./__utils";
import { AvatarDefaultStatusIndicators } from "./AvatarDefaultStatusIndicators";
import { AvatarUIProps } from "./AvatarProps";

export function useAvatarUIState(props: AvatarUIStateProps): AvatarUIState {
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

  const context = useAvatarGroupContext();
  const contextState: AvatarGroupUIProps | null =
    context == null ? null : context;

  /**
   * Use the image hook to only show the image when it has loaded
   */
  const { status: imageStatus, showFallback } = useImage(props);

  return {
    circular: contextState?.circular || circular,
    size: contextState?.size || size,
    icon,
    name,
    initials,
    status,
    parentsBackground,
    getInitialsFromName,
    imageStatus,
    showFallback,
    statusIndicators,
    showRing: contextState?.showRing || showRing,
    ringColor: contextState?.ringColor || ringColor,
    max: contextState?.max || null,
  };
}

export type AvatarUIStateProps = UseImageProps &
  Partial<
    Pick<
      AvatarUIState,
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
  Partial<Pick<AvatarUIState, "getInitialsFromName">> & {
    /**
     * Avatar containers background to match the StatusIndicator's background & ring color.
     */
    parentsBackground?: string[];
  };

export type AvatarUIState = {
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
  icon: RenderProp<AvatarUIProps>;

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
  status: "none" | "active" | "typing" | "sleep" | "away" | "org";

  /**
   * Status Indicators to show based on the statu.
   */
  statusIndicators: RenderProp<AvatarUIProps>;

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

  /**
   * Function to get the initials to display
   */
  getInitialsFromName: (
    name: AvatarUIState["name"],
    size: AvatarUIState["size"],
  ) => AvatarUIState["name"];

  /**
   * Maximum number of avatars to be displayed within the group.
   *
   */
  max?: number | null;
};
