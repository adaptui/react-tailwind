import React from "react";

import theme from "../theme";
import { ocx } from "../utils";
import { forwardRefWithAs, PropsWithAs } from "../utils/types";

type VariantsSolid = "primary" | "secondary" | "violet" | "red";
type VariantsTertiary = `${VariantsSolid}-tertiary`;

export interface BadgeProps {
  /**
   * badge variants
   */
  variant?: VariantsSolid | "outline";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Is tertiary variant?
   */
  tertiary?: boolean;
}

function BadgeComponent(
  props: PropsWithAs<BadgeProps, "span">,
  ref: React.Ref<HTMLButtonElement>,
) {
  const {
    variant = "primary",
    tertiary = false,
    size = "medium",
    children,
    className,
    ...rest
  } = props;

  const badgeStyles = ocx(
    theme.badge.base,
    theme.badge.size[size],
    tertiary
      ? theme.badge.tertiaryVariants[`${variant}-tertiary` as VariantsTertiary]
      : theme.badge.variants[variant],
    className,
  );

  return (
    <span ref={ref} className={badgeStyles} {...rest}>
      {children}
    </span>
  );
}

export const Badge = forwardRefWithAs<BadgeProps, "span">(BadgeComponent);
