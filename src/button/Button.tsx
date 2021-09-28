import * as React from "react";
import { createComponent, createHook } from "reakit-system";
import {
  ButtonHTMLProps as ReakitButtonHTMLProps,
  ButtonOptions as ReakitButtonOptions,
  useButton as useReakitButton,
} from "reakit";
import { announce } from "@react-aria/live-announcer";

import { usePrevious } from "../hooks";
import { useTheme } from "../theme";
import { runIfFn, tcm, withIconA11y } from "../utils";
import { RenderPropType } from "../utils/types";

import { BUTTON_KEYS } from "./__keys";
import { ButtonFullWidthSpinner, ButtonSpinner } from "./ButtonSpinner";

export type ButtonOptions = ReakitButtonOptions & {
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
   */
  spinner?: RenderPropType;
};

export type ButtonHTMLProps = Omit<ReakitButtonHTMLProps, "prefix">;

export type ButtonProps = ButtonOptions & ButtonHTMLProps;

export const useButton = createHook<ButtonOptions, ButtonHTMLProps>({
  name: "Button",
  compose: useReakitButton,
  keys: BUTTON_KEYS,

  useOptions(options, htmlProps) {
    const {
      size = "md",
      variant = "solid",
      loading = false,
      ...restOptions
    } = options;
    const { disabled: htmlDisabled } = htmlProps;
    const disabled = htmlDisabled || loading;

    return { size, variant, loading, disabled, ...restOptions };
  },

  useProps(options, htmlProps) {
    const {
      size = "md",
      variant = "solid",
      loading = "false",
      iconOnly,
      prefix,
      suffix,
      spinner,
      disabled,
    } = options;
    const {
      className: htmlClassName,
      children: htmlChildren,
      ...restHtmlProps
    } = htmlProps;

    const button = useTheme("button");
    const className = tcm(
      button.base,
      !iconOnly ? button.size.default[size] : button.size.iconOnly.base[size],
      button.variant.default[variant],
      button.variant.hover[variant],
      button.variant.active[variant],
      button.variant.focus[variant],
      button.variant.disabled[variant],
      htmlClassName,
    );
    const suffixStyles = tcm(button.size.suffix[size]);
    const prefixStyles = tcm(button.size.prefix[size]);

    const prevLoading = usePrevious(loading);

    React.useEffect(() => {
      if (loading) announce("Started loading");

      if (!loading && prevLoading) announce("Stopped loading");
    }, [loading, prevLoading]);

    const children = (props: ButtonHTMLProps) => {
      return (
        <button {...props}>
          {(!prefix && !suffix) || iconOnly ? (
            loading ? (
              <ButtonFullWidthSpinner spinner={spinner} size={size}>
                {iconOnly
                  ? withIconA11y(iconOnly)
                  : runIfFn(htmlChildren, props)}
              </ButtonFullWidthSpinner>
            ) : (
              // <>{"noloading"}</>
              <>
                {iconOnly
                  ? withIconA11y(iconOnly)
                  : runIfFn(htmlChildren, props)}
              </>
            )
          ) : (
            <>
              {prefix ? (
                loading && !suffix ? (
                  <ButtonSpinner
                    spinner={spinner}
                    prefix={prefix}
                    size={size}
                  />
                ) : (
                  <>{withIconA11y(prefix, { className: prefixStyles })}</>
                )
              ) : null}
              <span>{runIfFn(htmlChildren, props)}</span>
              {suffix ? (
                loading ? (
                  <ButtonSpinner
                    spinner={spinner}
                    suffix={suffix}
                    size={size}
                  />
                ) : (
                  <>{withIconA11y(suffix, { className: suffixStyles })}</>
                )
              ) : null}
            </>
          )}
        </button>
      );
    };

    return { className, children, disabled, ...restHtmlProps };
  },
});

export const Button = createComponent({
  as: "button",
  memo: true,
  useHook: useButton,
});
