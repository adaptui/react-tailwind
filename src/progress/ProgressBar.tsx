import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { PROGRESS_BAR_KEYS } from "./__keys";
import { ProgressStateReturn } from "./ProgressState";

export type ProgressBarOptions = BoxOptions &
  Partial<Pick<ProgressStateReturn, "value" | "percent" | "isIndeterminate">>;

export type ProgressBarHTMLProps = BoxHTMLProps;

export type ProgressBarProps = ProgressBarOptions & ProgressBarHTMLProps;

export const useProgressBar = createHook<
  ProgressBarOptions,
  ProgressBarHTMLProps
>({
  name: "ProgressBar",
  compose: useBox,
  keys: PROGRESS_BAR_KEYS,

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
      isIndeterminate ? progress.bar.indeterminate : "",
      htmlClassName,
    );
    const style = { width: `${percent}%`, ...htmlStyle };

    return { className, style, ...restHtmlProps };
  },
});

export const ProgressBar = createComponent({
  as: "div",
  memo: true,
  useHook: useProgressBar,
});
