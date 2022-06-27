import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { CircularProgressUIProps } from "./CircularProgressProps";

export const useCircularProgressTrack =
  createHook<CircularProgressTrackOptions>(
    ({ state, size, themeColor, hint, ...props }) => {
      const theme = useTheme("circularProgress");
      const className = cx(
        theme.track,
        themeColor ? theme.themeColor[themeColor].track : "",
        props.className,
      );

      props = {
        cx: 50,
        cy: 50,
        r: 44,
        fill: "transparent",
        stroke: "currentColor",
        strokeWidth: hint ? "5px" : "10px",
        ...props,
        className,
      };
      props = useBox(props);

      return props;
    },
  );

export const CircularProgressTrack =
  createComponent<CircularProgressTrackOptions>(props => {
    const htmlProps = useCircularProgressTrack(props);

    return createElement("circle", htmlProps);
  });

export type CircularProgressTrackOptions<T extends As = "circle"> =
  BoxOptions<T> & Partial<CircularProgressUIProps> & {};

export type CircularProgressTrackProps<T extends As = "circle"> = Props<
  CircularProgressTrackOptions<T>
>;
