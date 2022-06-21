import { CheckboxState, CheckboxStateProps, useCheckboxState } from "ariakit";

import { CheckboxUIProps, Value } from "../checkbox";
import { getComponentProps, RenderProp } from "../utils";

import {
  CheckboxGroupUIState,
  CheckboxGroupUIStateProps,
  useCheckboxGroupUIState,
} from "./CheckboxGroupUIState";
import { CheckboxGroupWrapperProps } from "./CheckboxGroupWrapper";
import { CheckboxShowMoreProps } from "./CheckboxShowMore";

const componentMap = {
  CheckboxGroupWrapper: "wrapperProps",
  CheckboxShowMore: "showMoreProps",
};

export const useCheckboxGroupProps = ({
  withState = true,
  defaultValue = false,
  value,
  setValue,
  size,
  themeColor,
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
  const uiState = useCheckboxGroupUIState({
    size,
    themeColor,
    stack,
    maxVisibleItems,
  });
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

  const showMoreProps: CheckboxShowMoreProps = {
    ...uiProps,
    direction: uiProps.stack,
    ...componentProps?.showMoreProps,
    children: moreChildren,
  };

  return {
    uiProps,
    visibleChildren,
    moreChildren,
    wrapperProps,
    showMoreProps,
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
  uiProps: CheckboxGroupUIProps;
  visibleChildren: React.ReactNode;
  moreChildren: React.ReactNode;
  showMoreProps: CheckboxShowMoreProps;
};
