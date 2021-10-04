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
  Pick<ShowMoreStateReturn, "baseId" | "toggle">;

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
    const { toggle } = options;
    const {
      onClick: htmlOnClick,
      "aria-controls": ariaControls,
      ...restHtmlProps
    } = htmlProps;
    const controls = ariaControls
      ? `${ariaControls} ${options.baseId}`
      : options.baseId;

    const onClickRef = useLiveRef(htmlOnClick);

    const onClick = React.useCallback(
      (event: React.MouseEvent) => {
        onClickRef.current?.(event);
        if (event.defaultPrevented) return;

        toggle?.();
      },
      [onClickRef, toggle],
    );

    return { "aria-controls": controls, onClick, ...restHtmlProps };
  },
});

export const useShowMoreButton = showMoreComposableButton();

export const ShowMoreButton = createComponent({
  as: "button",
  memo: true,
  useHook: useShowMoreButton,
});
