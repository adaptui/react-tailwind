import { splitProps } from "reakit-utils";
import { isNull } from "@renderlesskit/react";

import { useImage, UseImageProps, UseImageStatus } from "../hooks";
import { UserIcon } from "../icons";
import {
  getComponentProps,
  RenderPropType,
  runIfFn,
  withIconA11y,
} from "../utils";

import { USE_AVATAR_STATE_KEYS } from "./__keys";
import { AvatarProps } from "./Avatar";
import { AvatarIconProps } from "./AvatarIcon";
import { AvatarImageProps } from "./AvatarImage";
import { AvatarInitialsProps } from "./AvatarInitials";
import { AvatarWrapperProps } from "./AvatarWrapper";

export type AvatarState = {
  /**
   * How large should avatar be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"avatar", "wrapper", "size">;

  /**
   * Provide custom icons as a replacement for the default ones.
   */
  icon?: RenderPropType<AvatarStateReturn>;

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
  imageLoadingStatus: UseImageStatus;

  /**
   * Move to showing initials or icon if no src found.
   */
  showFallback: boolean;

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
   * Shows AvatarBadge with the given type
   */
  // status?: keyof Renderlesskit.GetThemeValue<"avatar", "status">;
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

export type AvatarInitialState = Partial<
  Pick<AvatarState, "size" | "icon" | "name">
> &
  Partial<Pick<AvatarActions, "getInitialsFromName">> &
  UseImageProps;

export function useAvatarState(
  props: AvatarInitialState = {},
): AvatarStateReturn {
  const {
    size = "xl",
    name = null,
    getInitialsFromName = getInitialsFromNameDefault,
    src,
    icon = <UserIcon />,
  } = props;

  const initials = getInitialsFromName(name, size);
  /**
   * Use the image hook to only show the image when it has loaded
   */
  const imageLoadingStatus = useImage(props);

  const hasLoaded = imageLoadingStatus === "loaded";
  /**
   * Fallback avatar applies under 2 conditions:
   * - If `src` was passed and the image has not loaded or failed to load
   * - If `src` wasn't passed
   *
   * In this case, we'll show either the name avatar or default avatar
   */
  const showFallback = !src || !hasLoaded;

  return {
    size,
    icon: icon,
    name,
    getInitialsFromName,
    initials,
    imageLoadingStatus,
    showFallback,
  };
}

export const useAvatarStateSplit = (props: AvatarProps) => {
  const [stateProps, avatarProps] = splitProps(
    props,
    USE_AVATAR_STATE_KEYS,
  ) as [AvatarInitialState, AvatarProps];
  const [imageProps] = splitProps(stateProps, [
    "src",
    "srcSet",
    "sizes",
    "onLoad",
    "onError",
    "ignoreFallback",
    "crossOrigin",
    "loading",
  ]) as [UseImageProps, AvatarInitialState];

  const state = useAvatarState(stateProps);

  return [state, avatarProps, imageProps, stateProps] as const;
};

const componentMap = {
  AvatarWrapper: "wrapperProps",
  AvatarIcon: "iconProps",
  AvartarInitials: "initialsProps",
  AvartarImage: "imageProps",
};

export const useAvatarProps = (props: React.PropsWithChildren<AvatarProps>) => {
  const [state, avatarProps, imageProps] = useAvatarStateSplit(props);
  const { children, ...restProps } = avatarProps;
  const { componentProps } = getComponentProps(componentMap, children, state);

  const _icon: AvatarState["icon"] =
    componentProps?.iconProps?.children || state.icon;

  const wrapperProps: AvatarWrapperProps = {
    ...state,
    ...restProps,
    ...componentProps.wrapperProps,
  };

  const iconProps: AvatarIconProps = {
    ...state,
    ...componentProps.iconProps,
    children: runIfFn(withIconA11y(_icon), state),
  };

  const initialsProps: AvatarInitialsProps = {
    ...state,
    ...componentProps.initialsProps,
    children: state.initials,
  };

  const _imageProps: AvatarImageProps = {
    ...state,
    ...imageProps,
    ...componentProps.imageProps,
  };

  return {
    state,
    icon: _icon,
    wrapperProps,
    iconProps,
    initialsProps,
    imageProps: _imageProps,
  };
};

export function getInitialsFromNameDefault(
  name: AvatarState["name"],
  size: AvatarState["size"],
) {
  if (isNull(name)) return null;

  const [firstName, lastName] = name.split(" ");
  const oneLetterInitialSizes = ["xs", "sm", "md"];

  const initials =
    firstName && lastName
      ? `${firstName.charAt(0)}${lastName.charAt(0)}`
      : `${firstName.charAt(0)}${firstName.charAt(1)}`;

  return oneLetterInitialSizes.includes(size)
    ? initials.toUpperCase().charAt(0)
    : initials.toUpperCase();
}
