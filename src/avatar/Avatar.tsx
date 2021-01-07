import * as React from "react";

import theme from "../theme";
import { AvatarImage } from "./AvatarImage";
import { useAvatarGroup } from "./AvatarGroup";
import { cx } from "@renderlesskit/react";

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
   * How large should avatar be?
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
  const avatarStyles = cx(
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
      {React.Children.map(badges, badge => {
        if (React.isValidElement(badge)) {
          return React.cloneElement(badge, { size: _size });
        }
      })}
    </div>
  );
};

export type AvatarBadgeProps = {
  position?: "top-left" | "top-right" | "bottom-right" | "bottom-left";
} & Pick<AvatarProps, "size">;

export const AvatarBadge: React.FC<AvatarBadgeProps> = ({
  position = "bottom-right",
  size = "md",
  children,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={cx(
        theme.avatar.badge.size[size],
        theme.avatar.badge.base,
        theme.avatar.badge.position[position],
      )}
    >
      {children}
    </div>
  );
};
