import React from "react";
import useCollapse from "react-collapsed";
import {
  UseCollapseInput,
  UseCollapseOutput,
} from "react-collapsed/dist/types";

export type ShowMoreState = {
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

export type ShowMoreActions = {
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

export type ShowMoreStateReturn = ShowMoreState & ShowMoreActions;

export type ShowMoreInitialState = UseCollapseInput & {};

export const useShowMoreState = (
  props: ShowMoreInitialState = {},
): ShowMoreStateReturn => {
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
