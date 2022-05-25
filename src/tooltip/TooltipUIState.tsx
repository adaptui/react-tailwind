import { RenderProp } from "../utils";

import { TooltipUIProps } from "./TooltipProps";

export function useTooltipUIState(
  props: TooltipUIStateProps = {},
): TooltipUIState {
  const {
    content,
    withArrow = false,
    prefix,
    suffix,
    isDragging = false,
  } = props;

  return {
    content,
    withArrow,
    prefix,
    suffix,
    isDragging,
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
   * If `true`, Tooltip will also render when dragged outside .
   */
  isDragging: boolean;
};

export type TooltipUIStateProps = Partial<
  Pick<
    TooltipUIState,
    "content" | "withArrow" | "prefix" | "suffix" | "isDragging"
  >
>;
