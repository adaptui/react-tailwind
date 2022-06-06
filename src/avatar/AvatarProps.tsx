import { useMemo } from "react";

import { getComponentProps, RenderProp, runIfFn, withIconA11y } from "../utils";

import { AvatarIconProps } from "./AvatarIcon";
import { AvatarImageProps } from "./AvatarImage";
import { AvatarInitialsProps } from "./AvatarInitials";
import { AvatarStatusIndicatorProps } from "./AvatarStatusIndicator";
import {
  AvatarUIState,
  AvatarUIStateProps,
  useAvatarUIState,
} from "./AvatarUIState";
import { AvatarWrapperProps } from "./AvatarWrapper";

const componentMap = {
  AvatarWrapper: "wrapperProps",
  AvatarIcon: "iconProps",
  AvartarInitials: "initialsProps",
  AvartarImage: "imageProps",
  AvatarStatusIndicator: "statusIndicatorProps",
};

export const useAvatarProps = ({
  squared,
  size,
  icon,
  statusIndicators,
  name,
  status,
  parentsBackground,
  getInitialsFromName,
  showRing,
  ringColor,
  src,
  srcSet,
  sizes,
  onLoad,
  onError,
  ignoreFallback,
  crossOrigin,
  loading,
  children,
  ...restProps
}: AvatarProps) => {
  const uiState = useAvatarUIState({
    squared,
    size,
    icon,
    statusIndicators,
    name,
    status,
    parentsBackground,
    getInitialsFromName,
    showRing,
    ringColor,
    src,
    srcSet,
    sizes,
    onLoad,
    onError,
    ignoreFallback,
    crossOrigin,
    loading,
  });
  let uiProps: AvatarUIProps = useMemo(() => ({ ...uiState }), [uiState]);
  const { componentProps } = getComponentProps(componentMap, children, uiProps);

  const _icon: AvatarUIState["icon"] =
    componentProps?.iconProps?.children || uiProps.icon;
  const _statusIndicators: AvatarUIState["statusIndicators"] =
    componentProps?.statusIndicatorProps?.children || uiProps.statusIndicators;

  uiProps = {
    ...uiProps,
    icon: _icon,
    statusIndicators: _statusIndicators,
  };

  const wrapperProps: AvatarWrapperProps = {
    ...uiProps,
    ...restProps,
    ...componentProps.wrapperProps,
  };

  const iconProps: AvatarIconProps = {
    ...uiProps,
    ...componentProps.iconProps,
    children: withIconA11y(runIfFn(uiProps.icon, uiProps)),
  };

  const initialsProps: AvatarInitialsProps = {
    ...uiProps,
    ...componentProps.initialsProps,
    children: uiProps.initials,
  };

  const imageProps: AvatarImageProps = {
    ...uiProps,
    src,
    srcSet,
    sizes,
    loading,
    crossOrigin,
    onLoad,
    onError,
    ...componentProps.imageProps,
  };

  const statusIndicatorProps: AvatarStatusIndicatorProps = {
    ...uiProps,
    ...componentProps.statusIndicatorProps,
    children: withIconA11y(runIfFn(uiProps.statusIndicators, uiProps)),
  };

  return {
    uiProps,
    wrapperProps,
    iconProps,
    initialsProps,
    imageProps,
    statusIndicatorProps,
  };
};

export type AvatarUIProps = AvatarUIState;

export type AvatarProps = Omit<AvatarWrapperProps, "children"> &
  AvatarUIStateProps & {
    children?: RenderProp<AvatarUIProps>;
  };

export type AvatarPropsReturn = {
  wrapperProps: AvatarWrapperProps;
  initialsProps: AvatarInitialsProps;
  imageProps: AvatarImageProps;
  iconProps: AvatarIconProps;
  statusIndicatorProps: AvatarStatusIndicatorProps;
  uiProps: AvatarUIProps;
};
