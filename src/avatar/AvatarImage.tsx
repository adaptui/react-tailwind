import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { useAvatarContext } from "./Avatar";
import { forwardRefWithAs } from "../utils/types";

export type AvatarImageProps = BoxProps & {};

export const AvatarImage = forwardRefWithAs<
  AvatarImageProps,
  HTMLImageElement,
  "img"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const { src, name, loading } = useAvatarContext();

  return (
    <Box
      as="img"
      ref={ref}
      data-testid="testid-avatarimg"
      src={src}
      alt={name}
      loading={loading}
      className={cx(theme.avatar.image, className)}
      {...rest}
    />
  );
});

AvatarImage.displayName = "AvatarImage";
