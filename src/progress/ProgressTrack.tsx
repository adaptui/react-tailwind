import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { ProgressUIProps } from "./ProgressProps";

export const useProgressTrack = createHook<ProgressTrackOptions>(
  ({ state, size, label, hint, ...props }) => {
    const theme = useTheme("progress");
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

export const ProgressTrack = createComponent<ProgressTrackOptions>(props => {
  const htmlProps = useProgressTrack(props);

  return createElement("div", htmlProps);
});

export type ProgressTrackOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<ProgressUIProps> & {};

export type ProgressTrackProps<T extends As = "div"> = Props<
  ProgressTrackOptions<T>
>;
