import { useMemo } from "react";

import { getComponentProps, RenderProp, withIconA11y } from "../utils";

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
  let uiProps: AvatarUIProps = uiState;

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

  const wrapperProps: AvatarWrapperProps = useMemo(
    () => ({
      ...uiProps,
      ...restProps,
      ...componentProps.wrapperProps,
    }),
    [componentProps.wrapperProps, restProps, uiProps],
  );

  const iconProps: AvatarIconProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.iconProps,
      children: withIconA11y(uiProps.icon, uiProps),
    }),
    [componentProps.iconProps, uiProps],
  );

  const initialsProps: AvatarInitialsProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.initialsProps,
      children: uiProps.initials,
    }),
    [componentProps.initialsProps, uiProps],
  );

  const imageProps: AvatarImageProps = useMemo(
    () => ({
      ...uiProps,
      src,
      srcSet,
      sizes,
      loading,
      crossOrigin,
      onLoad,
      onError,
      ...componentProps.imageProps,
    }),
    [
      componentProps.imageProps,
      crossOrigin,
      loading,
      onError,
      onLoad,
      sizes,
      src,
      srcSet,
      uiProps,
    ],
  );

  const finalStatusIndicators = withIconA11y(uiProps.statusIndicators, uiProps);
  const statusIndicatorProps: AvatarStatusIndicatorProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.statusIndicatorProps,
      children: finalStatusIndicators,
    }),
    [componentProps.statusIndicatorProps, finalStatusIndicators, uiProps],
  );

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
