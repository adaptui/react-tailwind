import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Spinner } from "../spinner";
import { ButtonProps } from "./Button";
import { runIfFn } from "..";

export type ButtonSpinnerProps = Partial<
  Pick<ButtonProps, "spinner" | "size" | "iconOnly" | "prefix" | "suffix">
> & {};

export const ButtonSpinner: React.FC<ButtonSpinnerProps> = props => {
  const { spinner, iconOnly, prefix, suffix, size = "md" } = props;
  const button = useTheme("button");

  const spinnerStyles = cx(
    !iconOnly
      ? button.spinner.default.size[size]
      : button.spinner.iconOnly.size[size],
    prefix ? button.spinner.prefix.size[size] : "",
    suffix ? button.spinner.suffix.size[size] : "",
  );

  if (spinner) return <>{runIfFn(spinner, { className: spinnerStyles })}</>;

  return <Spinner className={spinnerStyles} size="em" />;
};

export const ButtonFullWidthSpinner: React.FC<ButtonSpinnerProps> = props => {
  const { spinner, iconOnly, children, size = "md" } = props;

  return (
    <>
      <div className="absolute flex items-center justify-center">
        <ButtonSpinner spinner={spinner} iconOnly={iconOnly} size={size} />
      </div>
      <div className="opacity-0">{children}</div>
    </>
  );
};
