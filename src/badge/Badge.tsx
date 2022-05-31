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
    themeColor = "default",
    prefix,
    ...props
  }) => {
    const theme = useTheme("badge");
    const className = cx(
      theme.base,
      theme.size.common[size],
      theme.variant[variant][themeColor],
      props.className,
    );

    const prefixStyles = cx(theme.size.prefix[size]);

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
  size?: keyof AdaptUI.GetThemeValue<"badge", "size", "common">;

  /**
   * How the badge should look?
   *
   * @default solid
   */
  variant?: keyof AdaptUI.GetThemeValue<"badge", "variant">;

  /**
   * How the badge should be themed?
   *
   * @default default
   */
  themeColor?: keyof AdaptUI.GetThemeValue<"badge", "variant", "solid">;

  /**
   * If added, the tag will show an icon before the tag's text.
   */
  prefix?: RenderProp;
};

export type BadgeProps<T extends As = "div"> = Props<BadgeOptions<T>>;
