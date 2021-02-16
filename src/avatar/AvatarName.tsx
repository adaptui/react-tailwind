import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { initials, useAvatarContext } from "./Avatar";

export type AvatarNameProps = BoxProps & {};

export const AvatarName = forwardRefWithAs<AvatarNameProps>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const { size = "md", name, getInitials = initials } = useAvatarContext();

  const initial = name ? getInitials(name) : null;

  if (!initial) return null;

  const nameStyles = cx(
    theme.avatar.name.base,
    theme.avatar.name.size[size],
    className,
  );

  return (
    <Box aria-label={name} ref={ref} className={nameStyles} {...rest}>
      {size === "xs" ? initial?.charAt(0) : initial}
    </Box>
  );
});
