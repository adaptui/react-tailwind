import React from "react";
import { cx } from "@renderlesskit/react";

import { AvatarProps } from ".";
import { useTheme } from "../theme";
import { useImage } from "../utils/useImage";
import { forwardRefWithAs } from "../utils/types";
import { Box, BoxProps } from "../box";
import { GenericAvatar } from "../icons";

export type AvatarImageProps = Pick<
  AvatarProps,
  "name" | "src" | "onError" | "icon" | "getInitials"
>;

export const AvatarImage: React.FC<AvatarImageProps> = ({
  src,
  onError,
  name,
  getInitials,
  icon,
}) => {
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
  const theme = useTheme();

  if (showFallback) {
    return (
      <>
        {name ? (
          <AvatarName getInitials={getInitials} name={name} />
        ) : icon ? (
          icon
        ) : (
          <GenericAvatar />
        )}
      </>
    );
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

interface AvatarNameProps
  extends BoxProps,
    Pick<AvatarProps, "name" | "getInitials"> {}

/**
 * The avatar name container
 */
const AvatarName = forwardRefWithAs<AvatarNameProps>((props, ref) => {
  const { name, getInitials, className, ...rest } = props;
  const theme = useTheme();

  const avatarNameStyles = cx(theme.avatar.name, className);

  return (
    <Box aria-label={name} ref={ref} className={avatarNameStyles} {...rest}>
      {name ? getInitials?.(name) : null}
    </Box>
  );
});
