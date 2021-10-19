import { createComponent, createHook } from "reakit-system";
import {
  cx,
  ProgressHTMLProps as ReakitProgressHTMLProps,
  ProgressOptions as ReakitProgressOptions,
  useProgress as useReakitProgress,
} from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";

import { PROGRESS_BAR_KEYS } from "./__keys";
import { ProgressStateReturn } from "./ProgressState";

export type ProgressBarOptions = BoxOptions &
  ReakitProgressOptions &
  Partial<Pick<ProgressStateReturn, "value" | "percent" | "isIndeterminate">>;

export type ProgressBarHTMLProps = BoxHTMLProps & ReakitProgressHTMLProps;

export type ProgressBarProps = ProgressBarOptions & ProgressBarHTMLProps;

export const useProgressBar = createHook<
  ProgressBarOptions,
  ProgressBarHTMLProps
>({
  name: "ProgressBar",
  compose: [useBox, useReakitProgress],
  keys: PROGRESS_BAR_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    const { percent, isIndeterminate } = options;
    const {
      style: htmlStyle,
      className: htmlClassName,
      ...restHtmlProps
    } = htmlProps;

    const progress = useTheme("progress");
    const className = cx(
      progress.bar.base,
      !isIndeterminate ? progress.bar.normal : progress.bar.indeterminate,
      htmlClassName,
    );
    const style = { width: `${percent}%`, ...htmlStyle };

    return { "aria-label": "progress", className, style, ...restHtmlProps };
  },
});

export const ProgressBar = createComponent({
  as: "div",
  memo: true,
  useHook: useProgressBar,
});
