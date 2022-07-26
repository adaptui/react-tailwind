import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { CircularProgressUIProps } from "./CircularProgressProps";

export const useCircularProgressBar = createHook<CircularProgressBarOptions>(
  ({ state, size, themeColor, hint, ...props }) => {
    const dash = state?.isIndeterminate
      ? undefined
      : // Circle Circumference -> 2 * Math.PI * 44 = 276
        ((state?.percent ?? 0) / 100) * 276;
    const gap = dash == null ? undefined : 276 - dash;

    const theme = useTheme("circularProgress");
    const className = cx(
      theme.bar.base,
      state?.isIndeterminate ? theme.bar.indeterminate : "",
      themeColor ? theme.themeColor[themeColor].bar : "",
      props.className,
    );

    props = {
      cx: 50,
      cy: 50,
      r: 44,
      fill: "transparent",
      stroke: "currentColor",
      strokeDashoffset: "69",
      strokeWidth: hint ? "5px" : "10px",
      strokeDasharray: `${dash} ${gap}`,
      strokeLinecap: "round",
      ...props,
      className,
    };
    props = useBox(props);

    return props;
  },
);

export const CircularProgressBar = createComponent<CircularProgressBarOptions>(
  props => {
    const htmlProps = useCircularProgressBar(props);

    return createElement("circle", htmlProps);
  },
  "CircularProgressBar",
);

export type CircularProgressBarOptions<T extends As = "circle"> =
  BoxOptions<T> & Partial<CircularProgressUIProps> & {};

export type CircularProgressBarProps<T extends As = "circle"> = Props<
  CircularProgressBarOptions<T>
>;
