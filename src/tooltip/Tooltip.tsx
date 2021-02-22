import React from "react";
import {
  TooltipArrow,
  useTooltipState,
  TooltipReference,
  TooltipInitialState,
  Tooltip as ReakitTooltip,
} from "reakit/Tooltip";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { TooltipBody } from "./TooltipBody";
import { forwardRefWithAs } from "../utils/types";

export type TooltipProps = TooltipInitialState & {
  /**
   * title of the tooltip
   */
  title?: string;
  className?: string;
  children: React.ReactNode;
  /**
   * How large should the tag be?
   *
   * @default "sm"
   */
  size?: keyof Renderlesskit.GetThemeValue<"tooltip", "size">;
  /**
   * How the tag should be styled?
   *
   * @default "primary"
   */
  variant?: keyof Renderlesskit.GetThemeValue<"tooltip", "variant">;
  /**
   * prefix icon
   */
  icon?: React.ReactNode;
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

export const Tooltip = ({
  title,
  children,
  size = "sm",
  variant = "primary",
  ...props
}: TooltipProps) => {
  const tooltip = useTooltipState({ ...props });
  const theme = useTheme();

  const arrowStyles = cx(
    theme.tooltip.arrow.base,
    theme.tooltip.arrow.variant[variant],
  );

  const arrowSizeMap = {
    xs: 15,
    sm: 20,
    lg: 25,
  };

  const transformMap: Record<string, string> = {
    top: "rotateZ(180deg) translateY(0.5px)",
    right: "rotateZ(-90deg) translateY(0.5px)",
    bottom: "rotateZ(360deg)",
    left: "rotateZ(90deg) translateY(0.5px)",
  };

  return (
    <>
      <TooltipReference {...tooltip}>
        {referenceProps =>
          React.cloneElement(children as React.ReactElement, referenceProps)
        }
      </TooltipReference>
      <ReakitTooltip {...tooltip} {...props}>
        <TooltipBody {...props} variant={variant} size={size}>
          <TooltipArrow {...tooltip} size={arrowSizeMap[size]}>
            <TooltipArrowIcon
              className={arrowStyles}
              style={{
                transform: transformMap[tooltip.placement],
              }}
            />
          </TooltipArrow>
          {title}
        </TooltipBody>
      </ReakitTooltip>
    </>
  );
};
