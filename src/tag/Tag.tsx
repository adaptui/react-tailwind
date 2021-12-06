import * as React from "react";
import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx, passProps, RenderPropType, runIfFn, withIconA11y } from "../utils";

import { TAG_KEYS } from "./__keys";

export type TagOptions = BoxOptions & {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size?: keyof Renderlesskit.GetThemeValue<"button", "size", "default">;

  /**
   * How the button should look?
   *
   * @default solid
   */
  variant?: keyof Renderlesskit.GetThemeValue<"button", "variant", "default">;

  /**
   * If added, the button will show an icon before the button's text.
   */
  prefix?: RenderPropType;

  /**
   * If added, the button will show an icon before the button's text.
   */
  closable?: RenderPropType;
};

export type TagHTMLProps = Omit<BoxHTMLProps, "prefix"> & {};

export type TagProps = TagOptions & TagHTMLProps;

export const useTag = createHook<TagOptions, TagHTMLProps>({
  name: "Tag",
  compose: useBox,
  keys: TAG_KEYS,

  useOptions(options, htmlProps) {
    const { size = "md", variant = "solid", ...restOptions } = options;

    return { size, variant, ...restOptions };
  },

  useProps(options, htmlProps) {
    const { size = "md", variant = "solid", prefix, closable } = options;

    let {
      className: htmlClassName,
      children: htmlChildren,
      ...restHtmlProps
    } = htmlProps;

    const theme = useTheme("tag");
    const className = cx(
      theme.base.normal,
      theme.size.default[size],
      theme.variant.default[variant],
      theme.variant.hover[variant],
      theme.variant.active[variant],
      htmlClassName,
    );
    const prefixStyles = cx(theme.size.prefix[size]);

    const children = (
      <>
        {prefix ? (
          <>{withIconA11y(prefix, { className: prefixStyles })}</>
        ) : null}
        <span>{htmlChildren}</span>
        {closable ? <>{passProps(closable, options)}</> : null}
      </>
    );

    return { className, children, ...restHtmlProps };
  },
});

export const Tag = createComponent({
  as: "div",
  memo: true,
  useHook: useTag,
});
