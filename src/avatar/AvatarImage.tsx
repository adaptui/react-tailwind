import React from "react";
import { cx } from "@renderlesskit/react";

import theme from "../theme";
import { AvatarProps } from ".";
import { useImage } from "../utils/useImage";
import { GenericAvatar } from "../icons";

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

  if (showFallback) {
    return <>{name ? (name ? getInitials?.(name) : null) : fallback}</>;
  }

  return (
    <img
      data-testid="testid-avatarimg"
      src={src}
      alt={name}
      className={cx(theme.avatar.image)}
      style={{
        borderRadius: "inherit",
      }}
    />
  );
};

export default AvatarImage;
