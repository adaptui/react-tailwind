import { getComponentProps, runIfFn, splitProps } from "../utils";

import { USE_SHOW_MORE_STATE_KEYS } from "./__keys";
import { ShowMoreOwnProps, ShowMoreProps } from "./ShowMore";
import { ShowMoreButtonProps } from "./ShowMoreButton";
import { ShowMoreContentProps } from "./ShowMoreContent";
import { ShowMoreInitialState, useShowMoreState } from "./ShowMoreState";

export const useShowMoreSplit = (props: ShowMoreProps) => {
  const [stateProps, showMorerops] = splitProps(
    props,
    USE_SHOW_MORE_STATE_KEYS,
  ) as [ShowMoreInitialState, ShowMoreOwnProps];
  const state = useShowMoreState(stateProps);

  return [state, showMorerops, stateProps] as const;
};

const componentMap = {
  ShowMoreContent: "contentProps",
  ShowMoreButton: "buttonProps",
};

export const useShowMoreProps = (
  props: React.PropsWithChildren<ShowMoreProps>,
) => {
  const [state, showMoreProps] = useShowMoreSplit(props);
  const { button } = state;
  const { children, ...restProps } = showMoreProps;
  const { componentProps, finalChildren } = getComponentProps(
    componentMap,
    children,
    state,
  );

  const _content: ShowMoreOwnProps["children"] =
    componentProps?.contentProps?.children || finalChildren;

  const _button: ShowMoreProps["button"] =
    componentProps?.buttonProps?.children || button;

  const contentProps: ShowMoreContentProps = {
    ...state,
    ...restProps,
    ...componentProps.contentProps,
    animationPresent: true,
    children: runIfFn(_content, state),
  };

  const buttonProps: ShowMoreButtonProps = {
    ...state,
    ...componentProps.buttonProps,
    children: runIfFn(_button, state),
  };

  return {
    state,
    contentProps,
    buttonProps,
    content: _content,
    button: _button,
  };
};
