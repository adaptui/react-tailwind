import React from "react";
import { Button as AriaButton } from "reakit";

import { theme } from "../theme";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  const { button } = theme;
  const modeStyles = primary ? button.primary : button.secondary;

  return (
    <AriaButton
      className={[button.base, button[size], modeStyles].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </AriaButton>
  );
};
