import * as React from "react";

import { Box, BoxProps } from "../box";
import { DotIcon, MoonIcon } from "../icons";
import { useTheme } from "../theme";
import { forwardRefWithAs, tcm } from "../utils";

import { AvatarProps, useAvatarContext } from "./Avatar";

export type AvatarBadgeProps = BoxProps & Pick<AvatarProps, "status"> & {};

export const AvatarBadge = forwardRefWithAs<
  AvatarBadgeProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, children, status, ...rest } = props;
  const theme = useTheme();
  const {
    size = "md",
    status: contextStatus,
    position = "bottom-right",
  } = useAvatarContext();

  const _status = status || contextStatus || "online";

  const badgeStyles = tcm(
    theme.avatar.badge.base,
    theme.avatar.badge.size[size],
    theme.avatar.badge.position[position],
    className,
  );

  const Status = () => {
    if (_status === "online")
      return (
        <DotIcon
          className={tcm(
            theme.avatar.status.online.base,
            theme.avatar.status.online.size[size],
          )}
        />
      );
    if (_status === "offline")
      return (
        <MoonIcon
          className={tcm(
            theme.avatar.status.offline.base,
            theme.avatar.status.offline.size[size],
          )}
        />
      );
    if (_status === "typing")
      return (
        <TypingAnimation
          className={tcm(
            theme.avatar.status.typing.base,
            theme.avatar.status.typing.size[size],
          )}
        />
      );

    return null;
  };

  return (
    <Box
      ref={ref}
      className={badgeStyles}
      data-testid="testid-avatar-badge"
      {...rest}
    >
      {children ? (
        React.cloneElement(children as React.ReactElement, {
          className: theme.avatar.status?.[_status]?.base,
        })
      ) : (
        <Status />
      )}
    </Box>
  );
});

AvatarBadge.displayName = "AvatarBadge";

export type TypingAnimationProps = BoxProps & {
  circleStyle?: string;
};

export const TypingAnimation = forwardRefWithAs<
  TypingAnimationProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, circleStyle, ...rest } = props;
  const theme = useTheme();
  const { size = "md" } = useAvatarContext();

  const baseStyles = tcm(
    theme.avatar.status.typing.base,
    theme.avatar.status.typing.size[size],
    className,
  );
  const typingStyles = tcm(theme.avatar.status.typing.circle, circleStyle);

  return (
    <Box ref={ref} className={baseStyles} {...rest}>
      {["lg", "xl"].includes(size) ? (
        <>
          <Box className={typingStyles} />
          <Box className={typingStyles} style={{ animationDelay: "0.67s" }} />
          <Box className={typingStyles} style={{ animationDelay: "1.34s" }} />
        </>
      ) : (
        <>
          <Box className={typingStyles} />
          <Box className={typingStyles} style={{ animationDelay: "1s" }} />
        </>
      )}
    </Box>
  );
});

TypingAnimation.displayName = "TypingAnimation";
