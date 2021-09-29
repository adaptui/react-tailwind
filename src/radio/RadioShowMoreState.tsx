import * as React from "react";
import useCollapse from "react-collapsed";
import {
  UseCollapseInput,
  UseCollapseOutput,
} from "react-collapsed/dist/types";
import { splitProps } from "reakit-utils";

import { getValidChildren, runIfFn, runIfFnChildren } from "../utils";
import { Dict } from "../utils/types";

import { USE_RADIO_SHOW_MORE_STATE_KEYS, useRadioStateContext } from "./index";
import { RadioShowMoreOwnProps, RadioShowMoreProps } from "./RadioShowMore";
import { RadioShowMoreButtonProps } from "./RadioShowMoreButton";
import { RadioShowMoreContentProps } from "./RadioShowMoreContent";

export type RadioShowMoreState = {
  /**
   * `true`, if the contents are visible.
   *
   * @default false
   */
  isExpanded: boolean;

  /**
   * `true`, if the contents start to show.
   * `false`, if the contents start to hide.
   *
   * @default: false
   */
  isVisibleAnimateStart: boolean;
};

export type RadioShowMoreActions = {
  /**
   * SetState for isExpanded.
   */
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;

  /**
   * SetState for isVisibleAnimateStart.
   */
  setIsVisibleAnimateStart: React.Dispatch<React.SetStateAction<boolean>>;

  /**
   * Get all the button props.
   */
  getToggleProps: UseCollapseOutput["getToggleProps"];

  /**
   * Get all the collapse props.
   */
  getCollapseProps: UseCollapseOutput["getCollapseProps"];
};

export type RadioShowMoreStateReturn = RadioShowMoreState &
  RadioShowMoreActions;

export type RadioShowMoreInitialState = UseCollapseInput & {};

export const useRadioShowMoreState = (
  props: RadioShowMoreInitialState = {},
): RadioShowMoreStateReturn => {
  const { isExpanded: initialIsExpanded = false } = props;
  const [isExpanded, setExpanded] = React.useState(initialIsExpanded);
  const [isVisibleAnimateStart, setIsVisibleAnimateStart] =
    React.useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
    onExpandStart: () => setIsVisibleAnimateStart(true),
    onCollapseStart: () => setIsVisibleAnimateStart(false),
    ...props,
  });

  return {
    isExpanded,
    setExpanded,
    isVisibleAnimateStart,
    setIsVisibleAnimateStart,
    getCollapseProps,
    getToggleProps,
  };
};

export const useRadioShowMoreSplit = (props: RadioShowMoreProps) => {
  const [stateProps, showMorerops] = splitProps(
    props,
    USE_RADIO_SHOW_MORE_STATE_KEYS,
  ) as [RadioShowMoreInitialState, RadioShowMoreOwnProps];
  const state = useRadioShowMoreState(stateProps);

  return [state, showMorerops, stateProps] as const;
};

const ComponentPropsMap = {
  RadioShowMoreContent: "contentProps",
  RadioShowMoreButton: "buttonProps",
};

export const getRadioComponentProps = <T, P>(children: T, props: P) => {
  const normalizedChildren = runIfFnChildren(children, props);
  const validChildren = getValidChildren(normalizedChildren);
  const componentProps: Dict = {};
  const finalChildren: React.ReactNode[] = [];

  validChildren.forEach(child => {
    // @ts-ignore
    if (ComponentPropsMap[child.type.displayName]) {
      componentProps[
        // @ts-ignore
        ComponentPropsMap[child.type.displayName]
      ] = child.props;
    } else {
      finalChildren.push(child);
    }
  });

  return { componentProps, finalChildren };
};

export const useRadioShowMoreProps = (
  props: React.PropsWithChildren<RadioShowMoreProps>,
) => {
  const [state, radioShowMoreProps] = useRadioShowMoreSplit(props);
  const contextState = useRadioStateContext();
  const {
    children,
    button = "Show more",
    size = "md",
    ...restProps
  } = radioShowMoreProps;
  const { componentProps, finalChildren } = getRadioComponentProps(
    children,
    props,
  );

  const _content: RadioShowMoreProps["children"] =
    componentProps?.contentProps?.children || finalChildren;
  const contentProps: RadioShowMoreContentProps = {
    ...state,
    ...restProps,
    ...componentProps.contentProps,
    children: runIfFn(_content, state),
  };

  const _button: RadioShowMoreOwnProps["button"] =
    componentProps?.buttonProps?.children || button;
  const buttonProps: RadioShowMoreButtonProps = {
    ...state,
    ...componentProps.buttonProps,
    children: runIfFn(_button, state),
  };

  return {
    state,
    size: contextState.size || size,
    contentProps,
    buttonProps,
  };
};
