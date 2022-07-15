import { TooltipOptions, useTooltip } from "ariakit";
import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { TooltipUIProps } from "./TooltipProps";

export const useTooltipWrapper = createHook<TooltipWrapperOptions>(
  ({ state, content, withArrow, prefix, suffix, isDragging, ...props }) => {
    if (!state) return props;

    const theme = useTheme("tooltip");
    const className = cx(theme.content, props.className);

    props = { ...props, className };

    props = useTooltip({ state, ...props });
    props = useBox(props);

    return props;
  },
);

export const TooltipWrapper = createComponent<TooltipWrapperOptions>(props => {
  const htmlProps = useTooltipWrapper(props);
  return createElement("div", htmlProps);
}, "TooltipWrapper");

export type TooltipWrapperOptions<T extends As = "div"> = BoxOptions<T> &
  Omit<TooltipOptions<T>, "state"> &
  Partial<TooltipUIProps> & {};

export type TooltipWrapperProps<T extends As = "div"> = Props<
  TooltipWrapperOptions<T>
>;
