import * as React from "react";

import { getComponentProps, runIfFn } from "../index";
import { splitProps, withIconA11y } from "../utils";

import { USE_TOOLTIP_STATE_KEYS } from "./__keys";
import { TooltipOwnProps, TooltipProps } from "./Tooltip";
import { TooltipArrowProps } from "./TooltipArrow";
import { TooltipArrowContentProps } from "./TooltipArrowContent";
import { TooltipContentProps } from "./TooltipContent";
import { TooltipReferenceProps } from "./TooltipReference";
import { TooltipInitialState, useTooltipState } from "./TooltipState";
import { TooltipWrapperProps } from "./TooltipWrapper";

export const useTooltipStateSplit = (props: TooltipProps) => {
  const [stateProps, switchProps] = splitProps(
    props,
    USE_TOOLTIP_STATE_KEYS,
  ) as [TooltipInitialState, TooltipOwnProps];
  const state = useTooltipState(stateProps);

  return [state, switchProps, stateProps] as const;
};

const componentMap = {
  TooltipReference: "referenceProps",
  TooltipWrapper: "wrapperProps",
  TooltipContent: "contentProps",
  TooltipArrow: "arrowProps",
  TooltipArrowContent: "arrowContentProps",
};

export const useTooltipProps = (
  props: React.PropsWithChildren<TooltipProps>,
) => {
  const [state, switchProps] = useTooltipStateSplit(props);
  const { trigger, arrowIcon, prefix, suffix } = state;
  const { children, ...restProps } = switchProps;
  const { componentProps, finalChildren } = getComponentProps(
    componentMap,
    children,
    state,
  );

  const referenceChildren: React.ReactNode = (referenceProps: any) =>
    // @ts-ignore
    React.cloneElement(runIfFn(trigger, state), referenceProps);

  const _arrowIcon: TooltipProps["arrowIcon"] =
    componentProps?.arrowIconProps?.children || arrowIcon;

  const referenceProps: TooltipReferenceProps = {
    ...state,
    ...componentProps.referenceProps,
    children: referenceChildren,
  };

  const wrapperProps: TooltipWrapperProps = {
    ...state,
    ...componentProps.wrapperProps,
  };

  const contentProps: TooltipContentProps = {
    ...state,
    transitionPresent: true,
    ...restProps,
    ...componentProps.contentProps,
  };

  const arrowProps: TooltipArrowProps = {
    ...state,
    ...componentProps.arrowProps,
  };

  const arrowContentProps: TooltipArrowContentProps = {
    ...state,
    ...componentProps.arrowContentProps,
    children: withIconA11y(runIfFn(_arrowIcon, state)),
  };

  return {
    state,
    arrowIcon,
    trigger,
    prefix,
    suffix,
    finalChildren,
    referenceProps,
    wrapperProps,
    contentProps,
    arrowProps,
    arrowContentProps,
  };
};
