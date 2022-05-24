import { ArrowIcon } from "../icons";
import { RenderProp } from "../utils";

import { TooltipUIProps } from "./TooltipProps";

export function useTooltipUIState(
  props: TooltipUIStateProps = {},
): TooltipUIState {
  const {
    content,
    arrowIcon = <ArrowIcon />,
    withArrow = false,
    prefix,
    suffix,
  } = props;

  return {
    content,
    arrowIcon,
    withArrow,
    prefix,
    suffix,
  };
}

export type TooltipUIState = {
  /**
   * Label for the Tooltip.
   */
  content: RenderProp<TooltipUIProps>;

  /**
   * Label for the Tooltip.
   */
  prefix: RenderProp<TooltipUIProps>;

  /**
   * Label for the Tooltip.
   */
  suffix: RenderProp<TooltipUIProps>;

  /**
   * If `true`, Tooltip will render an arrow.
   */
  withArrow: boolean;

  /**
   * Custom arrowIcon for the Tooltip.
   */
  arrowIcon: RenderProp<TooltipUIProps>;
};

export type TooltipUIStateProps = Partial<
  Pick<
    TooltipUIState,
    "content" | "arrowIcon" | "withArrow" | "prefix" | "suffix"
  >
>;
