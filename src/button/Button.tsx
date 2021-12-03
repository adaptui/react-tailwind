import * as React from "react";
import { createComponent, createHook } from "reakit-system";
import {
  ButtonHTMLProps as ReakitButtonHTMLProps,
  ButtonOptions as ReakitButtonOptions,
  useButton as useReakitButton,
} from "reakit";
import { announce } from "@react-aria/live-announcer";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useButtonGroupContext } from "../button-group";
import { usePrevious } from "../hooks";
import { Spinner } from "../spinner";
import { useTheme } from "../theme";
import { cx, RenderPropType, withIconA11y } from "../utils";

import { BUTTON_KEYS } from "./__keys";
import { ButtonFullWidthSpinner, ButtonSpinner } from "./ButtonSpinner";

export type ButtonOptions = BoxOptions &
  ReakitButtonOptions & {
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
     * If added, the button will only show an icon ignoring other childrens.
     */
    iconOnly?: RenderPropType;

    /**
     * If added, the button will show an icon before the button's text.
     */
    suffix?: RenderPropType;

    /**
     * If added, the button will show an icon before the button's text.
     */
    prefix?: RenderPropType;

    /**
     * If `true`, the button will show a spinner.
     *
     * @default false
     */
    loading?: boolean;

    /**
     * If added, the button will show this spinner components
     *
     * @default Spinner Component
     */
    spinner?: RenderPropType;
  };

export type ButtonHTMLProps = Omit<BoxHTMLProps, "prefix"> &
  Omit<ReakitButtonHTMLProps, "prefix"> & {};

export type ButtonProps = ButtonOptions & ButtonHTMLProps;

export const useButton = createHook<ButtonOptions, ButtonHTMLProps>({
  name: "Button",
  compose: [useBox, useReakitButton],
  keys: BUTTON_KEYS,

  useOptions(options, htmlProps) {
    const {
      size = "md",
      variant = "solid",
      loading = false,
      spinner = <Spinner size="em" />,
      ...restOptions
    } = options;

    return { size, variant, loading, spinner, ...restOptions };
  },

  useProps(options, htmlProps) {
    const {
      size: _size = "md",
      variant: _variant = "solid",
      loading = false,
      spinner = <Spinner size="em" />,
      iconOnly,
      prefix,
      suffix,
    } = options;

    let {
      className: htmlClassName,
      children: htmlChildren,
      disabled: htmlDisabled,
      ...restHtmlProps
    } = htmlProps;

    const disabled = htmlDisabled || loading;
    const groupcontext = useButtonGroupContext();
    const size = groupcontext?.size || _size;
    const variant = groupcontext?.variant || _variant;

    const button = useTheme("button");
    const className = cx(
      button.base.normal,
      groupcontext?.collapsed ? "" : button.base.notCollapsed,
      !iconOnly ? button.size.default[size] : button.size.iconOnly.base[size],
      button.variant.default[variant],
      button.variant.hover[variant],
      button.variant.active[variant],
      button.variant.focus[variant],
      button.variant.disabled[variant],
      htmlClassName,
    );
    const suffixStyles = cx(button.size.suffix[size]);
    const prefixStyles = cx(button.size.prefix[size]);

    const prevLoading = usePrevious(loading);

    React.useEffect(() => {
      if (loading) announce("Started loading");

      if (!loading && prevLoading) announce("Stopped loading");
    }, [loading, prevLoading]);

    const children = (
      <>
        {(!prefix && !suffix) || iconOnly ? (
          loading ? (
            <ButtonFullWidthSpinner size={size} spinner={spinner}>
              {iconOnly ? withIconA11y(iconOnly) : htmlChildren}
            </ButtonFullWidthSpinner>
          ) : (
            <>{iconOnly ? withIconA11y(iconOnly) : htmlChildren}</>
          )
        ) : (
          <>
            {prefix ? (
              loading && !suffix ? (
                <ButtonSpinner spinner={spinner} prefix={prefix} size={size} />
              ) : (
                <>{withIconA11y(prefix, { className: prefixStyles })}</>
              )
            ) : null}
            <span>{htmlChildren}</span>
            {suffix ? (
              loading ? (
                <ButtonSpinner size={size} spinner={spinner} suffix={suffix} />
              ) : (
                <>{withIconA11y(suffix, { className: suffixStyles })}</>
              )
            ) : null}
          </>
        )}
      </>
    );

    return { className, children, disabled, ...restHtmlProps };
  },
});

export const Button = createComponent({
  as: "button",
  memo: true,
  useHook: useButton,
});
