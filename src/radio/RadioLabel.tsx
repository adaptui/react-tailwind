import { createComponent, createHook } from "reakit-system";
import { cx } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";

import { RADIO_LABEL_KEYS } from "./__keys";
import { RadioProps } from "./Radio";
import { RadioStateReturn } from "./RadioState";

export type RadioLabelOptions = BoxOptions &
  Pick<RadioStateReturn, "maxVisibleItems" | "size" | "stack"> & {
    description?: RadioProps["description"];
    disabled?: RadioProps["disabled"];
  };

export type RadioLabelHTMLProps = BoxHTMLProps;

export type RadioLabelProps = RadioLabelOptions & RadioLabelHTMLProps;

export const useRadioLabel = createHook<RadioLabelOptions, RadioLabelHTMLProps>(
  {
    name: "RadioLabel",
    compose: useBox,
    keys: RADIO_LABEL_KEYS,

    useProps(options, htmlProps) {
      const { size, description, disabled, maxVisibleItems, stack } = options;
      const { className: htmlClassName, ...restHtmlProps } = htmlProps;

      const theme = useTheme("radio");
      const className = cx(
        theme.label.base,
        theme.label.size[size],
        !description ? theme.label.only : "",
        disabled ? theme.label.disabled : "",
        maxVisibleItems != null ? theme.label.showMore[stack] : "",
        htmlClassName,
      );

      return { className, ...restHtmlProps };
    },
  },
);

export const RadioLabel = createComponent({
  as: "label",
  memo: true,
  useHook: useRadioLabel,
});
