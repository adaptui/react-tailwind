import { createComponent, createHook } from "reakit-system";
import { cx } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";

import { RADIO_DESCRIPTION_KEYS } from "./__keys";
import { RadioStateReturn } from "./RadioState";

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
