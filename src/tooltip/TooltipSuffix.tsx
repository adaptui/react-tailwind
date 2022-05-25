import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { tcm } from "../utils";

import { TooltipUIProps } from "./TooltipProps";

export const useTooltipSuffix = createHook<TooltipSuffixOptions>(
  ({ state, content, withArrow, prefix, suffix, isDragging, ...props }) => {
    const theme = useTheme("tooltip");
    const className = tcm(theme.suffix, props.className);

    props = { ...props, className };
    props = useBox(props);
    return props;
  },
);

export const TooltipSuffix = createComponent<TooltipSuffixOptions>(props => {
  const htmlProps = useTooltipSuffix(props);
  return createElement("div", htmlProps);
});

export type TooltipSuffixOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<TooltipUIProps> & {};

export type TooltipSuffixProps<T extends As = "div"> = Props<
  TooltipSuffixOptions<T>
>;
