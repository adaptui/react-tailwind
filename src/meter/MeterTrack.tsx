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

export const useMeterTrack = createHook<MeterTrackOptions>(
  ({ state, size, intervals, flatBorders, label, hint, ...props }) => {
    const theme = useTheme("meter");
    const className = cx(
      theme.track.common,
      size ? theme.track.size[size] : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const MeterTrack = createComponent<MeterTrackOptions>(props => {
  const htmlProps = useMeterTrack(props);

  return createElement("div", htmlProps);
});

export type MeterTrackOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<MeterUIProps> & {};

export type MeterTrackProps<T extends As = "div"> = Props<MeterTrackOptions<T>>;
