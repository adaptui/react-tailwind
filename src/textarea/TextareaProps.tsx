import { getComponentProps } from "../index";
import { RenderProp, runIfFn, withIconA11y } from "../utils";

import { TextareaBaseProps } from "./TextareaBase";
import { TextareaGhostProps } from "./TextareaGhost";
import { TextareaIconProps } from "./TextareaIcon";
import {
  TextareaUIState,
  TextareaUIStateProps,
  useTextareaUIState,
} from "./TextareaUIState";
import { TextareaWrapperProps } from "./TextareaWrapper";

const componentMap = {
  TextareaWrapper: "wrapperProps",
  TextareaBase: "baseProps",
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
    componentProps?.iconProps?.children || icon;

  uiProps = { ...uiProps, icon: _icon };

  const wrapperProps: TextareaWrapperProps = {
    ...uiProps,
    className,
    style,
    ...componentProps.wrapperProps,
  };

  const baseProps: TextareaBaseProps = {
    ...uiProps,
    placeholder,
    value,
    disabled,
    ...restProps,
    ...componentProps.baseProps,
  };

  const ghostProps: TextareaGhostProps = {
    ...uiProps,
    disabled,
    ...restProps,
    ...componentProps.ghostProps,
  };

  const iconProps: TextareaIconProps = {
    ...uiProps,
    disabled,
    ...componentProps.iconProps,
    children: withIconA11y(runIfFn(uiProps.icon, uiProps)),
  };

  return {
    uiProps,
    wrapperProps,
    baseProps,
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
  ghostProps: TextareaGhostProps;
  iconProps: TextareaIconProps;
  uiProps: TextareaUIProps;
};
