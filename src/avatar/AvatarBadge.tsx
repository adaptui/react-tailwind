import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { useAvatarContext } from "./Avatar";
import { MoonIcon, DotIcon } from "../icons";

export type AvatarBadgeProps = BoxProps & {};

export const AvatarBadge = forwardRefWithAs<
  AvatarBadgeProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, children, ...rest } = props;
  const theme = useTheme();
  const {
    size = "md",
    status = "online",
    position = "bottom-right",
  } = useAvatarContext();

  const Status = () => {
    if (status === "online")
      return <DotIcon className={theme.avatar.badge.online} />;
    if (status === "sleep")
      return <MoonIcon className={theme.avatar.badge.sleep} />;
    if (status === "typing") return <TypingAnimation />;

    return null;
  };

  return (
    <Box
      ref={ref}
      className={cx(
        theme.avatar.badge.base,
        theme.avatar.badge.size[size],
        theme.avatar.badge.position[position],
        className,
      )}
      {...rest}
    >
      {children ? children : <Status />}
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

  return (
    <Box
      ref={ref}
      className={cx(
        theme.avatar.badge.typing.base,
        theme.avatar.badge.typing.size[size],
        className,
      )}
      {...rest}
    >
      {["lg", "xl"].includes(size) ? (
        <>
          <Box className={cx(theme.avatar.badge.typing.circle, circleStyle)} />
          <Box
            className={cx(theme.avatar.badge.typing.circle, circleStyle)}
            style={{ animationDelay: "0.67s" }}
          />
          <Box
            className={cx(theme.avatar.badge.typing.circle, circleStyle)}
            style={{ animationDelay: "1.34s" }}
          />
        </>
      ) : (
        <>
          <Box className={cx(theme.avatar.badge.typing.circle, circleStyle)} />
          <Box
            className={cx(theme.avatar.badge.typing.circle, circleStyle)}
            style={{ animationDelay: "1s" }}
          />
        </>
      )}
    </Box>
  );
});
