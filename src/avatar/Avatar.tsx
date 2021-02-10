import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { GenericAvatar } from "../icons";
import { AvatarName } from "./AvatarName";
import { AvatarIcon } from "./AvatarIcon";
import { AvatarImage } from "./AvatarImage";
import { useImage } from "../utils/useImage";
import { useAvatarGroup } from "./AvatarGroup";
import { forwardRefWithAs } from "../utils/types";
import { createContext, runIfFn } from "../utils";
import { AvatarBadge } from "./AvatarBadge";

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
  status?: "online" | "sleep" | "typing";
  position?: "top-left" | "top-right" | "bottom-right" | "bottom-left";
};

export type AvatarProps = Omit<BoxProps, "onError"> & AvatarInitialProps;

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
      children,
      className,
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

    const context: AvatarInitialProps = React.useMemo(
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
      ],
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

    return (
      <AvatarProvider value={context}>
        <Box ref={ref} className={avatarStyles} {...rest}>
          {children ? (
            runIfFn(children, context)
          ) : (
            <>
              {!showFallback ? (
                <AvatarImage />
              ) : name ? (
                <AvatarName />
              ) : (
                <AvatarIcon>
                  {fallback ? fallback : <GenericAvatar />}
                </AvatarIcon>
              )}
              {status ? <AvatarBadge /> : null}
            </>
          )}
        </Box>
      </AvatarProvider>
    );
  },
);

export type AvatarContext = AvatarInitialProps;

const [AvatarProvider, useAvatarContext] = createContext<AvatarContext>({
  name: "AvatarContext",
  strict: false,
});

export { useAvatarContext };

export function initials(name: string) {
  const [firstName, lastName] = name.split(" ");
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0);
}
