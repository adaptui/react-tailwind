import React from "react";
import { cx } from "@renderlesskit/react";
import { Box, BoxProps } from "../box/Box";

import { useTheme } from "../theme";
import { forwardRefWithAsSimple } from "../utils/types";

type Variants = "primary" | "secondary" | "outline";

export type BadgeProps = BoxProps & {
  /**
   * badge variants
   *
   * @default "primary"
   */
  variant?: Variants;
  /**
   * How large should the button be?
   *
   * @default "sm"
   */
  size?: "xs" | "sm" | "md" | "lg";
};

export const Badge = forwardRefWithAsSimple<
  BadgeProps,
  HTMLButtonElement,
  "span"
>((props, ref) => {
  const {
    variant = "primary",
    size = "sm",
    children,
    className,
    ...rest
  } = props;

  const theme = useTheme();
  const badgeStyles = cx(
    theme.badge.base,
    theme.badge.size[size],
    theme.badge.variants[variant],
    className,
  );

  return (
    <Box as="span" ref={ref} className={badgeStyles} {...rest}>
      {children}
    </Box>
  );
});
