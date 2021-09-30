import { createComponent } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";

import { SHOW_MORE_CONTENT_KEYS } from "./__keys";
import { createComposableHook } from "./createComposableHook";
import { ShowMoreStateReturn } from "./ShowMoreState";

export type ShowMoreContentOptions = BoxOptions &
  Pick<ShowMoreStateReturn, "getCollapseProps">;

export type ShowMoreContentHTMLProps = BoxHTMLProps;

export type ShowMoreContentProps = ShowMoreContentOptions &
  ShowMoreContentHTMLProps;

export const showMoreComposableContent = createComposableHook<
  ShowMoreContentOptions,
  ShowMoreContentHTMLProps
>({
  name: "ShowMoreContent",
  compose: useBox,
  keys: SHOW_MORE_CONTENT_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    const { getCollapseProps } = options;

    // @ts-ignore
    return getCollapseProps(htmlProps);
  },
});

export const useShowMoreContent = showMoreComposableContent();

export const ShowMoreContent = createComponent({
  as: "div",
  memo: true,
  useHook: useShowMoreContent,
});
