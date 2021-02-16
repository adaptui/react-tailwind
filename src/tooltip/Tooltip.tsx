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
import { TooltipArrowIcon } from "../icons/TooltipArrow";
import { TooltipBody } from "./TooltipBody";

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
   * size of the arrow
   */
  arrowSize?: number;
  /**
   * prefix icon
   */
  icon?: React.ReactNode;
};

export const Tooltip = ({
  title,
  children,
  size = "sm",
  variant = "primary",
  arrowSize = 20,
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
    top: "rotateZ(180deg)",
    right: "rotateZ(-90deg)",
    bottom: "rotateZ(360deg)",
    left: "rotateZ(90deg)",
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
          <TooltipArrow size={arrowSizeMap[size]} {...tooltip}>
            <TooltipArrowIcon
              style={{ transform: transformMap[tooltip.placement] }}
              className={arrowStyles}
            />
          </TooltipArrow>
          {title}
        </TooltipBody>
      </ReakitTooltip>
    </>
  );
};
