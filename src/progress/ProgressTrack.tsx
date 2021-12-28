import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { PROGRESS_TRACK_KEYS } from "./__keys";
import { ProgressStateReturn } from "./ProgressState";

export type ProgressTrackOptions = BoxOptions &
  Pick<ProgressStateReturn, "size">;

export type ProgressTrackHTMLProps = BoxHTMLProps;

export type ProgressTrackProps = ProgressTrackOptions & ProgressTrackHTMLProps;

export const useProgressTrack = createHook<
  ProgressTrackOptions,
  ProgressTrackHTMLProps
>({
  name: "ProgressTrack",
  compose: useBox,
  keys: PROGRESS_TRACK_KEYS,

  useProps(options, htmlProps) {
    const { size } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("progress");
    const className = cx(
      theme.track.common,
      theme.track.size[size],
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const ProgressTrack = createComponent({
  as: "div",
  memo: true,
  useHook: useProgressTrack,
});
