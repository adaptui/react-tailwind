import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";

export type SpinnerProps = BoxProps & {
  /**
   * For accessibility, it is important to add a fallback loading text.
   * This text will be visible to screen readers.
   *
   * @default "Loading..."
   */
  label?: string;
  /**
   * How large should the spinner be?
   *
   * @default "md"
   */
  size?: keyof Renderlesskit.GetThemeValue<"spinner", "size">;
  /**
   * How the spinner should be displayed?
   *
   * @default "transparent"
   */
  stroke?: keyof Renderlesskit.GetThemeValue<"spinner", "stroke">;
};

export const Spinner = forwardRefWithAs<SpinnerProps, HTMLDivElement, "div">(
  (props, ref) => {
    const {
      label = "Loading...",
      size = "md",
      stroke = "transparent",
      className,
      // Extracting it so that it doesn't appear in the DOM by mistake
      children,
      ...rest
    } = props;
    const theme = useTheme();
    const spinnerStyles = cx(
      theme.spinner.base,
      theme.spinner.size[size],
      theme.spinner.stroke[stroke],
      className,
    );

    return (
      <Box
        ref={ref}
        className={spinnerStyles}
        data-testid="testid-spinner"
        {...rest}
      >
        {label && <div className={theme.spinner.aria}>{label}</div>}
      </Box>
    );
  },
);

Spinner.displayName = "Spinner";
