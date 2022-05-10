import * as React from "react";

import { Spinner } from "../spinner";
import { useTheme } from "../theme";
import { cx, passProps } from "../utils";

import { ButtonProps } from "./Button";

export type ButtonSpinnerProps = Partial<
  Pick<ButtonProps, "spinner" | "size" | "prefix" | "suffix">
> & {
  children?: React.ReactNode;
};

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
      : button.size.iconOnly[size],
  );

  return <>{passProps(spinner, { className: spinnerStyles })}</>;
};

export const ButtonFullWidthSpinner: React.FC<ButtonSpinnerProps> = props => {
  const { size = "md", spinner = <Spinner size="em" />, children } = props;

  // This is only the grey area in button for now which user cannot customize
  return (
    <>
      <div className="absolute flex items-center justify-center">
        <ButtonSpinner spinner={spinner} size={size} />
      </div>
      <div className="opacity-0">{children}</div>
    </>
  );
};
