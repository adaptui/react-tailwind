import React from "react";

import theme from "../theme";
import { ocx } from "../utils";
import { forwardRefWithAs, PropsWithAs } from "../utils/types";

export interface BadgeProps {
  /**
   * badge variants
   */
  variant?: "primary" | "secondary" | "violet" | "red" | "outline";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
}

function BadgeComponent(
  props: PropsWithAs<BadgeProps, "span">,
  ref: React.Ref<HTMLButtonElement>,
) {
  const {
    variant = "primary",
    size = "medium",
    children,
    className,
    ...rest
  } = props;

  const badgeStyles = ocx(
    theme.badge.base,
    theme.badge.size[size],
    theme.badge.variants[variant],
    className,
  );

  return (
    <span ref={ref} className={badgeStyles} {...rest}>
      {children}
    </span>
  );
}

export const Badge = forwardRefWithAs<BadgeProps, "span">(BadgeComponent);
