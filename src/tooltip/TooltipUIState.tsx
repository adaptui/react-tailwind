import { RenderProp } from "../utils";

import { TooltipUIProps } from "./TooltipProps";

export function useTooltipUIState(
  props: TooltipUIStateProps = {},
): TooltipUIState {
  const { content, withArrow = false, prefix, suffix } = props;

  return {
    content,
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
};

export type TooltipUIStateProps = Partial<
  Pick<TooltipUIState, "content" | "withArrow" | "prefix" | "suffix">
>;
