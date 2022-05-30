import React from "react";
import { announce } from "@react-aria/live-announcer";
import {
  ButtonOptions as AriakitButtonOptions,
  useButton as useAriakitButton,
} from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { useButtonGroupContext } from "../button-group";
import { usePrevious } from "../hooks";
import { Spinner } from "../spinner";
import { useTheme } from "../theme";
import { cx, RenderProp, tcm, withIconA11y } from "../utils";

import { ButtonFullWidthSpinner, ButtonSpinner } from "./ButtonSpinner";

export const useButton = createHook<ButtonOptions>(
  ({
    size: _size = "md",
    variant: _variant = "solid",
    prefix,
    suffix,
    iconOnly,
    loading = false,
    spinner = <Spinner size="em" />,
    ...props
  }) => {
    const disabled = props.disabled || loading;

    const groupcontext = useButtonGroupContext();
    const size = groupcontext?.size || _size;
    const variant = groupcontext?.variant || _variant;

    const button = useTheme("button");
    const className = cx(
      button.base.common,
      groupcontext?.collapsed ? "" : button.base.notCollapsed,
      !iconOnly
        ? button.size.common[size]
        : tcm(
            button.size.iconOnly.base[size],
            button.size.iconOnly.spinner[size],
          ),
      button.variant.default[variant],
      button.variant.hover[variant],
      button.variant.active[variant],
      button.variant.focus[variant],
      button.variant.disabled[variant],
      props.className,
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
              <>
                {iconOnly
                  ? withIconA11y(iconOnly)
                  : (props.children as React.ReactNode)}
              </>
            </ButtonFullWidthSpinner>
          ) : (
            <>{iconOnly ? withIconA11y(iconOnly) : props.children}</>
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
            <span>{props.children as React.ReactNode}</span>
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
    props = { ...props, className, children, disabled };
    props = useAriakitButton(props);

    return props;
  },
);

export const Button = createComponent<ButtonOptions>(props => {
  const htmlProps = useButton(props);

  return createElement("button", htmlProps);
});

export type ButtonOptions<T extends As = "button"> = Omit<
  AriakitButtonOptions<T>,
  "size" | "prefix"
> & {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size?: keyof Renderlesskit.GetThemeValue<"button", "size", "common">;

  /**
   * How the button should look?
   *
   * @default solid
   */
  variant?: keyof Renderlesskit.GetThemeValue<"button", "variant", "default">;

  /**
   * If added, the button will only show an icon ignoring other childrens.
   */
  iconOnly?: RenderProp;

  /**
   * If added, the button will show an icon before the button's text.
   */
  suffix?: RenderProp;

  /**
   * If added, the button will show an icon before the button's text.
   */
  prefix?: RenderProp;

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
  spinner?: RenderProp;
};

export type ButtonProps<T extends As = "button"> = Props<ButtonOptions<T>>;
