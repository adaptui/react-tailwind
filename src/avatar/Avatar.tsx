import * as React from "react";

import theme from "../theme";
import { ocx } from "../utils";
import { useImage } from "../utils/useImage";
import { GenericAvatar } from "../icons";
import { useAvatarGroup } from "./AvatarGroup";

function getInitials(name: string) {
  const [firstName, lastName] = name.split(" ");
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0);
}

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
  size?: "xs" | "sm" | "md" | "lg";
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
        fallback={elements.length > 0 ? children : fallback}
      />
      {badges}
    </div>
  );
};

export type AvatarImageProps = Pick<
  AvatarProps,
  "name" | "src" | "onError" | "fallback"
>;

export const AvatarImage: React.FC<AvatarImageProps> = ({
  src,
  onError,
  name,
  fallback = <GenericAvatar />,
}) => {
  const status = useImage({ src, onError });

  const hasLoaded = status === "loaded";
  const showFallback = !src || !hasLoaded;

  if (showFallback) {
    return <>{name ? (name ? getInitials?.(name) : null) : fallback}</>;
  }

  return (
    <img
      src={src}
      alt={name}
      className={ocx(theme.avatar.image)}
      style={{
        borderRadius: "inherit",
      }}
    />
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
