import { createComponent, createHook } from "reakit-system";
import { cx } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";

import { SPINNER_KEYS } from "./__keys";

export type SpinnerOptions = BoxOptions & {
  /**
   * For accessibility, it is important to add a fallback loading text.
   * This text will be visible to screen readers.
   *
   * @default Loading...
   */
  label?: string;

  /**
   * How large should the spinner be?
   *
   * @default md
   */
  size?: keyof Renderlesskit.GetThemeValue<"spinner", "size">;

  /**
   * How the spinner should be displayed?
   *
   * @default transparent
   */
  stroke?: keyof Renderlesskit.GetThemeValue<"spinner", "stroke">;
};

export type SpinnerHTMLProps = BoxHTMLProps;

export type SpinnerProps = SpinnerOptions & SpinnerHTMLProps;

export const useSpinner = createHook<SpinnerOptions, SpinnerHTMLProps>({
  name: "Spinner",
  compose: useBox,
  keys: SPINNER_KEYS,

  useOptions(options, htmlProps) {
    const {
      size = "md",
      label = "Loading...",
      stroke = "transparent",
      ...restOptions
    } = options;

    return { size, label, stroke, ...restOptions };
  },

  useProps(options, htmlProps) {
    const {
      size = "md",
      label = "Loading...",
      stroke = "transparent",
    } = options;
    const {
      className: htmlClassName,
      children: htmlChildren,
      ...restHtmlProps
    } = htmlProps;

    const theme = useTheme("spinner");
    const className = cx(
      theme.base,
      theme.size[size],
      theme.stroke[stroke],
      htmlClassName,
    );

    const children = htmlChildren ? (
      htmlChildren
    ) : (
      <>{label ? <span className={theme.label}>{label}</span> : null}</>
    );

    return {
      className,
      children,
      "data-testid": "testid-spinner",
      ...restHtmlProps,
    };
  },
});

export const Spinner = createComponent({
  as: "div",
  memo: true,
  useHook: useSpinner,
});
