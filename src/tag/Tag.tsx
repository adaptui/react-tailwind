import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { CloseIcon } from "../icons";
import { useTheme } from "../theme";
import { cx, RenderProp, tcm, withIconA11y } from "../utils";

export const useTag = createHook<TagOptions>(
  ({
    size = "md",
    variant = "solid",
    closable = false,
    prefix,
    suffix = closable ? <CloseIcon /> : null,
    disabled,
    ...props
  }) => {
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
      props.className,
    );
    const prefixStyles = cx(theme.size.prefix[size]);
    const suffixStyles = cx(theme.size.suffix[size]);

    const children = (
      <>
        {prefix ? (
          <>{withIconA11y(prefix, { className: prefixStyles })}</>
        ) : null}
        <span>{props.children as React.ReactNode}</span>
        {closable && suffix ? (
          <>{withIconA11y(suffix, { className: suffixStyles })}</>
        ) : null}
      </>
    );

    props = { ...props, className, children };
    props = useBox(props);

    return props;
  },
);

export const Tag = createComponent<TagOptions>(props => {
  const htmlProps = useTag(props);

  return createElement("button", htmlProps);
});

export type TagOptions<T extends As = "button"> = BoxOptions<T> & {
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
  prefix?: RenderProp;

  /**
   * If added, the tag will allow to show an icon before the tag's text.
   */
  closable?: boolean;

  /**
   * If added, the tag will show an icon after the tag's text.
   */
  suffix?: RenderProp;
};

export type TagProps<T extends As = "button"> = Props<TagOptions<T>>;
