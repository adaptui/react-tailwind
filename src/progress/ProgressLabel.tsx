import { GroupLabelOptions, useGroupLabel } from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { useTheme } from "../theme";
import { tcm } from "../utils";

import { ProgressUIProps } from "./ProgressProps";

export const useProgressLabel = createHook<ProgressLabelOptions>(
  ({ state, size, themeColor, label, hint, ...props }) => {
    const theme = useTheme("progress");
    const className = tcm(
      theme.label,
      size ? theme.size[size]?.label : "",
      themeColor ? theme.themeColor[themeColor]?.label : "",
      props.className,
    );

    props = { ...props, className };
    props = useGroupLabel(props);

    return props;
  },
);

export const ProgressLabel = createComponent<ProgressLabelOptions>(props => {
  const htmlProps = useProgressLabel(props);

  return createElement("span", htmlProps);
});

export type ProgressLabelOptions<T extends As = "span"> = GroupLabelOptions<T> &
  Partial<ProgressUIProps> & {};

export type ProgressLabelProps<T extends As = "span"> = Props<
  ProgressLabelOptions<T>
>;
