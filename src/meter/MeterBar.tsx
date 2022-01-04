import { createHook } from "reakit-system";
import { createComponent } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { METER_BAR_KEYS } from "./__keys";
import { MeterStateReturn } from "./MeterState";

export type MeterBarOptions = BoxOptions &
  Partial<Pick<MeterStateReturn, "percent" | "flatBorders">>;

export type MeterBarHTMLProps = BoxHTMLProps;

export type MeterBarProps = MeterBarOptions & MeterBarHTMLProps;

export const useMeterBar = createHook<MeterBarOptions, MeterBarHTMLProps>({
  name: "MeterBar",
  compose: useBox,
  keys: METER_BAR_KEYS,

  useProps(options, htmlProps) {
    const { percent, flatBorders } = options;
    const {
      style: htmlStyle,
      className: htmlClassName,
      ...restHtmlProps
    } = htmlProps;

    const meter = useTheme("meter");
    const className = cx(
      meter.bar.common,
      flatBorders ? meter.bar.flatBroders : "",
      htmlClassName,
    );
    const style = { width: `${percent}%`, ...htmlStyle };

    return { className, style, ...restHtmlProps };
  },
});

export const MeterBar = createComponent({
  as: "div",
  memo: true,
  useHook: useMeterBar,
});
