import { createComponent, createHook } from "reakit-system";
import { cx } from "@chakra-ui/utils";

import {
  ShowMoreContentHTMLProps,
  ShowMoreContentOptions,
  useShowMoreContent,
} from "../show-more/ShowMore";

import { RADIO_SHOW_MORE_CONTENT_KEYS } from "./__keys";

export type RadioShowMoreContentOptions = ShowMoreContentOptions;

export type RadioShowMoreContentHTMLProps = ShowMoreContentHTMLProps;

export type RadioShowMoreContentProps = RadioShowMoreContentOptions &
  RadioShowMoreContentHTMLProps;

export const useRadioShowMoreContent = createHook<
  RadioShowMoreContentOptions,
  RadioShowMoreContentHTMLProps
>({
  name: "RadioShowMoreContent",
  compose: useShowMoreContent,
  keys: RADIO_SHOW_MORE_CONTENT_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    // const theme = useTheme("radio");
    const className = cx("!flex flex-col space-y-4", htmlClassName);

    return { className, ...restHtmlProps };
  },
});

export const RadioShowMoreContent = createComponent({
  as: "div",
  memo: true,
  useHook: useRadioShowMoreContent,
});
