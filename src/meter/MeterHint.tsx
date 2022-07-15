import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { MeterUIProps } from "./MeterProps";

export const useMeterHint = createHook<MeterHintOptions>(
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
      theme.hint,
      size ? theme.size[size]?.hint : "",
      themeColor ? theme.themeColor[themeColor]?.hint : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const MeterHint = createComponent<MeterHintOptions>(props => {
  const htmlProps = useMeterHint(props);

  return createElement("div", htmlProps);
}, "MeterHint");

export type MeterHintOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<MeterUIProps> & {};

export type MeterHintProps<T extends As = "div"> = Props<MeterHintOptions<T>>;
