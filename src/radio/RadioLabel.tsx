import { cx } from "@renderlesskit/react";
import { createComponent, createHook } from "reakit-system";

import { useTheme } from "../theme";
import { RADIO_LABEL_KEYS } from "./__keys";
import { BoxHTMLProps, BoxOptions, useBox } from "../box";

export type RadioLabelOptions = BoxOptions;

export type RadioLabelHTMLProps = BoxHTMLProps;

export type RadioLabelProps = RadioLabelOptions & RadioLabelHTMLProps;

export const useRadioLabel = createHook<RadioLabelOptions, RadioLabelHTMLProps>(
  {
    name: "RadioLabel",
    compose: useBox,
    keys: RADIO_LABEL_KEYS,

    useProps(options, htmlProps) {
      const { className: htmlClassName, ...restHtmlProps } = htmlProps;

      const theme = useTheme("radio");
      const className = cx(theme.label, htmlClassName);

      return { className, ...restHtmlProps };
    },
  },
);

export const RadioLabel = createComponent({
  as: "label",
  memo: true,
  useHook: useRadioLabel,
});
