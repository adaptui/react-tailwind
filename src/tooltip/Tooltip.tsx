import React from "react";
import {
  TooltipArrow,
  useTooltipState,
  TooltipReference,
  Tooltip as ReakitTooltip,
  TooltipInitialState,
} from "reakit/Tooltip";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { TooltipArrowIcon } from "../icons/TooltipArrow";

export type TooltipProps = TooltipInitialState & {
  title: string;
  className?: string;
  children: React.ReactElement;
  size?: keyof Renderlesskit.GetThemeValue<"tooltip", "size">;
  variant?: keyof Renderlesskit.GetThemeValue<"tooltip", "variant">;
};

export const Tooltip = ({
  title,
  children,
  className,
  size = "sm",
  variant = "primary",
  ...props
}: TooltipProps) => {
  const tooltip = useTooltipState({ ...props });
  const theme = useTheme();

  const tooltipStyles = cx(
    theme.tooltip.base,
    theme.tooltip.size[size],
    theme.tooltip.variant[variant],
  );

  return (
    <>
      <TooltipReference {...tooltip}>
        {referenceProps => React.cloneElement(children, referenceProps)}
      </TooltipReference>
      <ReakitTooltip {...tooltip} {...props}>
        <div className={tooltipStyles}>
          <TooltipArrow size={20} {...tooltip}>
            <TooltipArrowIcon className={theme.tooltip.arrow} />
          </TooltipArrow>
          {title}
        </div>
      </ReakitTooltip>
    </>
  );
};
