import * as React from "react";

import { Button } from "../button";
import { useTheme } from "../theme";
import { cx, withIconA11y } from "../utils";

import { TooltipAnchor } from "./TooltipAnchor";
import { TooltipArrow } from "./TooltipArrow";
import { TooltipProps, useTooltipProps } from "./TooltipProps";
import { TooltipWrapper } from "./TooltipWrapper";

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (props, ref) => {
    const { uiProps, wrapperProps, anchorProps, arrowProps } =
      useTooltipProps(props);
    const { prefix, content, suffix, withArrow } = uiProps;

    const theme = useTheme("tooltip");
    const suffixStyles = cx(theme.suffix);
    const prefixStyles = cx(theme.prefix);

    return (
      <>
        <TooltipAnchor as={Button} {...anchorProps}>
          Tooltip
        </TooltipAnchor>
        <TooltipWrapper ref={ref} {...wrapperProps}>
          {prefix ? withIconA11y(prefix, { className: prefixStyles }) : null}
          {content}
          {suffix ? withIconA11y(suffix, { className: suffixStyles }) : null}
          {withArrow ? <TooltipArrow {...arrowProps} /> : null}
        </TooltipWrapper>
      </>
    );
  },
);

Tooltip.displayName = "Tooltip";
