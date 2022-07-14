import { TooltipOptions, useTooltip } from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { useTheme } from "../theme";
import { tcm } from "../utils";

import { TooltipUIProps } from "./TooltipProps";

export const useTooltipWrapper = createHook<TooltipWrapperOptions>(
  ({ state, content, withArrow, prefix, suffix, isDragging, ...props }) => {
    if (!state) return props;

    const theme = useTheme("tooltip");
    const className = tcm(theme.content, props.className);

    props = { ...props, className };

    props = useTooltip({ state, ...props });
    return props;
  },
);

export const TooltipWrapper = createComponent<TooltipWrapperOptions>(props => {
  const htmlProps = useTooltipWrapper(props);
  return createElement("div", htmlProps);
});

export type TooltipWrapperOptions<T extends As = "div"> = Omit<
  TooltipOptions<T>,
  "state"
> &
  Partial<TooltipUIProps> & {};

export type TooltipWrapperProps<T extends As = "div"> = Props<
  TooltipWrapperOptions<T>
>;
