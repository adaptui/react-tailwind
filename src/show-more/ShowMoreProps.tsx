import { useMemo } from "react";
import {
  DisclosureState,
  DisclosureStateProps,
  useDisclosureState,
} from "ariakit";

import { Children, getComponentProps, RenderProp, runIfFn } from "../utils";

import { ShowMoreButtonProps } from "./ShowMoreButton";
import { ShowMoreContentProps } from "./ShowMoreContent";
import { ShowMoreUIState, useShowMoreUIState } from "./ShowMoreUIState";

const componentMap = {
  ShowMoreContent: "contentProps",
  ShowMoreButton: "buttonProps",
};

export const useShowMoreProps = ({
  visible,
  defaultVisible,
  setVisible,
  animated,
  button,
  children,
  ...props
}: ShowMoreProps): ShowMorePropsReturn => {
  const state = useDisclosureState({
    visible,
    defaultVisible,
    setVisible,
    animated,
  });
  const uiState = useShowMoreUIState({ state, button });
  let uiProps: ShowMoreUIProps = useMemo(
    () => ({ state, ...uiState }),
    [state, uiState],
  );
  const { componentProps, finalChildren } = getComponentProps(
    componentMap,
    children,
    uiProps,
  );

  const _content: RenderProp<ShowMoreUIProps> =
    componentProps?.contentProps?.children || finalChildren;
  const _button: ShowMoreProps["button"] =
    componentProps?.buttonProps?.children || uiProps.button;

  uiProps = { ...uiProps, button: _button };

  const contentProps: ShowMoreContentProps = {
    ...uiProps,
    ...props,
    ...componentProps.contentProps,
    children: runIfFn(_content, state),
  };

  const buttonProps: ShowMoreButtonProps = {
    ...uiProps,
    ...componentProps.buttonProps,
    children: runIfFn(_button, state),
  };

  return {
    uiProps,
    contentProps,
    buttonProps,
    finalChildren,
  };
};

export type ShowMoreUIProps = ShowMoreUIState & {
  state: DisclosureState;
};

export type ShowMoreProps = DisclosureStateProps &
  Omit<ShowMoreContentProps, "children" | "state"> &
  Pick<ShowMoreUIState, "button"> & { children?: Children<ShowMoreUIProps> };

export type ShowMorePropsReturn = {
  contentProps: ShowMoreContentProps;
  buttonProps: ShowMoreButtonProps;
  finalChildren: Children<ShowMoreUIProps>[];
  uiProps: ShowMoreUIProps;
};
