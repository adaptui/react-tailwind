import { createComponent, createHook } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { RADIO_TEXT_KEYS } from "./__keys";
import { RadioStateReturn } from "./RadioState";

export type RadioTextOptions = BoxOptions & Pick<RadioStateReturn, "size">;

export type RadioTextHTMLProps = BoxHTMLProps;

export type RadioTextProps = RadioTextOptions & RadioTextHTMLProps;

export const useRadioText = createHook<RadioTextOptions, RadioTextHTMLProps>({
  name: "RadioText",
  compose: useBox,
  keys: RADIO_TEXT_KEYS,

  useProps(options, htmlProps) {
    const { size } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("radio");
    const className = cx(
      theme.text.common,
      theme.text.size[size],
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const RadioText = createComponent({
  as: "div",
  memo: true,
  useHook: useRadioText,
});
