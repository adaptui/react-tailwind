import React from "react";
import { createComponent, createHook } from "reakit-system";
import { useLiveRef } from "reakit-utils";
import { cx } from "@renderlesskit/react";

import { ButtonHTMLProps, ButtonOptions, useButton } from "../button";
import { PlusIcon } from "../icons/Plus";

import { RADIO_SHOW_MORE_BUTTON_KEYS } from "./__keys";
import { RadioShowMoreStateReturn } from "./RadioShowMoreState";

export type RadioShowMoreButtonOptions = ButtonOptions &
  Pick<
    RadioShowMoreStateReturn,
    "isVisibleAnimateStart" | "setExpanded" | "getToggleProps"
  >;

export type RadioShowMoreButtonHTMLProps = ButtonHTMLProps;

export type RadioShowMoreButtonProps = RadioShowMoreButtonOptions &
  RadioShowMoreButtonHTMLProps;

export const useRadioShowMoreButton = createHook<
  RadioShowMoreButtonOptions,
  RadioShowMoreButtonHTMLProps
>({
  name: "RadioShowMoreButton",
  compose: useButton,
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
    const { isVisibleAnimateStart, setExpanded, getToggleProps } = options;
    const {
      className: htmlClassName,
      onClick: htmlOnClick,
      ...restHtmlProps
    } = htmlProps;

    const onClickRef = useLiveRef(htmlOnClick);

    // const theme = useTheme("radio");
    const className = cx(
      "justify-start w-full -ml-2.5",
      isVisibleAnimateStart ? "!mt-3" : "!-mt-2",
      htmlClassName,
    );

    const onClick = React.useCallback(
      (event: React.MouseEvent) => {
        onClickRef.current?.(event);
        if (event.defaultPrevented) return;

        setExpanded(previousIsExpanded => !previousIsExpanded);
      },
      [onClickRef, setExpanded],
    );

    return getToggleProps({ className, onClick, ...restHtmlProps });
  },
});

export const RadioShowMoreButton = createComponent({
  as: "button",
  memo: true,
  useHook: useRadioShowMoreButton,
});
