import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx, RenderProp, withIconA11y } from "../utils";

export const useBadge = createHook<BadgeOptions>(
  ({
    size = "md",
    variant = "solid",
    themeColor = "base",
    prefix,
    ...props
  }) => {
    const badge = useTheme("badge");
    const className = cx(
      badge.base,
      badge.size[size].base,
      badge.themeColor[themeColor][variant],
      props.className,
    );

    const prefixStyles = cx(badge.size[size].prefix);

    const children = (
      <>
        {prefix ? (
          <>{withIconA11y(prefix, { className: prefixStyles })}</>
        ) : null}
        <span>{props.children as React.ReactNode}</span>
      </>
    );

    props = { ...props, className, children };
    props = useBox(props);

    return props;
  },
);

export const Badge = createComponent<BadgeOptions>(props => {
  const htmlProps = useBadge(props);

  return createElement("div", htmlProps);
});

export type BadgeOptions<T extends As = "div"> = BoxOptions<T> & {
  /**
   * How large should the badge be?
   *
   * @default md
   */
  size?: keyof AdaptUI.GetThemeValue<"badge", "size">;

  /**
   * How the badge should be themed?
   *
   * @default base
   */
  themeColor?: keyof AdaptUI.GetThemeValue<"badge", "themeColor">;

  /**
   * How the badge should look?
   *
   * @default solid
   */
  variant?: keyof AdaptUI.GetThemeValue<"badge", "themeColor", "base">;

  /**
   * If added, the badge will show an icon before the badge's text.
   */
  prefix?: RenderProp;
};

export type BadgeProps<T extends As = "div"> = Props<BadgeOptions<T>>;
