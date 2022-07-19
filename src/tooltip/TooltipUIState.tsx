import { RenderProp } from "../utils";

import { TooltipUIProps } from "./TooltipProps";

export function useTooltipUIState(props: TooltipUIStateProps): TooltipUIState {
  const {
    anchor,
    content,
    prefix,
    suffix,
    withArrow = false,
    isDragging = false,
  } = props;

  return {
    anchor,
    content,
    prefix,
    suffix,
    withArrow,
    isDragging,
  };
}

export type TooltipUIState = {
  anchor: RenderProp<React.HTMLAttributes<any> & React.RefAttributes<any>>;
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
    "anchor" | "content" | "withArrow" | "prefix" | "suffix" | "isDragging"
  >
>;
