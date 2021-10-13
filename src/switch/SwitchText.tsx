import { createComponent, createHook } from "reakit-system";
import { cx } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";

import { SWITCH_TEXT_KEYS } from "./__keys";
import { SwitchStateReturn } from "./SwitchState";

export type SwitchTextOptions = BoxOptions & Pick<SwitchStateReturn, "size">;

export type SwitchTextHTMLProps = BoxHTMLProps;

export type SwitchTextProps = SwitchTextOptions & SwitchTextHTMLProps;

export const useSwitchText = createHook<SwitchTextOptions, SwitchTextHTMLProps>(
  {
    name: "SwitchText",
    compose: useBox,
    keys: SWITCH_TEXT_KEYS,

    useProps(options, htmlProps) {
      const { size } = options;
      const { className: htmlClassName, ...restHtmlProps } = htmlProps;

      const theme = useTheme("switch");
      const className = cx(
        theme.text.base,
        theme.text.size[size],
        htmlClassName,
      );

      return { className, ...restHtmlProps };
    },
  },
);

export const SwitchText = createComponent({
  as: "div",
  memo: true,
  useHook: useSwitchText,
});
