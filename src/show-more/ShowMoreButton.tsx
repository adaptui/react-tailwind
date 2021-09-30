import React from "react";
import { createComponent } from "reakit-system";
import {
  ButtonHTMLProps,
  ButtonOptions,
  useButton as useReakitButton,
} from "reakit";
import { useLiveRef } from "reakit-utils";

import { SHOW_MORE_BUTTON_KEYS } from "./__keys";
import { createComposableHook } from "./createComposableHook";
import { ShowMoreStateReturn } from "./ShowMoreState";

export type ShowMoreButtonOptions = ButtonOptions &
  Pick<ShowMoreStateReturn, "setExpanded" | "getToggleProps">;

export type ShowMoreButtonHTMLProps = ButtonHTMLProps;

export type ShowMoreButtonProps = ShowMoreButtonOptions &
  ShowMoreButtonHTMLProps;

export const showMoreComposableButton = createComposableHook<
  ShowMoreButtonOptions,
  ShowMoreButtonHTMLProps
>({
  name: "ShowMoreButton",
  compose: useReakitButton,
  keys: SHOW_MORE_BUTTON_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    const { setExpanded, getToggleProps } = options;
    const { onClick: htmlOnClick, ...restHtmlProps } = htmlProps;

    const onClickRef = useLiveRef(htmlOnClick);

    const onClick = React.useCallback(
      (event: React.MouseEvent) => {
        onClickRef.current?.(event);
        if (event.defaultPrevented) return;

        setExpanded((previousIsExpanded: any) => !previousIsExpanded);
      },
      [onClickRef, setExpanded],
    );

    return getToggleProps({ onClick, ...restHtmlProps });
  },
});

export const useShowMoreButton = showMoreComposableButton();

export const ShowMoreButton = createComponent({
  as: "button",
  memo: true,
  useHook: useShowMoreButton,
});
