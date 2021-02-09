import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { Status, StatusProps } from "../common/Status";
import { AvatarImage } from "./AvatarImage";
import { useAvatarGroup } from "./AvatarGroup";
import { forwardRefWithAs } from "../utils/types";

export type AvatarProps = Omit<BoxProps, "onError"> & {
  /**
   * How large should avatar be?
   * @default "md"
   */
  size?: keyof Renderlesskit.GetThemeValue<"avatar", "size">;
  /**
   * URL for the avatar image
   */
  src?: string;
  /**
   * Name prop used for `alt` & calculate placeholder initials.
   */
  name?: string;
  /**
   * Defines loading strategy
   */
  loading?: "eager" | "lazy";
  /**
   * Function to get the initials to display
   */
  getInitials?: (name: string) => string;
  /**
   * Function called when image failed to load
   */
  onError?: () => void;
  /**
   * The default avatar used as fallback when `name`, and `src`
   * is not specified.
   * @type React.ReactElement
   */
  fallback?: React.ReactNode;
};

export const Avatar = forwardRefWithAs<AvatarProps, HTMLDivElement, "div">(
  (props, ref) => {
    const {
      name,
      src,
      size = "md",
      onError,
      className,
      fallback,
      getInitials = initials,
      loading,
      children,
      ...rest
    } = props;
    const group = useAvatarGroup();
    const _size = size || group?.size || "md";
    const theme = useTheme();
    const avatarStyles = cx(
      theme.avatar.base,
      theme.avatar.size[_size],
      className,
    );

    return (
      <Box ref={ref} className={avatarStyles} {...rest}>
        <AvatarImage
          src={src}
          getInitials={getInitials}
          name={name}
          onError={onError}
          fallback={fallback}
          loading={loading}
          size={size}
        />
        <AvatarBadge size={size}></AvatarBadge>
      </Box>
    );
  },
);

export type AvatarBadgeProps = BoxProps & {
  position?: "top-left" | "top-right" | "bottom-right" | "bottom-left";
} & Pick<AvatarProps, "size"> &
  Partial<StatusProps>;

export const AvatarBadge = forwardRefWithAs<
  AvatarBadgeProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const {
    size = "md",
    status = "typing",
    position = "bottom-right",
    ...rest
  } = props;
  const theme = useTheme();

  return (
    <Box
      as="div"
      ref={ref}
      className={cx(
        theme.avatar.badge.base,
        theme.avatar.badge.size[size],
        theme.avatar.badge.position[position],
      )}
      {...rest}
    >
      <Status status={status} />
    </Box>
  );
});

export function initials(name: string) {
  const [firstName, lastName] = name.split(" ");
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0);
}
