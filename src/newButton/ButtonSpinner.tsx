import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Spinner } from "../spinner";
import { ButtonChildrenProps } from "./ButtonChildren";

export interface ButtonSpinnerProps
  extends Pick<ButtonChildrenProps, "spinner" | "size" | "iconOnly"> {}

export const ButtonSpinner: React.FC<ButtonSpinnerProps> = props => {
  const { spinner, iconOnly, size } = props;
  const theme = useTheme();

  if (spinner) return <>{spinner}</>;

  const spinnerStyles = cx(
    !iconOnly
      ? theme.newButton.spinner.size[size]
      : theme.newButton.spinner.iconOnly.size[size],
  );

  return <Spinner className={spinnerStyles} size="em" />;
};

export const ButtonSpinnerWrapper: React.FC = props => (
  <div className="absolute flex items-center justify-center" {...props} />
);
