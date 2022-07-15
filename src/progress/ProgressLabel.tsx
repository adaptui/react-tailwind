import { GroupLabelOptions, useGroupLabel } from "ariakit";
import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { ProgressUIProps } from "./ProgressProps";

export const useProgressLabel = createHook<ProgressLabelOptions>(
  ({ state, size, themeColor, label, hint, ...props }) => {
    const theme = useTheme("progress");
    const className = cx(
      theme.label,
      size ? theme.size[size]?.label : "",
      themeColor ? theme.themeColor[themeColor]?.label : "",
      props.className,
    );

    props = { ...props, className };
    props = useGroupLabel(props);
    props = useBox(props);

    return props;
  },
);

export const ProgressLabel = createComponent<ProgressLabelOptions>(props => {
  const htmlProps = useProgressLabel(props);

  return createElement("span", htmlProps);
}, "ProgressLabel");

export type ProgressLabelOptions<T extends As = "span"> = BoxOptions<T> &
  GroupLabelOptions<T> &
  Partial<ProgressUIProps> & {};

export type ProgressLabelProps<T extends As = "span"> = Props<
  ProgressLabelOptions<T>
>;
