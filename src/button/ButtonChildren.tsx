import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { ButtonProps } from "./Button";
import { runIfFn, withIconA11y } from "../utils";
import { ButtonSpinner, ButtonSpinnerWrapper } from "./ButtonSpinner";

export interface ButtonChildrenProps
  extends Pick<
    ButtonProps,
    "suffix" | "prefix" | "spinner" | "loading" | "iconOnly"
  > {
  size: NonNullable<ButtonProps["size"]>;
}

export const ButtonChildren: React.FC<ButtonChildrenProps> = props => {
  const { children, iconOnly, suffix, prefix, size, loading, spinner } = props;

  if ((!prefix && !suffix) || iconOnly) {
    if (!loading)
      return <>{iconOnly ? runIfFn(withIconA11y(iconOnly)) : children}</>;

    return (
      <>
        <ButtonSpinnerWrapper>
          <ButtonSpinner spinner={spinner} iconOnly={iconOnly} size={size} />
        </ButtonSpinnerWrapper>
        <div className="opacity-0">
          {iconOnly ? runIfFn(withIconA11y(iconOnly)) : children}
        </div>
      </>
    );
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

export interface ChildrenWithPrefixSuffixProps
  extends Pick<
    ButtonChildrenProps,
    "suffix" | "prefix" | "size" | "loading" | "spinner"
  > {}

const ChildrenWithPrefixSuffix: React.FC<ChildrenWithPrefixSuffixProps> =
  props => {
    const { suffix, prefix, children, size, loading, spinner } = props;
    const theme = useTheme();
    const suffixStyles = cx(theme.button.suffix.size[size]);
    const prefixStyles = cx(theme.button.prefix.size[size]);

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
