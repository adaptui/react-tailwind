import { CheckboxState, CheckboxStateProps, useCheckboxState } from "ariakit";

import { CheckboxUIProps, Value } from "../checkbox";
import { ShowMoreButtonProps, ShowMoreContentProps } from "../show-more";
import { getComponentProps, RenderProp } from "../utils";

import {
  CheckboxGroupUIState,
  CheckboxGroupUIStateProps,
  useCheckboxGroupUIState,
} from "./CheckboxGroupUIState";
import { CheckboxGroupWrapperProps } from "./CheckboxGroupWrapper";

const componentMap = {
  CheckboxGroupWrapper: "wrapperProps",
  ShowMoreContent: "contentProps",
  ShowMoreButton: "buttonProps",
};

export const useCheckboxGroupProps = ({
  withState = true,
  defaultValue = false,
  value,
  setValue,
  size,
  stack,
  maxVisibleItems,
  children,
  ...restProps
}: CheckboxGroupProps): CheckboxGroupPropsReturn => {
  const state = useCheckboxState<Value>({
    defaultValue,
    value,
    setValue,
  });
  const uiState = useCheckboxGroupUIState({ size, stack, maxVisibleItems });
  const uiProps: CheckboxGroupUIProps = {
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

  const wrapperProps: CheckboxGroupWrapperProps = {
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

export type CheckboxGroupProps = CheckboxStateProps &
  Omit<CheckboxGroupWrapperProps, "size" | "children" | "defaultValue"> &
  CheckboxGroupUIStateProps & {
    withState?: boolean;
    children?: RenderProp<CheckboxUIProps>;
  };

export type CheckboxGroupUIProps = CheckboxGroupUIState & {
  state?: CheckboxState;
};

export type CheckboxGroupPropsReturn = {
  wrapperProps: CheckboxGroupWrapperProps;
  contentProps: ShowMoreContentProps;
  buttonProps: ShowMoreButtonProps;
  uiProps: CheckboxGroupUIProps;
  visibleChildren: React.ReactNode;
  moreChildren: React.ReactNode;
};
