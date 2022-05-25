import { TooltipState, TooltipStateProps, useTooltipState } from "ariakit";

import {
  getComponentProps,
  TooltipUIState,
  TooltipUIStateProps,
  useTooltipUIState,
} from "../index";
import { RenderProp, runIfFn, withIconA11y } from "../utils";

import { TooltipAnchorProps } from "./TooltipAnchor";
import { TooltipArrowProps } from "./TooltipArrow";
import { TooltipPrefixProps } from "./TooltipPrefix";
import { TooltipSuffixProps } from "./TooltipSuffix";
import { TooltipWrapperProps } from "./TooltipWrapper";

const componentMap = {
  TooltipAnchor: "anchorProps",
  TooltipWrapper: "wrapperProps",
  TooltipPrefix: "prefixProps",
  TooltipSuffix: "suffixProps",
  TooltipArrow: "arrowProps",
};

export const useTooltipProps = ({
  content,
  prefix,
  suffix,
  withArrow,
  isDragging,
  visible,
  defaultVisible,
  setVisible,
  animated = true,
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
  as,
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
    prefix,
    suffix,
    withArrow,
    isDragging,
  });
  let uiProps: TooltipUIProps = { ...uiState, state };

  const { componentProps, finalChildren } = getComponentProps(
    componentMap,
    children,
    uiProps,
  );

  const _prefix: TooltipProps["prefix"] =
    componentProps?.prefixProps?.children || uiProps.prefix;
  const _suffix: TooltipProps["suffix"] =
    componentProps?.suffixProps?.children || uiProps.suffix;
  const _content: TooltipProps["content"] = runIfFn(uiProps.content, uiProps);

  uiProps = { ...uiProps, prefix: _prefix, suffix: _suffix, content: _content };

  const anchorProps: TooltipAnchorProps = {
    ...uiProps,
    as,
    children: finalChildren,
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
  };

  const prefixProps: TooltipArrowProps = {
    ...uiProps,
    ...componentProps.prefixProps,
    children: withIconA11y(runIfFn(uiProps.prefix, uiProps)),
  };

  const suffixProps: TooltipArrowProps = {
    ...uiProps,
    ...componentProps.suffixProps,
    children: withIconA11y(runIfFn(uiProps.suffix, uiProps)),
  };

  return {
    uiProps,
    anchorProps,
    wrapperProps,
    arrowProps,
    prefixProps,
    suffixProps,
  };
};

export type TooltipUIProps = TooltipUIState & {
  state: TooltipState;
};

export type TooltipProps = TooltipStateProps &
  TooltipUIStateProps &
  Omit<TooltipWrapperProps, "as" | "state" | "children"> &
  Pick<TooltipAnchorProps, "as"> & {
    children?: RenderProp<TooltipUIProps>;
  };

export type TooltipPropsReturn = {
  anchorProps: TooltipAnchorProps;
  wrapperProps: TooltipWrapperProps;
  arrowProps: TooltipArrowProps;
  prefixProps: TooltipPrefixProps;
  suffixProps: TooltipSuffixProps;
  uiProps: TooltipUIProps;
};
