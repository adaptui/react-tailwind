import * as React from "react";
import { Role, RoleProps, VisuallyHidden } from "reakit";

import theme from "../theme";
import { ocx, __DEV__ } from "../utils";

export interface SpinnerProps extends RoleProps {
  /**
   * For accessibility, it is important to add a fallback loading text.
   * This text will be visible to screen readers.
   */
  label?: string;
  /**
   * How large should the button be?
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * How the spinner should be displayed?
   */
  stroke?: "transparent" | "visible";
}

/**
 * Spinner is used to indicate the loading state of a page or a component,
 * It renders a `div` by default.
 */
export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  (props, ref) => {
    const {
      label = "Loading...",
      size = "md",
      stroke = "transparent",
      className,
      ...rest
    } = props;
    const spinnerStyles = ocx(
      theme.spinner.base,
      theme.spinner.size[size],
      theme.spinner.stroke[stroke],
      className,
    );

    return (
      <Role ref={ref} className={spinnerStyles} {...rest}>
        {label && <VisuallyHidden>{label}</VisuallyHidden>}
      </Role>
    );
  },
);

if (__DEV__) {
  Spinner.displayName = "Spinner";
}
