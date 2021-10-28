import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { METER_HINT_KEYS } from "./__keys";
import { MeterStateReturn } from "./MeterState";

export type MeterBarWrapperOptions = BoxOptions &
  Pick<MeterStateReturn, "flatBorders">;

export type MeterBarWrapperHTMLProps = BoxHTMLProps;

export type MeterBarWrapperProps = MeterBarWrapperOptions &
  MeterBarWrapperHTMLProps;

export const useMeterBarWrapper = createHook<
  MeterBarWrapperOptions,
  MeterBarWrapperHTMLProps
>({
  name: "MeterBarWrapper",
  compose: useBox,
  keys: METER_HINT_KEYS,

  useProps(options, htmlProps) {
    const { flatBorders } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("meter");
    const className = cx(
      theme.barWrapper.base,
      flatBorders ? theme.barWrapper.flatBorders : "",
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const MeterBarWrapper = createComponent({
  as: "div",
  memo: true,
  useHook: useMeterBarWrapper,
});
