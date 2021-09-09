import { cx } from "@renderlesskit/react";
import { createComponent, createHook } from "reakit-system";

import { useTheme } from "../theme";
import { SPINNER_KEYS } from "./__keys";
import { BoxOptions, BoxHTMLProps, useBox } from "../box";

export type SpinnerOptions = BoxOptions & {
  /**
   * How large should the spinner be?
   *
   * @default "md"
   */
  size?: keyof Renderlesskit.GetThemeValue<"spinner", "size">;

  /**
   * How the spinner should be displayed?
   *
   * @default "transparent"
   */
  stroke?: keyof Renderlesskit.GetThemeValue<"spinner", "stroke">;
};

export type SpinnerHTMLProps = BoxHTMLProps;

export type SpinnerProps = SpinnerOptions & SpinnerHTMLProps;

export const useSpinner = createHook<SpinnerOptions, SpinnerHTMLProps>({
  name: "Spinner",
  compose: useBox,
  keys: SPINNER_KEYS,

  useProps(options, htmlProps) {
    const { size = "md", stroke = "transparent" } = options;
    const {
      className: htmlClassName,
      children: htmlChildren,
      ...restHtmlProps
    } = htmlProps;

    const spinner = useTheme("spinner");
    const className = cx(
      spinner.base,
      spinner.size[size],
      spinner.stroke[stroke],
      htmlClassName,
    );
    // For accessibility, it is important to add a fallback loading text.
    // This text will be visible to screen readers.
    const defaultChildren = <div className={spinner.label}>Loading...</div>;
    const children = htmlChildren || defaultChildren;

    return { className, children, ...restHtmlProps };
  },
});

export const Spinner = createComponent({
  as: "div",
  memo: true,
  useHook: useSpinner,
});
