import React from "react";
import classnames from "classnames";
import { Button as AriaButton } from "reakit";

import theme from "../theme";

export interface ButtonProps {
  /**
   * How large should the button be?
   */
  size?: "extra-small" | "small" | "medium" | "large";
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  size = "medium",
  ...props
}) => {
  return (
    <AriaButton
      className={classnames(theme.button.base, theme.button.size[size])}
      {...props}
    >
      {props.children}
    </AriaButton>
  );
};
