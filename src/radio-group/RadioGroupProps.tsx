import React from "react";
import { RadioState, RadioStateProps, useRadioState } from "ariakit";

import { RadioUIProps } from "../radio/RadioProps";
import { getComponentProps, RenderProp } from "../utils";

import { getIndexOfActiveItem } from "./__utils";
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
  });
  const uiState = useRadioGroupUIState({
    size,
    themeColor,
    stack,
    maxVisibleItems,
  });
  const uiProps: RadioGroupUIProps = React.useMemo(
    () => ({
      state,
      ...uiState,
    }),
    [state, uiState],
  );
  const { componentProps, finalChildren } = getComponentProps(
    componentMap,
    children,
    uiProps,
  );

  const wrapperProps: RadioGroupWrapperProps = React.useMemo(
    () => ({
      ...uiProps,
      ...restProps,
      ...componentProps?.wrapperProps,
    }),
    [componentProps?.wrapperProps, restProps, uiProps],
  );

  const [itemsInternal, setItemsInternal] = React.useState(finalChildren);

  const visibleChildren =
    uiProps.maxVisibleItems == null
      ? itemsInternal
      : itemsInternal.slice(0, uiProps.maxVisibleItems);

  const moreChildren =
    uiProps.maxVisibleItems == null ||
    itemsInternal.length <= uiProps.maxVisibleItems
      ? null
      : itemsInternal.slice(uiProps.maxVisibleItems);

  const onCollapseStart = React.useCallback(() => {
    componentProps?.showMoreProps?.onCollapseStart?.();

    const indexOfActiveItem = getIndexOfActiveItem(state.items, state.activeId);
    if (maxVisibleItems != null && indexOfActiveItem >= maxVisibleItems) {
      // Swap the radios to the end of the VisibleChildren
      const activeChildren = itemsInternal[indexOfActiveItem];
      itemsInternal[indexOfActiveItem] = itemsInternal[maxVisibleItems - 1];
      itemsInternal[maxVisibleItems - 1] = activeChildren;

      setItemsInternal(itemsInternal);
    }
  }, [
    componentProps?.showMoreProps,
    itemsInternal,
    maxVisibleItems,
    state.activeId,
    state.items,
  ]);

  const showMoreProps: RadioShowMoreProps = React.useMemo(
    () => ({
      ...uiProps,
      direction: uiProps.stack,
      ...componentProps?.showMoreProps,
      onCollapseStart: onCollapseStart,
      children: moreChildren,
    }),
    [componentProps?.showMoreProps, moreChildren, onCollapseStart, uiProps],
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
    children?: RenderProp<RadioUIProps>;
  };

export type RadioGroupUIProps = RadioGroupUIState & {
  state: RadioState;
};

export type RadioGroupPropsReturn = {
  uiProps: RadioGroupUIProps;
  visibleChildren: React.ReactNode;
  moreChildren: React.ReactNode;
  wrapperProps: RadioGroupWrapperProps;
  showMoreProps: RadioShowMoreProps;
};
