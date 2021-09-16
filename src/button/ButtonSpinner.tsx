import * as React from "react";
import { twMerge as cx } from "tailwind-merge";

import { useTheme } from "../theme";
import { Spinner } from "../spinner";
import { ButtonChildrenProps } from "./ButtonChildren";

export interface ButtonSpinnerProps
  extends Pick<ButtonChildrenProps, "spinner" | "size" | "iconOnly"> {}

export const ButtonSpinner: React.FC<ButtonSpinnerProps> = props => {
  const { spinner, iconOnly, size } = props;
  const button = useTheme("button");

  if (spinner) return <>{spinner}</>;

  const spinnerStyles = cx(
    !iconOnly
      ? button.spinner.default.size[size]
      : button.spinner.iconOnly.size[size],
  );

  return <Spinner className={spinnerStyles} size="em" />;
};

export const ButtonSpinnerWrapper: React.FC = props => (
  <div className="absolute flex items-center justify-center" {...props} />
);
