import { cx } from "@renderlesskit/react";
import { createComponent, createHook } from "reakit-system";

import { useTheme } from "../theme";
import { RadioStateReturn } from "./RadioState";
import { RADIO_DESCRIPTION_KEYS } from "./__keys";
import { BoxHTMLProps, BoxOptions, useBox } from "../box";

export type RadioDescriptionOptions = BoxOptions &
  Pick<RadioStateReturn, "size">;

export type RadioDescriptionHTMLProps = BoxHTMLProps;

export type RadioDescriptionProps = RadioDescriptionOptions &
  RadioDescriptionHTMLProps;

export const useRadioDescription = createHook<
  RadioDescriptionOptions,
  RadioDescriptionHTMLProps
>({
  name: "RadioDescription",
  compose: useBox,
  keys: RADIO_DESCRIPTION_KEYS,

  useProps(options, htmlProps) {
    const { size } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("radio");
    const className = cx(
      theme.description.base,
      theme.description.size[size],
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const RadioDescription = createComponent({
  as: "div",
  memo: true,
  useHook: useRadioDescription,
});
