import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box/Box";
import { forwardRefWithAs } from "../utils/types";

export type BadgeProps = BoxProps & {
  /**
   * How large should the badge be?
   *
   * @default "sm"
   */
  size?: keyof Renderlesskit.GetThemeValue<"badge", "size">;
  /**
   * How the badge should be styled?
   *
   * @default "primary"
   */
  variant?: keyof Renderlesskit.GetThemeValue<"badge", "variant">;
};

export const Badge = forwardRefWithAs<BadgeProps, HTMLButtonElement, "span">(
  (props, ref) => {
    const { variant = "primary", size = "sm", className, ...rest } = props;
    const theme = useTheme();
    const badgeStyles = cx(
      theme.badge.base,
      theme.badge.size[size],
      theme.badge.variant[variant],
      className,
    );

    return <Box as="span" ref={ref} className={badgeStyles} {...rest} />;
  },
);

Badge.displayName = "Badge";
