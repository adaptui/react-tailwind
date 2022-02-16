import { createComponent, createHook } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { METER_TRACK_KEYS } from "./__keys";
import { MeterStateReturn } from "./MeterState";

export type MeterTrackOptions = BoxOptions & Pick<MeterStateReturn, "size">;

export type MeterTrackHTMLProps = BoxHTMLProps;

export type MeterTrackProps = MeterTrackOptions & MeterTrackHTMLProps;

export const useMeterTrack = createHook<MeterTrackOptions, MeterTrackHTMLProps>(
  {
    name: "MeterTrack",
    compose: useBox,
    keys: METER_TRACK_KEYS,

    useProps(options, htmlProps) {
      const { size } = options;
      const { className: htmlClassName, ...restHtmlProps } = htmlProps;

      const theme = useTheme("meter");
      const className = cx(
        theme.track.common,
        theme.track.size[size],
        htmlClassName,
      );

      return { className, ...restHtmlProps };
    },
  },
);

export const MeterTrack = createComponent({
  as: "div",
  memo: true,
  useHook: useMeterTrack,
});
