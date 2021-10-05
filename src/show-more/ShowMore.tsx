import { createComponent } from "reakit-system";
import { splitProps } from "reakit-utils";
import {
  disclosureComposableButton,
  disclosureComposableContent,
  DisclosureInitialState,
  DisclosureStateReturn,
  Hook,
  USE_DISCLOSURE_STATE_KEYS,
  useDisclosureState,
} from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { ButtonHTMLProps, ButtonOptions, useButton } from "../button";
import { getComponentProps, runIfFn } from "../utils";
import { RenderProp, RenderPropType } from "../utils/types";

export type ShowMoreOwnProps = RenderProp<DisclosureStateReturn> & {
  /**
   * User defined Button element.
   *
   * @default "Show more"
   */
  button?: RenderPropType<DisclosureStateReturn>;
};

export type ShowMoreProps = DisclosureInitialState &
  Partial<ShowMoreContentProps> &
  ShowMoreOwnProps;

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

export const useShowMoreSplit = (props: ShowMoreProps) => {
  const [stateProps, showMorerops] = splitProps(
    props,
    USE_DISCLOSURE_STATE_KEYS,
  ) as [DisclosureInitialState, ShowMoreOwnProps];
  const state = useDisclosureState(stateProps);

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

export type ShowMoreButtonOptions = ButtonOptions &
  Pick<DisclosureStateReturn, "baseId" | "toggle" | "expanded">;

export type ShowMoreButtonHTMLProps = ButtonHTMLProps;

export type ShowMoreButtonProps = ShowMoreButtonOptions &
  ShowMoreButtonHTMLProps;

export const useShowMoreButton = disclosureComposableButton(useButton) as Hook<
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
    DisclosureStateReturn,
    | "baseId"
    | "expanded"
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

export const useShowMoreContent = disclosureComposableContent(useBox) as Hook<
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
