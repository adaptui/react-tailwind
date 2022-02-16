import { createComponent, createHook } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { CIRCULAR_PROGRESS_TRACK_KEYS } from "./__keys";
import { CircularProgressProps } from "./CircularProgress";

export type CircularProgressTrackOptions = BoxOptions &
  Pick<CircularProgressProps, "hint"> & {};

export type CircularProgressTrackHTMLProps = BoxHTMLProps;

export type CircularProgressTrackProps = CircularProgressTrackOptions &
  CircularProgressTrackHTMLProps;

export const useCircularProgressTrack = createHook<
  CircularProgressTrackOptions,
  CircularProgressTrackHTMLProps
>({
  name: "CircularProgressTrack",
  compose: useBox,
  keys: CIRCULAR_PROGRESS_TRACK_KEYS,

  useProps(options, htmlProps) {
    const { hint } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("circularProgress");
    const className = cx(theme.track, htmlClassName);

    return {
      viewBox: "0 0 100 100",
      cx: 50,
      cy: 50,
      r: 44,
      fill: "transparent",
      stroke: "currentColor",
      strokeWidth: hint ? "5px" : "15px",
      className,
      ...restHtmlProps,
    };
  },
});

export const CircularProgressTrack = createComponent({
  as: "circle",
  memo: true,
  useHook: useCircularProgressTrack,
});
