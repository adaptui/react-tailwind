import { ButtonOptions, useButton } from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { CloseIcon } from "../icons";
import { useTheme } from "../theme";
import { cx, passPropsNew, RenderProp, tcm } from "../utils";

export const useTag = createHook<TagOptions>(
  ({
    size = "md",
    themeColor = "base",
    variant = "solid",
    closable = false,
    suffix = closable ? <CloseIcon /> : null,
    prefix,
    ...props
  }) => {
    const theme = useTheme("tag");
    const className = tcm(
      theme.base,
      theme.size[size]?.default,
      theme.themeColor[themeColor]?.[variant].default,
      theme.themeColor[themeColor]?.[variant].hover,
      theme.themeColor[themeColor]?.[variant].active,
      theme.themeColor[themeColor]?.[variant].focus,
      theme.themeColor[themeColor]?.[variant].disabled,
      props.className,
    );

    const prefixStyles = cx(theme.size[size]?.prefix);
    const suffixStyles = cx(theme.size[size]?.suffix);

    const state = {
      size,
      themeColor,
      variant,
      suffix,
    };

    const children = (
      <>
        {prefix ? (
          <>{passPropsNew(prefix, { className: prefixStyles }, state)}</>
        ) : null}
        <span>{props.children as React.ReactNode}</span>
        {closable && suffix ? (
          <>{passPropsNew(suffix, { className: suffixStyles }, state)}</>
        ) : null}
      </>
    );

    props = { ...props, className, children };
    props = useButton(props);

    return props;
  },
);

export const Tag = createComponent<TagOptions>(props => {
  const htmlProps = useTag(props);

  return createElement("button", htmlProps);
});

export type TagState = {
  /**
   * How large should the tag be?
   *
   * @default md
   */
  size?: keyof AdaptUI.GetThemeValue<"tag", "size">;

  /**
   * How the tag should be themed?
   *
   * @default base
   */
  themeColor: keyof AdaptUI.GetThemeValue<"tag", "themeColor">;

  /**
   * How the tag should look?
   *
   * @default solid
   */
  variant?: keyof AdaptUI.GetThemeValue<"tag", "themeColor", "base">;

  /**
   * If added, the tag will show an icon after the tag's text.
   */
  prefix?: RenderProp<TagRenderProps & TagState>;

  /**
   * If added, the tag will show an icon after the tag's text.
   */
  suffix?: RenderProp<TagRenderProps & TagState>;

  /**
   * If added, the tag will allow to show an icon before the tag's text.
   */
  closable?: boolean;
};

export type TagRenderProps = Pick<TagProps, "className">;

export type TagOptions<T extends As = "button"> = Omit<
  ButtonOptions<T>,
  "size"
> &
  Partial<TagState>;

export type TagProps<T extends As = "button"> = Props<TagOptions<T>>;
