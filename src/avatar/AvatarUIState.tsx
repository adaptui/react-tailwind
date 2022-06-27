import { AvatarGroupUIProps, useAvatarGroupContext } from "../avatar-group";
import { useImage, UseImageProps, UseImageStatus } from "../hooks";
import { UserIcon } from "../icons";
import { RenderProp } from "../utils";

import { getInitialsFromNameDefault } from "./__utils";
import { AvatarDefaultStatusIndicators } from "./AvatarDefaultStatusIndicators";
import { AvatarUIProps } from "./AvatarProps";

export function useAvatarUIState(props: AvatarUIStateProps): AvatarUIState {
  const {
    squared = false,
    size = "xl",
    icon = <UserIcon />,
    statusIndicators = AvatarDefaultStatusIndicators,
    name = null,
    status = "none",
    parentsBackground = ["bg-white-900", "ring-white-900"],
    getInitialsFromName = getInitialsFromNameDefault,
    showRing = false,
    ringColor = "ring-white-900",
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
    squared: contextState?.squared || squared,
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
      | "squared"
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
   * If `true`, Avatar looks like a squared.
   *
   * @default true
   */
  squared: boolean;

  /**
   * How large should avatar be?
   *
   * @default xl
   */
  size: keyof AdaptUI.GetThemeValue<"avatar", "wrapper", "size">;

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
   * @default ["bg-white-900", "ring-white-900"]"
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
   * @default ring-white-900
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
