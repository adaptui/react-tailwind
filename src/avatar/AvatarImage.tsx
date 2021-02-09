import React from "react";
import { cx } from "@renderlesskit/react";

import { AvatarProps } from ".";
import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { GenericAvatar } from "../icons";
import { useImage } from "../utils/useImage";
import { forwardRefWithAs } from "../utils/types";

export type AvatarImageProps = BoxProps &
  Pick<
    AvatarProps,
    "src" | "onError" | "fallback" | "name" | "loading" | "size"
  > &
  Pick<Required<AvatarProps>, "getInitials">;

export const AvatarImage = forwardRefWithAs<
  AvatarImageProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const {
    src,
    onError,
    name,
    getInitials,
    fallback,
    loading,
    size = "md",
  } = props;
  const theme = useTheme();
  /**
   * Use the image hook to only show the image when it has loaded
   */
  const status = useImage({ src, onError });
  const hasLoaded = status === "loaded";

  /**
   * Fallback avatar applies under 2 conditions:
   * - If `src` was passed and the image has not loaded or failed to load
   * - If `src` wasn't passed
   *
   * In this case, we'll show either the name avatar or default avatar
   */
  const showFallback = !src || !hasLoaded;

  if (showFallback) {
    return (
      <>
        {name ? (
          <AvatarName
            getInitials={getInitials}
            name={name}
            size={size}
            ref={ref}
          />
        ) : fallback ? (
          React.cloneElement(fallback as React.ReactElement, { ref })
        ) : (
          <GenericAvatar ref={ref} />
        )}
      </>
    );
  }

  return (
    <Box
      as="img"
      ref={ref}
      data-testid="testid-avatarimg"
      src={src}
      alt={name}
      loading={loading}
      className={cx(theme.avatar.image)}
    />
  );
});

export type AvatarNameProps = BoxProps &
  Pick<AvatarProps, "size"> &
  Pick<Required<AvatarProps>, "name" | "getInitials">;

const AvatarName = forwardRefWithAs<AvatarNameProps>((props, ref) => {
  const { name, getInitials, className, size, ...rest } = props;
  const initials = getInitials(name);

  return (
    <Box aria-label={name} ref={ref} {...rest}>
      {size === "xs" ? initials?.charAt(0) : initials}
    </Box>
  );
});
