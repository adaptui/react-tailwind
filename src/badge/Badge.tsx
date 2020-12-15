import React from "react";
import classnames from "classnames";

import theme from "../theme";

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

export const Badge: React.FC<BadgeProps> = ({
  variant = "primary",
  size = "medium",
  children,
  ...props
}) => {
  return (
    <span
      className={classnames(
        theme.badge.base,
        theme.badge.size[size],
        theme.badge.variants[variant],
      )}
      {...props}
    >
      {children}
    </span>
  );
};
