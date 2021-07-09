import { cx } from "@renderlesskit/react";
import * as React from "react";
import {
  Button as ReakitButton,
  ButtonProps as ReakitButtonProps,
} from "reakit";
import { useTheme } from "../theme";
import { Spinner } from "../spinner";
import { Dict, forwardRefWithAs } from "../utils/types";
import { runIfFn } from "../utils";
import { spinner } from "../theme/defaultTheme/spinner";

export type NonNullable<T> = Exclude<T, null | undefined>;

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

const spinnerButtonSizeMap = {
  sm: "xs",
  md: "xs",
  lg: "xs",
  xl: "sm",
} as const;

export const addIconA11y = (icon: React.ReactElement, props?: Dict) => {
  return React.isValidElement(icon)
    ? React.cloneElement(icon, {
        // @ts-ignore
        role: "img",
        focusable: false,
        "aria-hidden": true,
        ...props,
      })
    : icon;
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
    loading = false,
    spinner,
    disabled = false,
    className,
    ...rest
  } = props;
  const _disabled = disabled || loading;
  const hasIconOnly = !!iconOnly;

  const theme = useTheme();
  const {
    base,
    size: _size,
    variant: _variant,
    spinner: spinnerStyle,
    iconOnly: _iconOnly,
  } = theme.newButton;
  const baseStyles = cx(
    base,
    !iconOnly ? _size[size] : _iconOnly.size[size],
    _variant[variant],
    className,
  );

  return (
    <ReakitButton
      ref={ref}
      className={baseStyles}
      disabled={_disabled}
      {...rest}
    >
      {loading ? (
        <ButtonSpinner
          spinner={spinner}
          hasIconOnly={hasIconOnly}
          size={size}
          spinnerStyle={spinnerStyle}
        />
      ) : null}

      {!loading ? (
        <ChildrenOrIconOnly iconOnly={iconOnly}>{children}</ChildrenOrIconOnly>
      ) : (
        <div className="opacity-0">
          <ChildrenOrIconOnly iconOnly={iconOnly}>
            {children}
          </ChildrenOrIconOnly>
        </div>
      )}
    </ReakitButton>
  );
});

Button.displayName = "Button";

type ChildrenOrIconOnlyProps = {
  iconOnly?: React.ReactElement;
};

const ChildrenOrIconOnly: React.FC<ChildrenOrIconOnlyProps> = props => {
  const { children, iconOnly } = props;
  if (!iconOnly) return <>{children}</>;

  // Removed ButtonIcon with span which causing small displacement
  // If the icon is only a vaid element add the required accessibility attrs
  // If they are passing a function meaning they are passing a custom icon
  // which they need to add the custom styles
  // @ts-ignore
  return <>{runIfFn(addIconA11y(iconOnly))}</>;
};

type ButtonSpinnerProps = {
  spinner?: React.ReactElement;
  hasIconOnly: boolean;
  size: NonNullable<ButtonProps["size"]>;
  spinnerStyle: Renderlesskit.GetThemeValue<"newButton", "spinner">;
};

const ButtonSpinner: React.FC<ButtonSpinnerProps> = props => {
  const { spinner, hasIconOnly, spinnerStyle, size } = props;
  if (spinner) return <ButtonSpinnerWrapper>{spinner}</ButtonSpinnerWrapper>;

  const spinnerStyles = cx(
    !hasIconOnly ? spinnerStyle.size[size] : spinnerStyle.iconOnly.size[size],
  );

  return (
    <ButtonSpinnerWrapper>
      <Spinner className={spinnerStyles} size="em" />
    </ButtonSpinnerWrapper>
  );
};

const ButtonSpinnerWrapper: React.FC = props => (
  <div className="absolute flex items-center justify-center" {...props} />
);
