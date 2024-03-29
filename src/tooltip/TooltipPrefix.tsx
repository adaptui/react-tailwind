import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { TooltipUIProps } from "./TooltipProps";

export const useTooltipPrefix = createHook<TooltipPrefixOptions>(
  ({
    state,
    anchor,
    content,
    withArrow,
    prefix,
    suffix,
    isDragging,
    ...props
  }) => {
    const theme = useTheme("tooltip");
    const className = cx(theme.prefix, props.className);

    props = { ...props, className };
    props = useBox(props);
    return props;
  },
);

export const TooltipPrefix = createComponent<TooltipPrefixOptions>(props => {
  const htmlProps = useTooltipPrefix(props);

  return createElement("div", htmlProps);
}, "TooltipPrefix");

export type TooltipPrefixOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<TooltipUIProps> & {};

export type TooltipPrefixProps<T extends As = "div"> = Props<
  TooltipPrefixOptions<T>
>;
