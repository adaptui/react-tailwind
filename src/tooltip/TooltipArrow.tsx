import { useMemo, useState } from "react";
import { getWindow, useForkRef, useSafeLayoutEffect } from "ariakit-utils";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { TooltipUIProps } from "./TooltipProps";

type BasePlacement = "top" | "bottom" | "left" | "right";

const defaultSize = 16;
const halfDefaultSize = defaultSize / 2;
const arrowDef =
  "M2.853 16h10.293c-1.93 0-3.74-5-5.146-5-1.407 0-3.237 5-5.147 5Z";

const rotateMap = {
  top: `rotate(180 ${halfDefaultSize} ${halfDefaultSize})`,
  right: `rotate(-90 ${halfDefaultSize} ${halfDefaultSize})`,
  bottom: `rotate(0 ${halfDefaultSize} ${halfDefaultSize})`,
  left: `rotate(90 ${halfDefaultSize} ${halfDefaultSize})`,
};

function useComputedStyle(element?: Element | null) {
  const [style, setStyle] = useState<CSSStyleDeclaration>();
  useSafeLayoutEffect(() => {
    if (!element) return;
    const computedStyle = getWindow(element).getComputedStyle(element);
    setStyle(computedStyle);
  }, [element]);
  return style;
}

export const useTooltipArrow = createHook<TooltipArrowOptions>(
  ({
    state,
    size = defaultSize,
    content,
    withArrow,
    prefix,
    suffix,
    isDragging,
    ...props
  }) => {
    const theme = useTheme("tooltip");
    const className = cx(theme.arrow, props.className);

    props = { ...props, className };
    props = useBox(props);

    const dir = state?.currentPlacement.split("-")[0] as BasePlacement;
    const style = useComputedStyle(state?.contentElement);
    const fill = style?.getPropertyValue("background-color") || "none";
    const stroke = style?.getPropertyValue(`border-${dir}-color`) || "none";
    const borderWidth = style?.getPropertyValue(`border-${dir}-width`) || "0px";
    const strokeWidth = parseInt(borderWidth) * 2 * (defaultSize / size);
    const transform = rotateMap[dir];

    const children = useMemo(
      () => (
        <svg display="block" viewBox="0 0 16 16">
          <g transform={transform}>
            <path fill="none" d={arrowDef} />
            <path stroke="none" d={arrowDef} />
          </g>
        </svg>
      ),
      [transform],
    );

    props = {
      children,
      "aria-hidden": true,
      ...props,
      ref: useForkRef(state?.arrowRef, props.ref),
      style: {
        // server side rendering
        position: "absolute",
        fontSize: size,
        width: "1em",
        height: "1em",
        pointerEvents: "none",
        fill,
        stroke,
        strokeWidth,
        ...props.style,
      },
    };

    return props;
  },
);

export const TooltipArrow = createComponent<TooltipArrowOptions>(props => {
  const htmlProps = useTooltipArrow(props);
  return createElement("div", htmlProps);
});

export type TooltipArrowOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<TooltipUIProps> & {
    /**
     * The size of the arrow.
     * @default 16
     */
    size?: number;
  };

export type TooltipArrowProps<T extends As = "div"> = Props<
  TooltipArrowOptions<T>
>;
