import * as React from "react";

import { Box } from "../box";
import { useTheme } from "../theme";
import { cx, passPropsNew } from "../utils";

import { ButtonProps, ButtonState } from "./Button";

export type ButtonSpinnerProps = Required<
  Pick<ButtonProps, "size" | "spinner">
> &
  Pick<ButtonProps, "prefix" | "suffix"> & {
    state: ButtonState;
  };

export const ButtonSpinner: React.FC<ButtonSpinnerProps> = props => {
  const { size, spinner, prefix, suffix, state } = props;

  const button = useTheme("button");
  const spinnerStyles = cx(
    prefix
      ? button.size[size].prefix
      : suffix
      ? button.size[size].suffix
      : button.size[size].iconOnly.spinner,
  );

  return <>{passPropsNew(spinner, { className: spinnerStyles }, state)}</>;
};

export type ButtonFullWidthSpinnerProps = Pick<
  ButtonSpinnerProps,
  "size" | "spinner" | "state"
> &
  Pick<ButtonProps, "children">;

export const ButtonFullWidthSpinner: React.FC<
  ButtonFullWidthSpinnerProps
> = props => {
  const { size, spinner, children, state } = props;

  const button = useTheme("button");

  // This is only the grey area in button for now which user cannot customize
  return (
    <>
      <div className={button.loading.spinner}>
        <ButtonSpinner spinner={spinner} size={size} state={state} />
      </div>
      <Box className={button.loading.children}>{children}</Box>
    </>
  );
};
