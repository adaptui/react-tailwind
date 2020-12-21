import * as React from "react";

import theme from "../theme";
import { ocx } from "../utils";
import { AvatarImage } from "./AvatarImage";
import { useAvatarGroup } from "./AvatarGroup";

export type AvatarProps = {
  /**
   * URL for the avatar image
   */
  src?: string;
  /**
   * Name prop used for `alt` & calculate placeholder initials.
   */
  name?: string;
  /**
   * How large should the button be?
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * Custom fallback
   */
  fallback?: React.ReactNode;
  /**
   * Function called when image failed to load
   */
  onError?: (e: any) => void;
  className?: string;
};

export const Avatar: React.FC<AvatarProps> = ({
  name,
  src,
  size,
  onError,
  className,
  fallback,
  children,
  ...rest
}) => {
  const group = useAvatarGroup();
  const _size = size || group?.size || "md";
  const avatarStyles = ocx(
    theme.avatar.base,
    theme.avatar.size[_size],
    className,
  );

  const _children = React.Children.toArray(children);

  const badges = _children.filter(child => {
    return (child as JSX.Element).type === AvatarBadge;
  });
  const elements = _children.filter(child => {
    return (child as JSX.Element).type !== AvatarBadge;
  });

  return (
    <div aria-label={name} {...rest} className={avatarStyles}>
      <AvatarImage
        src={src}
        name={name}
        onError={onError}
        fallback={elements.length > 0 ? elements : fallback}
      />
      {badges}
    </div>
  );
};

export type AvatarBadgeProps = {
  position?: "top-left" | "top-right" | "bottom-right" | "bottom-left";
};

export const AvatarBadge: React.FC<AvatarBadgeProps> = ({
  position = "bottom-right",
  children,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={ocx(
        theme.avatar.badge.base,
        theme.avatar.badge.position[position],
      )}
    >
      {children}
    </div>
  );
};
