import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { ProgressUIProps } from "./ProgressProps";

export const useProgressBar = createHook<ProgressBarOptions>(
  ({ state, size, themeColor, label, hint, ...props }) => {
    const theme = useTheme("progress");
    const className = cx(
      theme.bar.base,
      state?.isIndeterminate ? theme.bar.indeterminate : "",
      size ? theme.size[size]?.bar : "",
      themeColor ? theme.themeColor[themeColor]?.bar : "",
      props.className,
    );
    const style = { width: `${state?.percent}%`, ...props.style };

    props = { ...props, style, className };
    props = useBox(props);

    return props;
  },
);

export const ProgressBar = createComponent<ProgressBarOptions>(props => {
  const htmlProps = useProgressBar(props);

  return createElement("div", htmlProps);
}, "ProgressBar");

export type ProgressBarOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<ProgressUIProps> & {};

export type ProgressBarProps<T extends As = "div"> = Props<
  ProgressBarOptions<T>
>;
