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

import { Box } from "../box";
import { useButtonGroupContext } from "../button-group";
import { usePrevious } from "../hooks";
import { Spinner } from "../spinner";
import { useTheme } from "../theme";
import { cx, RenderProp, tcm, withIconA11yNew } from "../utils";

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

    const group = useButtonGroupContext();

    const size = group?.size || _size;
    const variant = group?.variant || _variant;
    const themeColor = group?.themeColor || _themeColor;

    const state = {
      size,
      themeColor,
      variant,
      prefix: _prefix,
      suffix: _suffix,
      iconOnly: _iconOnly,
      loading,
      spinner,
    };

    const button = useTheme("button");
    const className = tcm(
      button.base.default,
      group?.type === "collapsed" ? "" : button.base.group,
      !_iconOnly ? button.size[size]?.base : button.size[size]?.iconOnly?.base,
      button.themeColor[themeColor]?.[variant]?.default,
      button.themeColor[themeColor]?.[variant]?.hover,
      button.themeColor[themeColor]?.[variant]?.active,
      button.themeColor[themeColor]?.[variant]?.focus,
      button.themeColor[themeColor]?.[variant]?.disabled,
      props.className,
    );

    const buttonRenderProps = (className: string) => ({ className, disabled });
    const prefixStyles = cx(button.size[size]?.prefix);
    const prefix = _prefix
      ? withIconA11yNew(_prefix, buttonRenderProps(prefixStyles), state)
      : null;
    const suffixStyles = cx(button.size[size]?.suffix);
    const suffix = _suffix
      ? withIconA11yNew(_suffix, buttonRenderProps(suffixStyles), state)
      : null;
    const iconOnlyStyles = cx(button.size[size]?.iconOnly?.icon);
    const iconOnly = _iconOnly
      ? withIconA11yNew(_iconOnly, buttonRenderProps(iconOnlyStyles), state)
      : null;

    const prevLoading = usePrevious(loading);

    React.useEffect(() => {
      if (loading) announce("Started loading");

      if (!loading && prevLoading) announce("Stopped loading");
    }, [loading, prevLoading]);

    const prefixEl =
      loading && !suffix ? (
        <ButtonSpinner
          size={size}
          spinner={spinner}
          prefix={prefix}
          state={state}
        />
      ) : (
        <>{prefix}</>
      );
    const suffixEl = loading ? (
      <ButtonSpinner
        size={size}
        spinner={spinner}
        suffix={suffix}
        state={state}
      />
    ) : (
      <>{suffix}</>
    );
    const iconOnlyEl = loading ? (
      <ButtonFullWidthSpinner size={size} spinner={spinner} state={state}>
        {iconOnly || props.children}
      </ButtonFullWidthSpinner>
    ) : (
      <>{iconOnly || props.children}</>
    );

    const children = (
      <>
        {(!prefix && !suffix) || iconOnly ? (
          iconOnlyEl
        ) : (
          <>
            {prefix ? prefixEl : null}
            <Box>{props.children}</Box>
            {suffix ? suffixEl : null}
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

export type ButtonState = {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size: keyof AdaptUI.GetThemeValue<"button", "size">;

  /**
   * How the button should be themed?
   *
   * @default base
   */
  themeColor: keyof AdaptUI.GetThemeValue<"button", "themeColor">;

  /**
   * How the button should look?
   *
   * @default solid
   */
  variant: keyof AdaptUI.GetThemeValue<"button", "themeColor", "base">;

  /**
   * If added, the button will show an icon before the button's text.
   */
  prefix?: RenderProp<ButtonRenderProps & ButtonState>;

  /**
   * If added, the button will show an icon before the button's text.
   */
  suffix?: RenderProp<ButtonRenderProps & ButtonState>;

  /**
   * If added, the button will only show an icon ignoring other childrens.
   */
  iconOnly?: RenderProp<ButtonRenderProps & ButtonState>;

  /**
   * If `true`, the button will show a spinner.
   *
   * @default false
   */
  loading: boolean;

  /**
   * If added, the button will show this spinner components
   *
   * @default Spinner Component
   */
  spinner: RenderProp<ButtonRenderProps & ButtonState>;
};

export type ButtonRenderProps = Pick<ButtonProps, "className" | "disabled">;

export type ButtonOptions<T extends As = "button"> = Omit<
  AriakitButtonOptions<T>,
  "size" | "prefix"
> &
  Partial<ButtonState>;

export type ButtonProps<T extends As = "button"> = Props<ButtonOptions<T>>;
