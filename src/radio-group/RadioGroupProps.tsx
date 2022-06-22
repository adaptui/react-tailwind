import React from "react";
import { RadioState, RadioStateProps, useRadioState } from "ariakit";

import { RadioUIProps } from "../radio/RadioProps";
import { getComponentProps, RenderProp } from "../utils";

import {
  RadioGroupUIState,
  RadioGroupUIStateProps,
  useRadioGroupUIState,
} from "./RadioGroupUIState";
import { RadioGroupWrapperProps } from "./RadioGroupWrapper";
import { RadioShowMoreProps } from "./RadioShowMore";

const componentMap = {
  RadioGroupWrapper: "wrapperProps",
  RadioShowMore: "showMoreProps",
};

export const useRadioGroupProps = ({
  withState = true,
  value,
  defaultValue,
  setValue,
  virtualFocus,
  orientation,
  rtl,
  focusLoop,
  focusWrap,
  focusShift,
  moves,
  setMoves,
  includesBaseElement,
  activeId,
  defaultActiveId,
  setActiveId,
  items,
  setItems,
  size,
  themeColor,
  stack,
  maxVisibleItems,
  children,
  ...restProps
}: RadioGroupProps): RadioGroupPropsReturn => {
  const state = useRadioState({
    defaultValue,
    value,
    setValue,
  });
  const uiState = useRadioGroupUIState({
    size,
    themeColor,
    stack,
    maxVisibleItems,
  });
  const uiProps: RadioGroupUIProps = React.useMemo(
    () => ({
      state: withState ? state : undefined,
      ...uiState,
    }),
    [state, uiState, withState],
  );
  const { componentProps, finalChildren } = getComponentProps(
    componentMap,
    children,
    uiProps,
  );

  const visibleChildren: React.ReactNode =
    uiProps.maxVisibleItems == null
      ? (finalChildren as React.ReactNode)
      : (finalChildren.slice(0, uiProps.maxVisibleItems) as React.ReactNode);

  const moreChildren: React.ReactNode =
    uiProps.maxVisibleItems == null ||
    finalChildren.length <= uiProps.maxVisibleItems
      ? null
      : (finalChildren.slice(uiProps.maxVisibleItems) as React.ReactNode);

  const wrapperProps: RadioGroupWrapperProps = React.useMemo(
    () => ({
      ...uiProps,
      ...restProps,
      ...componentProps?.wrapperProps,
    }),
    [componentProps?.wrapperProps, restProps, uiProps],
  );

  const showMoreProps: RadioShowMoreProps = React.useMemo(
    () => ({
      ...uiProps,
      direction: uiProps.stack,
      ...componentProps?.showMoreProps,
      children: moreChildren,
    }),
    [componentProps?.showMoreProps, moreChildren, uiProps],
  );
  return {
    uiProps,
    visibleChildren,
    moreChildren,
    wrapperProps,
    showMoreProps,
  };
};

export type RadioGroupProps = RadioStateProps &
  Omit<RadioGroupWrapperProps, "state" | "size" | "children" | "defaultValue"> &
  RadioGroupUIStateProps & {
    withState?: boolean;
    children?: RenderProp<RadioUIProps>;
  };

export type RadioGroupUIProps = RadioGroupUIState & {
  state?: RadioState;
};

export type RadioGroupPropsReturn = {
  uiProps: RadioGroupUIProps;
  visibleChildren: React.ReactNode;
  moreChildren: React.ReactNode;
  wrapperProps: RadioGroupWrapperProps;
  showMoreProps: RadioShowMoreProps;
};
