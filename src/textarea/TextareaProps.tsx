import React from "react";

import { getComponentProps } from "../index";
import { RenderProp, runIfFn, withIconA11y } from "../utils";

import { TextareaBaseProps } from "./TextareaBase";
import { TextareaGhostProps } from "./TextareaGhost";
import { TextareaIconProps } from "./TextareaIcon";
import { TextareaSpinnerProps } from "./TextareaSpinner";
import {
  TextareaUIState,
  TextareaUIStateProps,
  useTextareaUIState,
} from "./TextareaUIState";
import { TextareaWrapperProps } from "./TextareaWrapper";

const componentMap = {
  TextareaWrapper: "wrapperProps",
  TextareaBase: "baseProps",
  TextareaSpinner: "spinnerProps",
  TextareaIcon: "iconProps",
  TextareaGhost: "ghostProps",
};

export const useTextareaProps = ({
  size,
  variant,
  autoSize,
  resize,
  rowsMax,
  rowsMin,
  invalid,
  loading,
  icon,
  spinner,
  placeholder,
  value,
  className,
  style,
  children,
  disabled,
  ...restProps
}: TextareaProps): TextareaPropsReturn => {
  const uiState = useTextareaUIState({
    size,
    variant,
    autoSize,
    resize,
    rowsMax,
    rowsMin,
    invalid,
    loading,
    icon,
    spinner,
    placeholder,
    value,
  });
  let uiProps = uiState;
  const { componentProps } = getComponentProps(componentMap, children, uiProps);

  const _icon: TextareaProps["icon"] =
    componentProps?.iconProps?.children || uiProps.icon;
  const _spinner: TextareaProps["spinner"] =
    componentProps?.spinnerProps?.children || uiProps.spinner;

  uiProps = { ...uiProps, spinner: _spinner, icon: _icon };

  const wrapperProps: TextareaWrapperProps = React.useMemo(
    () => ({
      ...uiProps,
      className,
      style,
      ...componentProps.wrapperProps,
    }),
    [className, componentProps.wrapperProps, style, uiProps],
  );

  const baseProps: TextareaBaseProps = React.useMemo(
    () => ({
      ...uiProps,
      placeholder,
      value,
      disabled,
      ...restProps,
      ...componentProps.baseProps,
    }),
    [
      componentProps.baseProps,
      disabled,
      placeholder,
      restProps,
      uiProps,
      value,
    ],
  );

  const spinnerProps: TextareaSpinnerProps = React.useMemo(
    () => ({
      ...uiProps,
      disabled,
      ...componentProps.spinnerProps,
      children: runIfFn(uiProps.spinner, uiProps),
    }),
    [componentProps.spinnerProps, disabled, uiProps],
  );

  const iconProps: TextareaIconProps = React.useMemo(
    () => ({
      ...uiProps,
      disabled,
      ...componentProps.iconProps,
      children: withIconA11y(uiProps.icon, uiProps),
    }),
    [componentProps.iconProps, disabled, uiProps],
  );

  const ghostProps: TextareaGhostProps = React.useMemo(
    () => ({
      ...uiProps,
      disabled,
      ...restProps,
      ...componentProps.ghostProps,
    }),
    [componentProps.ghostProps, disabled, restProps, uiProps],
  );

  return {
    uiProps,
    wrapperProps,
    baseProps,
    spinnerProps,
    iconProps,
    ghostProps,
  };
};

export type TextareaUIProps = TextareaUIState;

export type TextareaProps = Omit<TextareaBaseProps, "children"> &
  TextareaUIStateProps & {
    children?: RenderProp<TextareaUIProps>;
  };

export type TextareaPropsReturn = {
  wrapperProps: TextareaWrapperProps;
  baseProps: TextareaBaseProps;
  spinnerProps: TextareaSpinnerProps;
  iconProps: TextareaIconProps;
  ghostProps: TextareaGhostProps;
  uiProps: TextareaUIProps;
};
