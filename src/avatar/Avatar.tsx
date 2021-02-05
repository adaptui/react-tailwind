import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { GenericAvatar } from "../icons";
import { AvatarImage } from "./AvatarImage";
import { useAvatarGroup } from "./AvatarGroup";
import { forwardRefWithAs } from "../utils/types";

export type AvatarProps = BoxProps & {
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
  size?: keyof Renderlesskit.GetThemeValue<"avatar", "size">;
  /**
   * The default avatar used as fallback when `name`, and `src`
   * is not specified.
   * @type React.ReactElement
   */
  icon?: React.ReactNode;
  /**
   * Function called when image failed to load
   */
  onError?: (e: any) => void;
  /**
   * Function to get the initials to display
   */
  getInitials?: (name: string) => string;
};

export const Avatar = forwardRefWithAs<AvatarProps, HTMLDivElement, "div">(
  (props, ref) => {
    const {
      name,
      src,
      size,
      onError,
      className,
      icon,
      getInitials = initials,
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

    // const _children = React.Children.toArray(children);

    // const badges = _children.filter(child => {
    //   return (child as JSX.Element).type === AvatarBadge;
    // });
    // const elements = _children.filter(child => {
    //   return (child as JSX.Element).type !== AvatarBadge;
    // });

    return (
      <Box ref={ref} aria-label={name} {...rest} className={avatarStyles}>
        <AvatarImage
          src={src}
          getInitials={getInitials}
          name={name}
          onError={onError}
          icon={icon}
        />
        {/* {React.Children.map(badges, badge => {
          if (React.isValidElement(badge)) {
            return React.cloneElement(badge, { size: _size });
          }
        })} */}
      </Box>
    );
  },
);

export type AvatarBadgeProps = {
  position?: "top-left" | "top-right" | "bottom-right" | "bottom-left";
} & Pick<AvatarProps, "size">;

export const AvatarBadge: React.FC<AvatarBadgeProps> = ({
  position = "bottom-right",
  size = "md",
  children,
  ...rest
}) => {
  const theme = useTheme();

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

function initials(name: string) {
  const [firstName, lastName] = name.split(" ");
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0);
}
