import { RadioState, RadioStateProps, useRadioState } from "ariakit";

import { RadioUIProps } from "../radio/RadioProps";
import { ShowMoreButtonProps, ShowMoreContentProps } from "../show-more";
import { getComponentProps, RenderProp } from "../utils";

import {
  RadioGroupUIState,
  RadioGroupUIStateProps,
  useRadioGroupUIState,
} from "./RadioGroupUIState";
import { RadioGroupWrapperProps } from "./RadioGroupWrapper";

const componentMap = {
  RadioGroupWrapper: "wrapperProps",
  ShowMoreContent: "contentProps",
  ShowMoreButton: "buttonProps",
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
  const uiState = useRadioGroupUIState({ size, stack, maxVisibleItems });
  const uiProps: RadioGroupUIProps = {
    state: withState ? state : undefined,
    ...uiState,
  };
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

  const wrapperProps: RadioGroupWrapperProps = {
    ...uiProps,
    ...restProps,
    ...componentProps?.wrapperProps,
  };

  const buttonProps: ShowMoreButtonProps = {
    ...componentProps?.buttonProps,
  };

  const contentProps: ShowMoreContentProps = {
    ...componentProps?.contentProps,
  };

  return {
    uiProps,
    visibleChildren,
    moreChildren,
    wrapperProps,
    buttonProps,
    contentProps,
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
  wrapperProps: RadioGroupWrapperProps;
  contentProps: ShowMoreContentProps;
  buttonProps: ShowMoreButtonProps;
  uiProps: RadioGroupUIProps;
  visibleChildren: React.ReactNode;
  moreChildren: React.ReactNode;
};
