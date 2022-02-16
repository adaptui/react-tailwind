import { ButtonHTMLProps, ButtonOptions, useButton } from "reakit";
import { createComponent, createHook } from "@renderlesskit/react";

import { CloseIcon } from "../icons";
import { useTheme } from "../theme";
import { cx, RenderPropType, tcm, withIconA11y } from "../utils";

import { TAG_KEYS } from "./__keys";

export type TagOptions = ButtonOptions & {
  /**
   * How large should the tag be?
   *
   * @default md
   */
  size?: keyof Renderlesskit.GetThemeValue<"tag", "size", "default">;

  /**
   * How the tag should look?
   *
   * @default solid
   */
  variant?: keyof Renderlesskit.GetThemeValue<"tag", "variant", "default">;

  /**
   * If added, the tag will show an icon before the tag's text.
   */
  prefix?: RenderPropType;

  /**
   * If added, the tag will allow to show an icon before the tag's text.
   */
  closable?: boolean;

  /**
   * If added, the tag will show an icon after the tag's text.
   */
  suffix?: RenderPropType;
};

export type TagHTMLProps = Omit<ButtonHTMLProps, "prefix"> & {};

export type TagProps = TagOptions & TagHTMLProps;

export const useTag = createHook<TagOptions, TagHTMLProps>({
  name: "Tag",
  compose: useButton,
  keys: TAG_KEYS,

  useOptions(options, htmlProps) {
    const { size = "md", variant = "solid", ...restOptions } = options;

    return { size, variant, ...restOptions };
  },

  useProps(options, htmlProps) {
    const {
      size = "md",
      variant = "solid",
      prefix,
      closable = false,
      suffix = closable ? <CloseIcon /> : null,
      disabled,
    } = options;

    let {
      className: htmlClassName,
      children: htmlChildren,
      ...restHtmlProps
    } = htmlProps;

    const theme = useTheme("tag");
    const className = cx(
      theme.base,
      theme.size.default[size],
      theme.variant.default[variant],
      disabled
        ? theme.variant.disabled[variant]
        : tcm(
            theme.variant.hover[variant],
            theme.variant.active[variant],
            theme.variant.focus[variant],
          ),
      htmlClassName,
    );
    const prefixStyles = cx(theme.size.prefix[size]);
    const suffixStyles = cx(theme.size.suffix[size]);

    const children = (
      <>
        {prefix ? (
          <>{withIconA11y(prefix, { className: prefixStyles })}</>
        ) : null}
        <span>{htmlChildren}</span>
        {closable && suffix ? (
          <>{withIconA11y(suffix, { className: suffixStyles })}</>
        ) : null}
      </>
    );

    return { className, children, ...restHtmlProps };
  },
});

export const Tag = createComponent({
  as: "button",
  memo: true,
  useHook: useTag,
});
