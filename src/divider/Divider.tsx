import { createComponent, createHook } from "reakit-system";
import { SeparatorHTMLProps, SeparatorOptions, useSeparator } from "reakit";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { DIVIDER_KEYS } from "./__keys";

export type DividerOptions = BoxOptions & SeparatorOptions;

export type DividerHTMLProps = BoxHTMLProps & SeparatorHTMLProps;

export type DividerProps = DividerOptions & DividerHTMLProps;

export const useDivider = createHook<DividerOptions, DividerHTMLProps>({
  name: "Divider",
  compose: [useBox, useSeparator],
  keys: DIVIDER_KEYS,

  useProps(options, htmlProps) {
    const { orientation } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const divider = useTheme("divider");
    const className = cx(
      divider.base,
      orientation === "horizontal" ? divider.horizontal : divider.vertical,
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const Divider = createComponent({
  as: "hr",
  memo: true,
  useHook: useDivider,
});
