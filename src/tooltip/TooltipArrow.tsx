import {
  TooltipArrowOptions as TooltipArrowAriakitOptions,
  useTooltipArrow as useTooltipArrowAriakit,
} from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { useTheme } from "../theme";
import { tcm } from "../utils";

import { TooltipUIProps } from "./TooltipProps";

export const useTooltipArrow = createHook<TooltipArrowOptions>(
  ({ state, content, arrowIcon, withArrow, prefix, suffix, ...props }) => {
    const theme = useTheme("tooltip");
    const className = tcm(theme.arrow, props.className);

    props = { ...props, className };
    props = useTooltipArrowAriakit({ state, ...props });
    return props;
  },
);

export const TooltipArrow = createComponent<TooltipArrowOptions>(props => {
  const htmlProps = useTooltipArrow(props);
  return createElement("div", htmlProps);
});

export type TooltipArrowOptions<T extends As = "div"> =
  TooltipArrowAriakitOptions<T> & Partial<TooltipUIProps> & {};

export type TooltipArrowProps<T extends As = "div"> = Props<
  TooltipArrowOptions<T>
>;
