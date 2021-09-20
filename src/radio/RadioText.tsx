import { cx } from "@renderlesskit/react";
import { createComponent, createHook } from "reakit-system";

import { useTheme } from "../theme";
import { RADIO_TEXT_KEYS } from "./__keys";
import { RadioStateReturn } from "./RadioState";
import { BoxHTMLProps, BoxOptions, useBox } from "../box";

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
    console.log("%ctheme", "color: #917399", theme);
    const className = cx(theme.text.base, theme.text.size[size], htmlClassName);

    return { className, ...restHtmlProps };
  },
});

export const RadioText = createComponent({
  as: "div",
  memo: true,
  useHook: useRadioText,
});
