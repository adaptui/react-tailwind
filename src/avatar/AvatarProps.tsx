import {
  getComponentProps,
  isNull,
  runIfFn,
  splitProps,
  withIconA11y,
} from "../utils";

import { USE_AVATAR_IMAGE_STATE_KEYS, USE_AVATAR_STATE_KEYS } from "./__keys";
import { AvatarOwnProps, AvatarProps } from "./Avatar";
import { AvatarIconProps } from "./AvatarIcon";
import { AvatarImageProps } from "./AvatarImage";
import { AvatarInitialsProps } from "./AvatarInitials";
import {
  AvatarImageInitialState,
  AvatarInitialState,
  AvatarOwnInitialState,
  AvatarState,
  useAvatarState,
} from "./AvatarState";
import { AvatarStatusIndicatorProps } from "./AvatarStatusIndicator";
import { AvatarWrapperProps } from "./AvatarWrapper";

const componentMap = {
  AvatarWrapper: "wrapperProps",
  AvatarIcon: "iconProps",
  AvartarInitials: "initialsProps",
  AvartarImage: "imageProps",
  AvatarStatusIndicator: "statusIndicatorProps",
};

export const useAvatarStateSplit = (props: AvatarProps) => {
  const [fullStateProps, avatarProps] = splitProps(
    props,
    USE_AVATAR_STATE_KEYS,
  ) as [AvatarInitialState, AvatarOwnProps];

  const state = useAvatarState(fullStateProps);

  const [imageProps, stateProps] = splitProps(
    fullStateProps,
    USE_AVATAR_IMAGE_STATE_KEYS,
  ) as [AvatarImageInitialState, AvatarOwnInitialState];

  return [state, avatarProps, imageProps, stateProps] as const;
};

export const useAvatarProps = (props: React.PropsWithChildren<AvatarProps>) => {
  const [state, avatarProps, imageProps] = useAvatarStateSplit(props);
  const { children, ...restProps } = avatarProps;
  const { componentProps } = getComponentProps(componentMap, children, state);

  const _icon: AvatarState["icon"] =
    componentProps?.iconProps?.children || state.icon;

  const _statusIndicator: AvatarState["statusIndicators"] =
    componentProps?.statusIndicatorProps?.children || state.statusIndicators;

  const wrapperProps: AvatarWrapperProps = {
    ...state,
    ...restProps,
    ...componentProps.wrapperProps,
  };

  const iconProps: AvatarIconProps = {
    ...state,
    ...componentProps.iconProps,
    children: withIconA11y(runIfFn(_icon, state)),
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

  const statusIndicatorProps: AvatarStatusIndicatorProps = {
    ...state,
    ...componentProps.statusIndicatorProps,
    children: withIconA11y(runIfFn(_statusIndicator, state)),
  };

  return {
    state,
    icon: _icon,
    wrapperProps,
    iconProps,
    initialsProps,
    imageProps: _imageProps,
    statusIndicatorProps,
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
