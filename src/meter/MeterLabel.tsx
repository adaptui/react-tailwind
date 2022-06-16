import { GroupLabelOptions, useGroupLabel } from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { useTheme } from "../theme";
import { tcm } from "../utils";

import { MeterUIProps } from "./MeterProps";

export const useMeterLabel = createHook<MeterLabelOptions>(
  ({
    state,
    size,
    themeColor,
    intervals,
    flatBorders,
    label,
    hint,
    ...props
  }) => {
    const theme = useTheme("meter");
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

export const MeterLabel = createComponent<MeterLabelOptions>(props => {
  const htmlProps = useMeterLabel(props);

  return createElement("span", htmlProps);
});

export type MeterLabelOptions<T extends As = "span"> = GroupLabelOptions<T> &
  Partial<MeterUIProps> & {};

export type MeterLabelProps<T extends As = "span"> = Props<
  MeterLabelOptions<T>
>;
