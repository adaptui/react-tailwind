import { createComponent, createHook } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { CIRCULAR_PROGRESS_BAR_WRAPPER_KEYS } from "./__keys";
import { CircularProgressStateReturn } from "./CircularProgressState";

export type CircularProgressBarWrapperOptions = BoxOptions &
  Pick<CircularProgressStateReturn, "isIndeterminate" | "size" | "hint"> & {};

export type CircularProgressBarWrapperHTMLProps = BoxHTMLProps;

export type CircularProgressBarWrapperProps =
  CircularProgressBarWrapperOptions & CircularProgressBarWrapperHTMLProps;

export const useCircularProgressBarWrapper = createHook<
  CircularProgressBarWrapperOptions,
  CircularProgressBarWrapperHTMLProps
>({
  name: "CircularProgressBarWrapper",
  compose: useBox,
  keys: CIRCULAR_PROGRESS_BAR_WRAPPER_KEYS,

  useProps(options, htmlProps) {
    const { isIndeterminate, size, hint } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("circularProgress");
    const className = cx(
      hint
        ? theme.barWrapper.hint.size[size]
        : theme.barWrapper.common.size[size],
      isIndeterminate ? theme.barWrapper.indeterminate : "",
      htmlClassName,
    );

    return { className, viewBox: "0 0 100 100", ...restHtmlProps };
  },
});

export const CircularProgressBarWrapper = createComponent({
  as: "svg",
  memo: true,
  useHook: useCircularProgressBarWrapper,
});
