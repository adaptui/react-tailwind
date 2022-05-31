import { GroupProps, useGroup } from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";
import { MeterOptions, useMeter } from "@adaptui/react";

import { useTheme } from "../theme";
import { tcm } from "../utils";

import { MeterUIProps } from "./MeterProps";

export const useMeterWrapper = createHook<MeterWrapperOptions>(
  ({ state, size, intervals, flatBorders, label, hint, ...props }) => {
    const theme = useTheme("meter");
    const className = tcm(theme.wrapper, props.className);

    props = { ...props, className };
    props = useMeter({ state, ...props });
    props = useGroup(props);

    return props;
  },
);

export const MeterWrapper = createComponent<MeterWrapperOptions>(props => {
  const htmlProps = useMeterWrapper(props);

  return createElement("div", htmlProps);
});

export type MeterWrapperOptions<T extends As = "div"> = GroupProps<T> &
  MeterOptions<T> &
  Partial<MeterUIProps> & {};

export type MeterWrapperProps<T extends As = "div"> = Props<
  MeterWrapperOptions<T>
>;
