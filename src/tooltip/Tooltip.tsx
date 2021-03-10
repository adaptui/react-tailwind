import {
  TooltipArrow,
  useTooltipState,
  TooltipReference,
  TooltipInitialState,
  Tooltip as ReakitTooltip,
} from "reakit/Tooltip";
import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { TooltipBody } from "./TooltipBody";
import { forwardRefWithAs } from "../utils/types";

export type TooltipProps = TooltipInitialState & {
  /**
   * title of the tooltip
   */
  title: string;
  /**
   * prefix element
   */
  prefix?: React.ReactNode;
  /**
   * Show/Hide the arrow
   *
   * @default true
   */
  hasArrow?: boolean;
  /**
   * How large should the arrow be?
   *
   * @default "30"
   */
  arrowSize?: string | number | undefined;
  /**
   * ClassNames for the Tooltip Body
   */
  className?: string;
  /**
   * Styles for the Tooltip Body
   */
  style?: React.CSSProperties;
  /**
   * Trigger for the Tooltip
   */
  children: React.ReactNode;
};

export const Tooltip = ({
  title,
  hasArrow = false,
  arrowSize = 17,
  prefix,
  className,
  style,
  children,
  ...rest
}: TooltipProps) => {
  const tooltip = useTooltipState(rest);
  const [side] = tooltip.placement.split("-");

  const theme = useTheme();
  const arrowStyles = cx(theme.tooltip.arrow.base);

  const transformMap: Record<string, string> = {
    top: "rotateZ(180deg)",
    right: "rotateZ(-90deg)",
    bottom: "",
    left: "rotateZ(90deg)",
  };

  return (
    <>
      {/* @ts-ignore */}
      <TooltipReference {...tooltip} ref={children?.ref}>
        {referenceProps =>
          React.cloneElement(children as React.ReactElement, referenceProps)
        }
      </TooltipReference>
      <ReakitTooltip
        {...tooltip}
        style={{
          ...tooltip.unstable_popoverStyles,
          display: tooltip.visible ? "flex" : "none",
        }}
      >
        {hasArrow && (
          <TooltipArrow {...tooltip} size={arrowSize}>
            <TooltipArrowIcon
              className={arrowStyles}
              style={{
                transform: transformMap[side],
              }}
            />
          </TooltipArrow>
        )}
        <TooltipBody prefix={prefix} className={className} style={style}>
          {title}
        </TooltipBody>
      </ReakitTooltip>
    </>
  );
};

const TooltipArrowIcon = forwardRefWithAs<BoxProps, HTMLOrSVGElement, "svg">(
  (props, ref) => {
    return (
      <Box as="svg" ref={ref} viewBox="0 0 30 30" {...props}>
        <path
          fill="currentColor"
          d="M10.068 24.97C7.751 27.38 5.237 30 2.634 30H0v1h31v-1h-2.634c-2.568 0-5.079-2.606-7.398-5.013C18.976 22.92 17.125 21 15.5 21c-1.62 0-3.454 1.91-5.432 3.97z"
        />
      </Box>
    );
  },
);