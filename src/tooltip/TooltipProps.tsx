import { TooltipState, TooltipStateProps, useTooltipState } from "ariakit";

import {
  getComponentProps,
  runIfFn,
  TooltipUIState,
  TooltipUIStateProps,
  useTooltipUIState,
} from "../index";
import { RenderProp, withIconA11y } from "../utils";

import { TooltipAnchorProps } from "./TooltipAnchor";
import { TooltipArrowProps } from "./TooltipArrow";
import { TooltipWrapperProps } from "./TooltipWrapper";

const componentMap = {
  TooltipAnchor: "anchorProps",
  TooltipWrapper: "wrapperProps",
  TooltipContent: "contentProps",
  TooltipArrow: "arrowProps",
  TooltipArrowContent: "arrowContentProps",
};

export const useTooltipProps = ({
  content,
  arrowIcon,
  prefix,
  suffix,
  withArrow,
  visible,
  defaultVisible,
  setVisible,
  animated,
  placement,
  gutter,
  timeout,
  getAnchorRect,
  fixed,
  shift,
  flip,
  slide,
  overlap,
  sameWidth,
  fitViewport,
  arrowPadding,
  overflowPadding,
  renderCallback,
  children,
  ...restProps
}: TooltipProps): TooltipPropsReturn => {
  const state = useTooltipState({
    visible,
    defaultVisible,
    setVisible,
    animated,
    placement,
    gutter,
    timeout,
    getAnchorRect,
    fixed,
    shift,
    flip,
    slide,
    overlap,
    sameWidth,
    fitViewport,
    arrowPadding,
    overflowPadding,
    renderCallback,
  });
  const uiState = useTooltipUIState({
    content,
    arrowIcon,
    prefix,
    suffix,
    withArrow,
  });
  let uiProps: TooltipUIProps = { ...uiState, state };

  const { componentProps } = getComponentProps(componentMap, children, uiProps);

  const _arrowIcon: TooltipProps["arrowIcon"] =
    componentProps?.arrowIconProps?.children || uiProps.arrowIcon;

  uiProps = { ...uiProps, arrowIcon: _arrowIcon };

  const anchorProps: TooltipAnchorProps = {
    ...uiProps,
    ...componentProps.anchorProps,
  };

  const wrapperProps: TooltipWrapperProps = {
    ...uiProps,
    ...restProps,
    ...componentProps.wrapperProps,
  };

  const arrowProps: TooltipArrowProps = {
    ...uiProps,
    ...componentProps.arrowProps,
    children: withIconA11y(runIfFn(uiProps.arrowIcon, uiProps)),
  };

  return {
    uiProps,
    anchorProps,
    wrapperProps,
    arrowProps,
  };
};

export type TooltipUIProps = TooltipUIState & {
  state: TooltipState;
};

export type TooltipProps = TooltipStateProps &
  TooltipUIStateProps &
  TooltipWrapperProps & {
    children?: RenderProp<TooltipUIProps>;
  };

export type TooltipPropsReturn = {
  anchorProps: TooltipAnchorProps;
  wrapperProps: TooltipWrapperProps;
  arrowProps: TooltipArrowProps;
  uiProps: TooltipUIProps;
};
