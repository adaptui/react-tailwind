import { createHook } from "reakit-system";
import { createComponent } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx, RenderPropType, withIconA11y } from "../utils";

import { BADGE_KEYS } from "./__keys";

export type BadgeOptions = BoxOptions & {
  /**
   * How large should the badge be?
   *
   * @default md
   */
  size?: keyof Renderlesskit.GetThemeValue<"badge", "size", "common">;

  /**
   * How the badge should look?
   *
   * @default solid
   */
  variant?: keyof Renderlesskit.GetThemeValue<"badge", "variant">;

  /**
   * How the badge should be themed?
   *
   * @default default
   */
  themeColor?: keyof Renderlesskit.GetThemeValue<"badge", "variant", "solid">;

  /**
   * If added, the tag will show an icon before the tag's text.
   */
  prefix?: RenderPropType;
};

export type BadgeHTMLProps = Omit<BoxHTMLProps, "prefix">;

export type BadgeProps = BadgeOptions & BadgeHTMLProps;

export const useBadge = createHook<BadgeOptions, BadgeHTMLProps>({
  name: "Badge",
  compose: useBox,
  keys: BADGE_KEYS,

  useOptions(options, htmlProps) {
    const {
      size = "md",
      variant = "solid",
      themeColor = "default",
      ...restOptions
    } = options;

    return { size, variant, themeColor, ...restOptions };
  },

  useProps(options, htmlProps) {
    const {
      size = "md",
      variant = "solid",
      themeColor = "default",
      prefix,
    } = options;
    const {
      className: htmlClassName,
      children: htmlChildren,
      ...restHtmlProps
    } = htmlProps;

    const theme = useTheme("badge");
    const className = cx(
      theme.base,
      theme.size.common[size],
      theme.variant[variant][themeColor],
      htmlClassName,
    );

    const prefixStyles = cx(theme.size.prefix[size]);

    const children = (
      <>
        {prefix ? (
          <>{withIconA11y(prefix, { className: prefixStyles })}</>
        ) : null}
        <span>{htmlChildren}</span>
      </>
    );

    return { className, children, ...restHtmlProps };
  },
});

export const Badge = createComponent({
  as: "div",
  memo: true,
  useHook: useBadge,
});
