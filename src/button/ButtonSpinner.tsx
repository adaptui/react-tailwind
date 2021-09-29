import * as React from "react";
import { cx } from "@renderlesskit/react";

import { Spinner } from "../spinner";
import { useTheme } from "../theme";
import { passProps } from "../utils";

import { ButtonProps } from "./Button";

export type ButtonSpinnerProps = Partial<
  Pick<ButtonProps, "spinner" | "size" | "iconOnly" | "prefix" | "suffix">
> & {};

export const ButtonSpinner: React.FC<ButtonSpinnerProps> = props => {
  const {
    size = "md",
    spinner = <Spinner size="em" />,
    prefix,
    suffix,
  } = props;

  const button = useTheme("button");
  const spinnerStyles = cx(
    prefix
      ? button.size.prefix[size]
      : suffix
      ? button.size.suffix[size]
      : button.size.iconOnly.text[size],
  );

  return <>{passProps(spinner, { className: spinnerStyles })}</>;
};

export const ButtonFullWidthSpinner: React.FC<ButtonSpinnerProps> = props => {
  const {
    size = "md",
    spinner = <Spinner size="em" />,
    iconOnly,
    children,
  } = props;

  // This is only the grey area in button for now which user cannot customize
  return (
    <>
      <div className="absolute flex items-center justify-center">
        <ButtonSpinner spinner={spinner} iconOnly={iconOnly} size={size} />
      </div>
      <div className="opacity-0">{children}</div>
    </>
  );
};
