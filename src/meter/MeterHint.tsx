import { createHook } from "reakit-system";
import { createComponent } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { METER_HINT_KEYS } from "./__keys";
import { MeterStateReturn } from "./MeterState";

export type MeterHintOptions = BoxOptions & Pick<MeterStateReturn, "size">;

export type MeterHintHTMLProps = BoxHTMLProps;

export type MeterHintProps = MeterHintOptions & MeterHintHTMLProps;

export const useMeterHint = createHook<MeterHintOptions, MeterHintHTMLProps>({
  name: "MeterHint",
  compose: useBox,
  keys: METER_HINT_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    const { size } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("meter");
    const className = cx(
      theme.hint.common,
      theme.hint.size[size],
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const MeterHint = createComponent({
  as: "div",
  memo: true,
  useHook: useMeterHint,
});
