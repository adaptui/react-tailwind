import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { Box, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx, RenderProp, withIconA11yNew } from "../utils";

export const useBadge = createHook<BadgeOptions>(
  ({
    size = "md",
    themeColor = "base",
    variant = "solid",
    prefix: _prefix,
    ...props
  }) => {
    const badge = useTheme("badge");
    const className = cx(
      badge.base,
      badge.size[size]?.base,
      badge.themeColor[themeColor]?.[variant],
      props.className,
    );

    const prefixStyles = cx(badge.size[size]?.prefix);
    const prefix = _prefix
      ? withIconA11yNew<BadgeRenderProps, BadgeState>(
          _prefix,
          { className: prefixStyles },
          { size, themeColor, variant, prefix: _prefix },
        )
      : null;

    const children = (
      <>
        {prefix}
        <Box as="span">{props.children}</Box>
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

export type BadgeState = {
  /**
   * How large should the badge be?
   *
   * @default md
   */
  size: keyof AdaptUI.GetThemeValue<"badge", "size">;

  /**
   * How the badge should be themed?
   *
   * @default base
   */
  themeColor: keyof AdaptUI.GetThemeValue<"badge", "themeColor">;

  /**
   * How the badge should look?
   *
   * @default solid
   */
  variant: keyof AdaptUI.GetThemeValue<"badge", "themeColor", "base">;

  /**
   * If added, the badge will show an icon before the badge's text.
   */
  prefix: RenderProp<BadgeRenderProps & BadgeState>;
};

export type BadgeRenderProps = Pick<BadgeProps, "className">;

export type BadgeOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<BadgeState>;

export type BadgeProps<T extends As = "div"> = Props<BadgeOptions<T>>;
