import * as React from "react";

import { Box } from "../box";
import { Spinner } from "../spinner";
import { useTheme } from "../theme";
import { cx, passPropsNew } from "../utils";

import { ButtonProps } from "./Button";

export type ButtonSpinnerProps = Partial<
  Pick<ButtonProps, "spinner" | "size" | "prefix" | "suffix" | "children">
>;

export const ButtonSpinner: React.FC<ButtonSpinnerProps> = props => {
  const {
    size = "md",
    spinner = <Spinner size="em" themeColor="current" />,
    prefix,
    suffix,
  } = props;

  const button = useTheme("button");
  const spinnerStyles = cx(
    prefix
      ? button.size[size].prefix
      : suffix
      ? button.size[size].suffix
      : button.size[size].iconOnly.spinner,
  );

  return <>{passPropsNew(spinner, { className: spinnerStyles })}</>;
};

export const ButtonFullWidthSpinner: React.FC<ButtonSpinnerProps> = props => {
  const {
    size = "md",
    spinner = <Spinner size="em" themeColor="current" />,
    children,
  } = props;

  // This is only the grey area in button for now which user cannot customize
  return (
    <>
      <div className="absolute flex items-center justify-center">
        <ButtonSpinner spinner={spinner} size={size} />
      </div>
      <Box className="opacity-0">{children}</Box>
    </>
  );
};
