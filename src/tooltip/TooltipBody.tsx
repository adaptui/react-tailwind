import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "..";
import { Box, BoxProps } from "../box";
import { TooltipProps } from "./Tooltip";
import { forwardRefWithAs } from "../utils/types";

type TooltipBodyProps = BoxProps & Pick<TooltipProps, "prefix"> & {};

export const TooltipBody = forwardRefWithAs<
  TooltipBodyProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { id, prefix, className, children, ...rest } = props;

  const theme = useTheme();
  const tooltipStyles = cx(theme.tooltip.base);

  return (
    <Box as="span" ref={ref} className={tooltipStyles} {...rest}>
      {prefix && (
        <Box as="span" className={theme.tooltip.icon.base}>
          {prefix}
        </Box>
      )}
      {children}
    </Box>
  );
});
