import * as React from "react";

import theme from "../theme";
import { ocx } from "../utils";
import { useImage } from "../utils/useImage";
import { GenericAvatar } from "../icons";

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
  size = "md",
  onError,
  className,
  fallback,
  children,
  ...rest
}) => {
  return (
    <span
      {...rest}
      className={ocx(theme.avatar.base, theme.avatar.size[size], className)}
    >
      <AvatarImage
        src={src}
        onError={onError}
        name={name}
        fallback={children || fallback}
      />
    </span>
  );
};

type AvatarImageProps = Pick<
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
    return name ? (
      <AvatarName name={name} />
    ) : (
      <span className={ocx(theme.avatar.name)}>{fallback}</span>
    );
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

const AvatarName: React.FC<{ name: string }> = ({ name, ...rest }) => {
  return (
    <div aria-label={name} {...rest} className={ocx(theme.avatar.name)}>
      {name ? getInitials?.(name) : null}
    </div>
  );
};
