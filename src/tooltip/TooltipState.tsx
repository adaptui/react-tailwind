import {
  TooltipActions as RenderlesskitTooltipActions,
  TooltipInitialState as RenderlesskitTooltipInitialState,
  TooltipState as RenderlesskitTooltipState,
  useTooltipState as useRenderlesskitTooltipState,
} from "@renderlesskit/react";

import { ArrowIcon } from "../icons";
import { RenderPropType } from "../utils";

export type TooltipState = RenderlesskitTooltipState & {
  /**
   * Label for the Tooltip.
   */
  content: RenderPropType<TooltipStateReturn>;

  /**
   * Label for the Tooltip.
   */
  prefix: RenderPropType<TooltipStateReturn>;

  /**
   * Label for the Tooltip.
   */
  suffix: RenderPropType<TooltipStateReturn>;

  /**
   * If `true`, Tooltip will render an arrow.
   */
  withArrow: boolean;

  /**
   * Custom arrowIcon for the Tooltip.
   */
  arrowIcon: RenderPropType<TooltipStateReturn>;
};

export type TooltipActions = RenderlesskitTooltipActions & {};

export type TooltipStateReturn = TooltipState & TooltipActions;

export type TooltipInitialState = RenderlesskitTooltipInitialState &
  Partial<
    Pick<
      TooltipState,
      "content" | "arrowIcon" | "withArrow" | "prefix" | "suffix"
    >
  >;

export function useTooltipState(
  props: TooltipInitialState = {},
): TooltipStateReturn {
  const {
    content,
    arrowIcon = <ArrowIcon />,
    withArrow = false,
    prefix,
    suffix,
    ...restProps
  } = props;
  const state = useRenderlesskitTooltipState(restProps);

  return {
    ...state,
    content,
    arrowIcon,
    withArrow,
    prefix,
    suffix,
  };
}
