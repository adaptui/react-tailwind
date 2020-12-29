import React from "react";

import { AvatarProps } from ".";
import { GenericAvatar } from "../icons";
import { useImage } from "../utils/useImage";
import { useOverride, useTheme } from "../theme";

function getInitials(name: string) {
  const [firstName, lastName] = name.split(" ");
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0);
}

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
  const theme = useTheme();
  const ocx = useOverride();

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

export default AvatarImage;
