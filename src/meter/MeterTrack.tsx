import { cx } from "ariakit-utils";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";

import { MeterUIProps } from "./MeterProps";

export const useMeterTrack = createHook<MeterTrackOptions>(
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
      theme.track,
      size ? theme.size[size]?.track : "",
      // flatBorders ? theme.bar.flatBorders : "",
      themeColor ? theme.themeColor[themeColor]?.track : "",
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
