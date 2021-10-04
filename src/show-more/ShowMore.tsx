import { createComponent } from "reakit-system";
import { splitProps } from "reakit-utils";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { ButtonHTMLProps, ButtonOptions, useButton } from "../button";
import { getComponentProps, runIfFn } from "../utils";
import { RenderProp, RenderPropType } from "../utils/types";

import { USE_SHOW_MORE_STATE_KEYS } from "./__keys";
import { Hook } from "./createComposableHook";
import { showMoreComposableButton } from "./ShowMoreButton";
import { showMoreComposableContent } from "./ShowMoreContent";
import {
  ShowMoreInitialState,
  ShowMoreStateReturn,
  useShowMoreState,
} from "./ShowMoreState";

export type ShowMoreOwnProps = RenderProp<ShowMoreStateReturn> & {
  /**
   * User defined Button element.
   *
   * @default "Show more"
   */
  button?: RenderPropType<ShowMoreStateReturn>;
};

export type ShowMoreProps = ShowMoreInitialState & ShowMoreOwnProps;

export const ShowMore: React.FC<ShowMoreProps> = props => {
  const { buttonProps, contentProps } = useShowMoreProps(props);

  return (
    <>
      <ShowMoreContent {...contentProps} />
      <ShowMoreButton {...buttonProps} />
    </>
  );
};

ShowMore.displayName = "ShowMore";

export type ShowMoreButtonOptions = ButtonOptions &
  Pick<ShowMoreStateReturn, "baseId" | "toggle">;

export type ShowMoreButtonHTMLProps = ButtonHTMLProps;

export type ShowMoreButtonProps = ShowMoreButtonOptions &
  ShowMoreButtonHTMLProps;

export const useShowMoreButton = showMoreComposableButton(useButton) as Hook<
  ShowMoreButtonOptions,
  ShowMoreButtonHTMLProps
>;

export const ShowMoreButton = createComponent({
  as: "button",
  memo: true,
  useHook: useShowMoreButton,
});
ShowMoreButton.displayName = "ShowMoreButton";

export type ShowMoreContentOptions = BoxOptions &
  Pick<
    ShowMoreStateReturn,
    | "baseId"
    | "visible"
    | "contentSize"
    | "duration"
    | "direction"
    | "easing"
    | "onCollapseEnd"
    | "onCollapseStart"
    | "onExpandEnd"
    | "onExpandStart"
  >;

export type ShowMoreContentHTMLProps = BoxHTMLProps;

export type ShowMoreContentProps = ShowMoreContentOptions &
  ShowMoreContentHTMLProps;

export const useShowMoreContent = showMoreComposableContent(useBox) as Hook<
  ShowMoreContentOptions,
  ShowMoreContentHTMLProps
>;

export const ShowMoreContent = createComponent({
  as: "div",
  memo: true,
  useHook: useShowMoreContent,
});
ShowMoreContent.displayName = "ShowMoreContent";

const componentMap = {
  ShowMoreContent: "contentProps",
  ShowMoreButton: "buttonProps",
};

export const useShowMoreSplit = (props: ShowMoreProps) => {
  const [stateProps, showMorerops] = splitProps(
    props,
    USE_SHOW_MORE_STATE_KEYS,
  ) as [ShowMoreInitialState, ShowMoreOwnProps];
  const state = useShowMoreState(stateProps);

  return [state, showMorerops, stateProps] as const;
};

export const useShowMoreProps = (
  props: React.PropsWithChildren<ShowMoreProps>,
) => {
  const [state, showMoreProps] = useShowMoreSplit(props);
  const { children, button = "Show more", ...restProps } = showMoreProps;
  const { componentProps, finalChildren } = getComponentProps(
    componentMap,
    children,
    state,
  );

  const _content: ShowMoreOwnProps["children"] =
    componentProps?.contentProps?.children || finalChildren;
  const contentProps: ShowMoreContentProps = {
    ...state,
    ...restProps,
    ...componentProps.contentProps,
    children: runIfFn(_content, state),
  };

  const _button: ShowMoreProps["button"] =
    componentProps?.buttonProps?.children || button;
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
