import { GroupOptions, useGroup } from "ariakit";
import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";
import { MeterOptions, useMeter } from "@adaptui/react";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { MeterUIProps } from "./MeterProps";

export const useMeterWrapper = createHook<MeterWrapperOptions>(
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
    const className = cx(theme.wrapper, props.className);

    props = { ...props, className };
    props = useMeter({ state, ...props });
    props = useGroup(props);
    props = useBox(props);

    return props;
  },
);

export const MeterWrapper = createComponent<MeterWrapperOptions>(props => {
  const htmlProps = useMeterWrapper(props);

  return createElement("div", htmlProps);
}, "MeterWrapper");

export type MeterWrapperOptions<T extends As = "div"> = BoxOptions<T> &
  GroupOptions<T> &
  MeterOptions<T> &
  Partial<MeterUIProps> & {};

export type MeterWrapperProps<T extends As = "div"> = Props<
  MeterWrapperOptions<T>
>;
