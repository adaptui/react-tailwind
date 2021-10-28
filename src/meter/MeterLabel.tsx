import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { METER_LABEL_KEYS } from "./__keys";
import { MeterStateReturn } from "./MeterState";

export type MeterLabelOptions = BoxOptions &
  Pick<MeterStateReturn, "size" | "baseId">;

export type MeterLabelHTMLProps = BoxHTMLProps;

export type MeterLabelProps = MeterLabelOptions & MeterLabelHTMLProps;

export const useMeterLabel = createHook<MeterLabelOptions, MeterLabelHTMLProps>(
  {
    name: "MeterLabel",
    compose: useBox,
    keys: METER_LABEL_KEYS,

    useOptions(options, htmlProps) {
      return options;
    },

    useProps(options, htmlProps) {
      const { size, baseId } = options;
      const { className: htmlClassName, ...restHtmlProps } = htmlProps;

      const theme = useTheme("meter");
      const className = cx(
        theme.label.base,
        theme.label.size[size],
        htmlClassName,
      );

      return { id: baseId, className, ...restHtmlProps };
    },
  },
);

export const MeterLabel = createComponent({
  as: "span",
  memo: true,
  useHook: useMeterLabel,
});
