import * as React from "react";

import { useHasMounted } from "../hooks/useMounted";
import { useTheme } from "../theme";
import { cx, RenderProp, withIconA11y } from "../utils";

import { TooltipArrow } from "./TooltipArrow";
import { TooltipArrowContent } from "./TooltipArrowContent";
import { TooltipContent } from "./TooltipContent";
import { useTooltipProps } from "./TooltipProps";
import { TooltipReference } from "./TooltipReference";
import { TooltipInitialState, TooltipStateReturn } from "./TooltipState";
import { TooltipWrapper, TooltipWrapperHTMLProps } from "./TooltipWrapper";

export type TooltipOwnProps = Omit<TooltipWrapperHTMLProps, "prefix"> & {};

export type TooltipProps = TooltipInitialState &
  TooltipOwnProps &
  RenderProp<TooltipStateReturn>;

export const Tooltip = React.forwardRef<HTMLInputElement, TooltipProps>(
  (props, ref) => {
    const {
      state,
      content,
      prefix,
      suffix,
      wrapperProps,
      referenceProps,
      contentProps,
      arrowProps,
      arrowContentProps,
    } = useTooltipProps(props);

    const theme = useTheme("tooltip");
    const suffixStyles = cx(theme.suffix);
    const prefixStyles = cx(theme.prefix);

    const mounted = useHasMounted();

    if (!mounted) {
      return null;
    }

    return (
      <>
        <TooltipReference {...referenceProps} />
        <TooltipWrapper ref={ref} {...wrapperProps}>
          <TooltipContent {...contentProps}>
            {prefix ? withIconA11y(prefix, { className: prefixStyles }) : null}
            {content}
            {suffix ? withIconA11y(suffix, { className: suffixStyles }) : null}
            {state?.withArrow ? (
              <TooltipArrow {...arrowProps}>
                <TooltipArrowContent {...arrowContentProps} />
              </TooltipArrow>
            ) : null}
          </TooltipContent>
        </TooltipWrapper>
      </>
    );
  },
);

Tooltip.displayName = "Tooltip";
