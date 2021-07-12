import {
  Button as ReakitButton,
  ButtonProps as ReakitButtonProps,
} from "reakit";
import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Spinner } from "../spinner";
import { runIfFn, withIconA11y } from "../utils";
import { forwardRefWithAs } from "../utils/types";
import { rest, size } from "lodash-es";
import { spinner } from "../theme/defaultTheme/spinner";
import { usePrevious } from "../hooks";

export type ButtonProps = Omit<ReakitButtonProps, "prefix"> & {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size?: keyof Renderlesskit.GetThemeValue<"newButton", "size">;
  /**
   * How the button should look?
   *
   * @default solid
   */
  variant?: keyof Renderlesskit.GetThemeValue<"newButton", "variant">;
  /**
   * If added, the button will only show an icon ignoring other childrens.
   */
  iconOnly?: React.ReactElement;
  /**
   * If added, the button will show an icon before the button's text.
   */
  suffix?: React.ReactElement;
  /**
   * If added, the button will show an icon before the button's text.
   */
  prefix?: React.ReactElement;
  /**
   * If `true`, the button will be disabled.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the button will show a spinner.
   *
   * @default false
   */
  loading?: boolean;
  /**
   * If added, the button will show this spinner components
   */
  spinner?: React.ReactElement;
};

export const Button = forwardRefWithAs<
  ButtonProps,
  HTMLButtonElement,
  "button"
>((props, ref) => {
  const {
    children,
    size = "sm",
    variant = "solid",
    iconOnly,
    suffix,
    prefix,
    loading = false,
    spinner,
    disabled = false,
    className,
    ...rest
  } = props;
  const _disabled = disabled || loading;

  const theme = useTheme();
  const baseStyles = cx(
    theme.newButton.base,
    !iconOnly
      ? theme.newButton.size[size]
      : theme.newButton.iconOnly.size[size],
    theme.newButton.variant[variant],
    className,
  );

  const prevLoading = usePrevious(loading);

  return (
    <ReakitButton
      ref={ref}
      className={baseStyles}
      aria-disabled={_disabled}
      {...rest}
    >
      <span aria-live="assertive" className="sr-only">
        {loading ? <FlashMessage>"Started loading"</FlashMessage> : ""}
        {prevLoading && !loading ? (
          <FlashMessage>"Stopped loading"</FlashMessage>
        ) : (
          ""
        )}
      </span>
      {loading && !suffix && !prefix ? (
        <>
          <ButtonSpinnerWrapper>
            <ButtonSpinner spinner={spinner} iconOnly={iconOnly} size={size} />
          </ButtonSpinnerWrapper>
          <div className="opacity-0">
            <ButtonChildren
              iconOnly={iconOnly}
              suffix={suffix}
              prefix={prefix}
              size={size}
              loading={loading}
              spinner={spinner}
            >
              {children}
            </ButtonChildren>
          </div>
        </>
      ) : (
        <ButtonChildren
          iconOnly={iconOnly}
          suffix={suffix}
          prefix={prefix}
          size={size}
          loading={loading}
          spinner={spinner}
        >
          {children}
        </ButtonChildren>
      )}
    </ReakitButton>
  );
});

Button.displayName = "Button";

interface ButtonChildrenCommonProps
  extends Pick<
    ButtonProps,
    "suffix" | "prefix" | "spinner" | "size" | "loading"
  > {
  size: NonNullable<ButtonProps["size"]>;
}

interface ChildrenWithPrefixSuffixProps extends ButtonChildrenCommonProps {}

const ChildrenWithPrefixSuffix: React.FC<ChildrenWithPrefixSuffixProps> =
  props => {
    const { suffix, prefix, children, size, loading, spinner } = props;
    const theme = useTheme();
    const suffixStyles = cx(theme.newButton.suffix.size[size]);
    const prefixStyles = cx(theme.newButton.prefix.size[size]);

    return (
      <>
        {prefix ? (
          loading && !suffix ? (
            <ButtonSpinner spinner={spinner} size={size} />
          ) : (
            runIfFn(withIconA11y(prefix, { className: prefixStyles }))
          )
        ) : null}
        <span>{children}</span>
        {suffix ? (
          loading ? (
            <ButtonSpinner spinner={spinner} size={size} />
          ) : (
            runIfFn(withIconA11y(suffix, { className: suffixStyles }))
          )
        ) : null}
      </>
    );
  };

interface ButtonChildrenProps extends ButtonChildrenCommonProps {
  iconOnly?: ButtonProps["iconOnly"];
}

const ButtonChildren: React.FC<ButtonChildrenProps> = props => {
  const { children, iconOnly, suffix, prefix, size, loading, spinner } = props;

  if (iconOnly) {
    // Removed ButtonIcon with span which causing small displacement
    // If the icon is only a vaid element add the required accessibility attrs
    // If they are passing a function meaning they are passing a custom icon
    // which they need to add the custom styles
    // @ts-ignore
    return runIfFn(withIconA11y(iconOnly));
  }

  return (
    <ChildrenWithPrefixSuffix
      suffix={suffix}
      prefix={prefix}
      size={size}
      loading={loading}
      spinner={spinner}
    >
      {children}
    </ChildrenWithPrefixSuffix>
  );
};

interface ButtonSpinnerProps
  extends Pick<ButtonChildrenCommonProps, "spinner" | "size"> {
  iconOnly?: ButtonProps["iconOnly"];
}

const ButtonSpinner: React.FC<ButtonSpinnerProps> = props => {
  const { spinner, iconOnly, size } = props;
  const theme = useTheme();

  if (spinner) return <ButtonSpinnerWrapper>{spinner}</ButtonSpinnerWrapper>;

  const spinnerStyles = cx(
    !iconOnly
      ? theme.newButton.spinner.size[size]
      : theme.newButton.spinner.iconOnly.size[size],
  );

  return <Spinner className={spinnerStyles} size="em" />;
};

const ButtonSpinnerWrapper: React.FC = props => (
  <div className="absolute flex items-center justify-center" {...props} />
);

export const FlashMessage: React.FC = props => {
  const { children } = props;

  const [message, setMessage] = React.useState(children);

  React.useEffect(() => {
    let timer = setTimeout(() => setMessage(""), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <span>{message}</span>;
};
