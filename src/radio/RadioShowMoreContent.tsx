import { createComponent, createHook } from "reakit-system";
import { BoxHTMLProps, BoxOptions, useBox } from "reakit";
import { cx } from "@chakra-ui/utils";

import { RADIO_SHOW_MORE_CONTENT_KEYS } from "./__keys";
import { RadioShowMoreStateReturn } from "./RadioShowMoreState";

export type RadioShowMoreContentOptions = BoxOptions &
  Pick<
    RadioShowMoreStateReturn,
    "setIsVisibleAnimateStart" | "getCollapseProps"
  >;

export type RadioShowMoreContentHTMLProps = BoxHTMLProps;

export type RadioShowMoreContentProps = RadioShowMoreContentOptions &
  RadioShowMoreContentHTMLProps;

export const useRadioShowMoreContent = createHook<
  RadioShowMoreContentOptions,
  RadioShowMoreContentHTMLProps
>({
  name: "RadioShowMoreContent",
  compose: useBox,
  keys: RADIO_SHOW_MORE_CONTENT_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    const { getCollapseProps } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    // const theme = useTheme("radio");
    const className = cx("!flex flex-col space-y-4", htmlClassName);

    // @ts-ignore
    return getCollapseProps({ className, ...restHtmlProps });
  },
});

export const RadioShowMoreContent = createComponent({
  as: "div",
  memo: true,
  useHook: useRadioShowMoreContent,
});
