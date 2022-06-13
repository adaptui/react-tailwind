import React from "react";
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
import { announce } from "@react-aria/live-announcer";

import { Box, useBox } from "../box";
import { useButtonGroupContext } from "../button-group";
import { usePrevious } from "../hooks";
import { Spinner } from "../spinner";
import { useTheme } from "../theme";
import { cx, RenderProp, withIconA11yNew } from "../utils";

import { ButtonFullWidthSpinner, ButtonSpinner } from "./ButtonSpinner";

export const useButton = createHook<ButtonOptions>(
  ({
    size: _size = "md",
    themeColor: _themeColor = "base",
    variant: _variant = "solid",
    prefix: _prefix,
    suffix: _suffix,
    iconOnly: _iconOnly,
    loading = false,
    spinner = <Spinner size="em" themeColor="current" />,
    ...props
  }) => {
    const disabled = props.disabled || loading;

    const groupcontext = useButtonGroupContext();
    const size = groupcontext?.size || _size;
    const variant = groupcontext?.variant || _variant;

    const button = useTheme("button");
    const className = cx(
      button.base.default,
      groupcontext?.collapsed ? "" : button.base.notCollapsed,
      !_iconOnly ? button.size[size].base : button.size[size].iconOnly.base,
      button.themeColor[_themeColor]?.[variant].default,
      button.themeColor[_themeColor]?.[variant].hover,
      button.themeColor[_themeColor]?.[variant].active,
      button.themeColor[_themeColor]?.[variant].focus,
      button.themeColor[_themeColor]?.[variant].disabled,
      props.className,
    );
    const prefixStyles = cx(button.size[size].prefix);
    const prefix = _prefix
      ? withIconA11yNew(_prefix, { className: prefixStyles })
      : null;
    const suffixStyles = cx(button.size[size].suffix);
    const suffix = _suffix
      ? withIconA11yNew(_suffix, { className: suffixStyles })
      : null;
    const iconOnlyStyles = cx(button.size[size].iconOnly.icon);
    const iconOnly = _iconOnly
      ? withIconA11yNew(_iconOnly, { className: iconOnlyStyles })
      : null;

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
              <>{iconOnly || props.children}</>
            </ButtonFullWidthSpinner>
          ) : (
            <>{iconOnly || props.children}</>
          )
        ) : (
          <>
            {prefix ? (
              loading && !suffix ? (
                <ButtonSpinner size={size} spinner={spinner} prefix={prefix} />
              ) : (
                <>{prefix}</>
              )
            ) : null}
            <Box>{props.children}</Box>
            {suffix ? (
              loading ? (
                <ButtonSpinner size={size} spinner={spinner} suffix={suffix} />
              ) : (
                <>{suffix}</>
              )
            ) : null}
          </>
        )}
      </>
    );
    props = { ...props, className, children, disabled };
    props = useAriakitButton(props);
    props = useBox(props);

    return props;
  },
);

export const Button = createComponent<ButtonOptions>(props => {
  const htmlProps = useButton(props);

  return createElement("button", htmlProps);
});

export type BadgePrefixProps = { className?: string };
export type BadgeSuffixProps = { className?: string };
export type BadgeIconOnlyProps = { className?: string };
export type BadgeSpinnerProps = { className?: string };

export type ButtonOptions<T extends As = "button"> = Omit<
  AriakitButtonOptions<T>,
  "size" | "prefix"
> & {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size?: keyof AdaptUI.GetThemeValue<"button", "size">;

  /**
   * How the button should be themed?
   *
   * @default base
   */
  themeColor?: keyof AdaptUI.GetThemeValue<"button", "themeColor">;

  /**
   * How the button should look?
   *
   * @default solid
   */
  variant?: keyof AdaptUI.GetThemeValue<"button", "themeColor", "base">;

  /**
   * If added, the button will show an icon before the button's text.
   */
  prefix?: RenderProp<BadgePrefixProps>;

  /**
   * If added, the button will show an icon before the button's text.
   */
  suffix?: RenderProp<BadgeSuffixProps>;

  /**
   * If added, the button will only show an icon ignoring other childrens.
   */
  iconOnly?: RenderProp<BadgeIconOnlyProps>;

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
  spinner?: RenderProp<BadgeSpinnerProps>;
};

export type ButtonProps<T extends As = "button"> = Props<ButtonOptions<T>>;
