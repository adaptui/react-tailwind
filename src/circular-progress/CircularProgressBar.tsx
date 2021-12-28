import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { CIRCULAR_PROGRESS_BAR_KEYS } from "./__keys";
import { CircularProgressStateReturn } from "./CircularProgressState";

export type CircularProgressBarOptions = BoxOptions &
  Pick<
    CircularProgressStateReturn,
    "isIndeterminate" | "percent" | "hint"
  > & {};

export type CircularProgressBarHTMLProps = BoxHTMLProps;

export type CircularProgressBarProps = CircularProgressBarOptions &
  CircularProgressBarHTMLProps;

export const useCircularProgressBar = createHook<
  CircularProgressBarOptions,
  CircularProgressBarHTMLProps
>({
  name: "CircularProgressBar",
  compose: useBox,
  keys: CIRCULAR_PROGRESS_BAR_KEYS,

  useProps(options, htmlProps) {
    const { isIndeterminate, percent, hint } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const determinant = isIndeterminate ? undefined : (percent ?? 0) * 2.64;
    const strokeDasharray =
      determinant == null ? undefined : `${determinant} ${264 - determinant}`;

    const theme = useTheme("circularProgress");
    const className = cx(
      theme.bar.common,
      isIndeterminate ? theme.bar.indeterminate : "",
      htmlClassName,
    );

    return {
      viewBox: "0 0 100 100",
      cx: 50,
      cy: 50,
      r: 44,
      fill: "transparent",
      stroke: "currentColor",
      strokeWidth: hint ? "5px" : "15px",
      strokeDashoffset: "66",
      strokeDasharray: strokeDasharray,
      strokeLinecap: "round",
      className,
      ...restHtmlProps,
    };
  },
});

export const CircularProgressBar = createComponent({
  as: "circle",
  memo: true,
  useHook: useCircularProgressBar,
});
