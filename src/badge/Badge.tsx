import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";

export type BadgeProps = BoxProps & {
  /**
   * How large should the badge be?
   *
   * @default md
   */
  size?: keyof Renderlesskit.GetThemeValue<"badge", "size">;

  /**
   * How the badge should look?
   *
   * @default solid
   */
  variant?: keyof Renderlesskit.GetThemeValue<"badge", "variant">;

  /**
   * How the badge should be themed?
   *
   * @default default
   */
  themeColor?: keyof Renderlesskit.GetThemeValue<"badge", "variant", "solid">;
};

export const Badge = forwardRefWithAs<BadgeProps, HTMLSpanElement, "span">(
  (props, ref) => {
    const {
      size = "md",
      variant = "solid",
      themeColor = "default",
      className,
      ...rest
    } = props;

    const theme = useTheme();
    const badgeStyles = cx(
      theme.badge.base,
      theme.badge.size[size],
      theme.badge.variant[variant][themeColor],
      className,
    );

    return <Box ref={ref} as="span" className={badgeStyles} {...rest} />;
  },
);

Badge.displayName = "Badge";
