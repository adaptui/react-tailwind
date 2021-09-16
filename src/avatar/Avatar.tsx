import * as React from "react";
import { twMerge as cx } from "tailwind-merge";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { GenericAvatar } from "../icons";
import { AvatarName } from "./AvatarName";
import { AvatarIcon } from "./AvatarIcon";
import { AvatarImage } from "./AvatarImage";
import { AvatarBadge } from "./AvatarBadge";
import { useImage } from "../hooks/useImage";
import { useAvatarGroup } from "./AvatarGroup";
import { createContext, runIfFn } from "../utils";
import { forwardRefWithAs, RenderProp } from "../utils/types";

export type AvatarInitialProps = {
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
  getInitials?: (name?: string) => string | undefined;
  /**
   * Function called when image failed to load
   */
  onError?: () => void;
  /**
   * The default avatar used as fallback when `name`, and `src`
   * is not specified.
   */
  fallback?: React.ReactNode;
  /**
   * If `true`, the `Avatar` will show a `border` around it.
   *
   * Best for a group of avatars
   */
  showBorder?: boolean;
  /**
   * Color of the `border` to match it's parent background.
   */
  borderColor?: string;
  /**
   * Shows AvatarBadge with the given type
   */
  status?: keyof Renderlesskit.GetThemeValue<"avatar", "status">;
  /**
   * Position for the AvatarBadge
   * @default "bottom-right"
   */
  position?: keyof Renderlesskit.GetThemeValue<"avatar", "badge", "position">;
};

export type AvatarContext = AvatarInitialProps & { showFallback: boolean };

const [AvatarProvider, useAvatarContext] = createContext<AvatarContext>({
  name: "AvatarContext",
  strict: false,
});

export { useAvatarContext };

type AvatarRenderProps = RenderProp<AvatarContext>;

export type AvatarProps = Omit<BoxProps, "onError"> &
  AvatarInitialProps &
  AvatarRenderProps;

export const Avatar = forwardRefWithAs<AvatarProps, HTMLDivElement, "div">(
  (props, ref) => {
    const {
      name,
      src,
      size,
      onError,
      fallback,
      getInitials = initials,
      loading,
      status,
      position,
      showBorder,
      borderColor,
      children,
      className,
      ...rest
    } = props;

    const group = useAvatarGroup();
    const _size = size || group?.size || "md";
    const _showBorder = showBorder || group?.showBorder || false;
    const _borderColor = borderColor || group?.borderColor || false;
    const theme = useTheme();
    const avatarStyles = cx(
      theme.avatar.base,
      theme.avatar.size[_size],
      _showBorder ? theme.avatar.border.width[_size] : "",
      _showBorder && _borderColor ? _borderColor : theme.avatar.border.color,
      className,
    );

    /**
     * Use the image hook to only show the image when it has loaded
     */
    const imageStatus = useImage({ src, onError });
    const hasLoaded = imageStatus === "loaded";

    /**
     * Fallback avatar applies under 2 conditions:
     * - If `src` was passed and the image has not loaded or failed to load
     * - If `src` wasn't passed
     *
     * In this case, we'll show either the name avatar or default avatar
     */
    const showFallback = !src || !hasLoaded;

    const context: AvatarContext = React.useMemo(
      () => ({
        size: _size,
        src,
        name,
        loading,
        getInitials,
        onError,
        fallback,
        status,
        position,
        showFallback,
      }),
      [
        _size,
        src,
        name,
        loading,
        getInitials,
        onError,
        fallback,
        status,
        position,
        showFallback,
      ],
    );

    return (
      <AvatarProvider value={context}>
        <Box
          ref={ref}
          className={avatarStyles}
          {...rest}
          data-testid="testid-avatar_children"
        >
          {children ? (
            runIfFn(children, { ...context, getInitials })
          ) : (
            <>
              <AvatarContents />
              {status ? <AvatarBadge /> : null}
            </>
          )}
        </Box>
      </AvatarProvider>
    );
  },
);

Avatar.displayName = "Avatar";

export function initials(name?: string) {
  if (!name) return;
  const [firstName, lastName] = name.split(" ");
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0);
}

export const AvatarContents = () => {
  const { showFallback, name, fallback } = useAvatarContext();
  return (
    <>
      {!showFallback ? (
        <AvatarImage />
      ) : name ? (
        <AvatarName />
      ) : (
        <AvatarIcon>{fallback ? fallback : <GenericAvatar />}</AvatarIcon>
      )}
    </>
  );
};
