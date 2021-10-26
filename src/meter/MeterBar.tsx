import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { METER_BAR_KEYS } from "./__keys";
import { MeterStateReturn } from "./MeterState";

export type MeterBarOptions = BoxOptions &
  Partial<Pick<MeterStateReturn, "value" | "percent">>;

export type MeterBarHTMLProps = BoxHTMLProps;

export type MeterBarProps = MeterBarOptions & MeterBarHTMLProps;

export const useMeterBar = createHook<MeterBarOptions, MeterBarHTMLProps>({
  name: "MeterBar",
  compose: useBox,
  keys: METER_BAR_KEYS,

  useProps(options, htmlProps) {
    const { percent } = options;
    const {
      style: htmlStyle,
      className: htmlClassName,
      ...restHtmlProps
    } = htmlProps;

    const progress = useTheme("progress");
    const className = cx(progress.bar.base, htmlClassName);
    const style = { width: `${percent}%`, ...htmlStyle };

    return { className, style, ...restHtmlProps };
  },
});

export const MeterBar = createComponent({
  as: "div",
  memo: true,
  useHook: useMeterBar,
});
