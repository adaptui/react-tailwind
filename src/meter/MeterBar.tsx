import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { MeterUIProps } from "./MeterProps";

export const useMeterBar = createHook<MeterBarOptions>(
  ({ state, size, intervals, flatBorders, label, hint, ...props }) => {
    console.log("%cstate", "color: #408059", state);
    const theme = useTheme("meter");
    const className = cx(
      theme.bar.common,
      flatBorders ? theme.bar.flatBorders : "",
      props.className,
    );
    const style = { width: `${state?.percent}%`, ...props.style };

    props = { ...props, style, className };
    props = useBox(props);

    return props;
  },
);

export const MeterBar = createComponent<MeterBarOptions>(props => {
  const htmlProps = useMeterBar(props);

  return createElement("div", htmlProps);
});

export type MeterBarOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<MeterUIProps> & {};

export type MeterBarProps<T extends As = "div"> = Props<MeterBarOptions<T>>;
