import { createComponent, createHook } from "reakit-system";
import { cx } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";

import { BADGE_KEYS } from "./__keys";

export type BadgeOptions = BoxOptions & {
  /**
   * How large should the badge be?
   *
   * @default md
   */
  size?: keyof Renderlesskit.GetThemeValue<"badge", "size">;

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
};

export type BadgeHTMLProps = BoxHTMLProps;

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
    const { size = "md", variant = "solid", themeColor = "default" } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const badge = useTheme("badge");
    const className = cx(
      badge.base,
      badge.size[size],
      badge.variant[variant][themeColor],
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const Badge = createComponent({
  as: "div",
  memo: true,
  useHook: useBadge,
});
