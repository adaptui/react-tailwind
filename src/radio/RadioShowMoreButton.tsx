import * as React from "react";
import { createComponent, createHook } from "reakit-system";
import { cx } from "@renderlesskit/react";

import { PlusIcon } from "../icons";
import {
  ShowMoreButtonHTMLProps,
  ShowMoreButtonOptions,
  useShowMoreButton,
} from "../show-more/ShowMore";
import { ShowMoreStateReturn } from "../show-more/ShowMoreState";

import { RADIO_SHOW_MORE_BUTTON_KEYS } from "./__keys";

export type RadioShowMoreButtonOptions = ShowMoreButtonOptions &
  Pick<ShowMoreStateReturn, "isVisibleAnimateStart">;

export type RadioShowMoreButtonHTMLProps = ShowMoreButtonHTMLProps;

export type RadioShowMoreButtonProps = RadioShowMoreButtonOptions &
  RadioShowMoreButtonHTMLProps;

export const useRadioShowMoreButton = createHook<
  RadioShowMoreButtonOptions,
  RadioShowMoreButtonHTMLProps
>({
  name: "RadioShowMoreButton",
  compose: useShowMoreButton,
  keys: RADIO_SHOW_MORE_BUTTON_KEYS,

  useOptions(options, htmlProps) {
    const {
      variant = "ghost",
      prefix = <PlusIcon className={"mr-2 text-base"} />,
      ...restOptions
    } = options;

    return { variant, prefix, ...restOptions };
  },

  useProps(options, htmlProps) {
    const { isVisibleAnimateStart } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    // const theme = useTheme("radio");
    const className = cx(
      "justify-start w-full -ml-3",
      isVisibleAnimateStart ? "!mt-3" : "!-mt-2",
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const RadioShowMoreButton = createComponent({
  as: "button",
  memo: true,
  useHook: useRadioShowMoreButton,
});
