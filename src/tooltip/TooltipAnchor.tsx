import {
  TooltipAnchorOptions as TooltipAnchorAriakitOptions,
  useTooltipAnchor as useTooltipAnchorAriakit,
} from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { TooltipUIProps } from "./TooltipProps";

export const useTooltipAnchor = createHook<TooltipAnchorOptions>(
  ({ state, content, arrowIcon, withArrow, prefix, suffix, ...props }) => {
    props = useTooltipAnchorAriakit({ state, ...props });
    return props;
  },
);

export const TooltipAnchor = createComponent<TooltipAnchorOptions>(props => {
  const htmlProps = useTooltipAnchor(props);
  return createElement("div", htmlProps);
});

export type TooltipAnchorOptions<T extends As = "div"> =
  TooltipAnchorAriakitOptions<T> & Partial<TooltipUIProps> & {};

export type TooltipAnchorProps<T extends As = "div"> = Props<
  TooltipAnchorOptions<T>
>;
