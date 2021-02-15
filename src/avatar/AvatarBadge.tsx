import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { AvatarProps, useAvatarContext } from "./Avatar";
import { MoonIcon, DotIcon } from "../icons";

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

  const badgeStyles = cx(
    theme.avatar.badge.base,
    theme.avatar.badge.size[size],
    theme.avatar.badge.position[position],
    className,
  );

  const Status = () => {
    if (_status === "online")
      return <DotIcon className={theme.avatar.badge.statuses.online} />;
    if (_status === "sleep")
      return <MoonIcon className={theme.avatar.badge.statuses.sleep} />;
    if (_status === "typing") return <TypingAnimation />;

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
          className: theme.avatar.badge.statuses[_status],
        })
      ) : (
        <Status />
      )}
    </Box>
  );
});

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

  const baseStyles = cx(
    theme.avatar.badge.statuses.typing.base,
    theme.avatar.badge.statuses.typing.size[size],
    className,
  );
  const typingStyles = cx(
    theme.avatar.badge.statuses.typing.circle,
    circleStyle,
  );

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
