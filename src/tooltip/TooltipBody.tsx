import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "..";
import { Box, BoxProps } from "../box";
import { TooltipProps } from "./Tooltip";
import { forwardRefWithAs } from "../utils/types";

type TooltipBodyProps = BoxProps &
  Pick<TooltipProps, "size" | "variant" | "icon"> & {};

export const TooltipBody = forwardRefWithAs<
  TooltipBodyProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const {
    id,
    size = "sm",
    variant = "primary",
    icon,
    className,
    children,
    ...rest
  } = props;

  const theme = useTheme();
  const tooltipStyles = cx(
    theme.tooltip.base,
    theme.tooltip.size[size],
    theme.tooltip.variant[variant],
  );
  return (
    <Box as="span" ref={ref} className={tooltipStyles} {...rest}>
      {icon && (
        <Box as="span" className={theme.tooltip.icon[size]}>
          {icon}
        </Box>
      )}
      {children}
    </Box>
  );
});
