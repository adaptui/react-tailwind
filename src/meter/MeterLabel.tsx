import { GroupLabelOptions, useGroupLabel } from "ariakit";
import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

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

export const MeterLabel = createComponent<MeterLabelOptions>(props => {
  const htmlProps = useMeterLabel(props);

  return createElement("span", htmlProps);
}, "MeterLabel");

export type MeterLabelOptions<T extends As = "span"> = BoxOptions<T> &
  GroupLabelOptions<T> &
  Partial<MeterUIProps> & {};

export type MeterLabelProps<T extends As = "span"> = Props<
  MeterLabelOptions<T>
>;
