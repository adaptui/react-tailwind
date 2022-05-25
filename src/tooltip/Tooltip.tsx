import * as React from "react";

import { TooltipAnchor } from "./TooltipAnchor";
import { TooltipArrow } from "./TooltipArrow";
import { TooltipPrefix } from "./TooltipPrefix";
import { TooltipProps, useTooltipProps } from "./TooltipProps";
import { TooltipSuffix } from "./TooltipSuffix";
import { TooltipWrapper } from "./TooltipWrapper";

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (props, ref) => {
    const {
      uiProps,
      wrapperProps,
      anchorProps,
      arrowProps,
      prefixProps,
      suffixProps,
    } = useTooltipProps(props);
    const { prefix, content, suffix, withArrow } = uiProps;

    return (
      <>
        <TooltipAnchor {...anchorProps} />
        <TooltipWrapper ref={ref} {...wrapperProps}>
          <>
            {prefix ? <TooltipPrefix {...prefixProps} /> : null}
            {content}
            {suffix ? <TooltipSuffix {...suffixProps} /> : null}
            {withArrow ? <TooltipArrow {...arrowProps} /> : null}
          </>
        </TooltipWrapper>
      </>
    );
  },
);

Tooltip.displayName = "Tooltip";
