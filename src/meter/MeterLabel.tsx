import { createHook } from "reakit-system";
import {
  unstable_IdHTMLProps,
  unstable_IdOptions,
  unstable_useId,
} from "reakit";
import { createComponent } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { METER_LABEL_KEYS } from "./__keys";
import { MeterStateReturn } from "./MeterState";

export type MeterLabelOptions = BoxOptions &
  unstable_IdOptions &
  Pick<MeterStateReturn, "size">;

export type MeterLabelHTMLProps = BoxHTMLProps & unstable_IdHTMLProps;

export type MeterLabelProps = MeterLabelOptions & MeterLabelHTMLProps;

export const useMeterLabel = createHook<MeterLabelOptions, MeterLabelHTMLProps>(
  {
    name: "MeterLabel",
    compose: [useBox, unstable_useId],
    keys: METER_LABEL_KEYS,

    useOptions(options, htmlProps) {
      return options;
    },

    useProps(options, htmlProps) {
      const { size } = options;
      const { className: htmlClassName, ...restHtmlProps } = htmlProps;

      const theme = useTheme("meter");
      const className = cx(
        theme.label.common,
        theme.label.size[size],
        htmlClassName,
      );

      return { className, ...restHtmlProps };
    },
  },
);

export const MeterLabel = createComponent({
  as: "span",
  memo: true,
  useHook: useMeterLabel,
});
