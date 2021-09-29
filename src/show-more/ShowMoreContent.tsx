import { createComponent, createHook } from "reakit-system";
import { RoleHTMLProps, RoleOptions, useRole } from "reakit";

import { SHOW_MORE_CONTENT_KEYS } from "./__keys";
import { ShowMoreStateReturn } from "./ShowMoreState";

export type ShowMoreContentOptions = RoleOptions &
  Pick<ShowMoreStateReturn, "getCollapseProps">;

export type ShowMoreContentHTMLProps = RoleHTMLProps;

export type ShowMoreContentProps = ShowMoreContentOptions &
  ShowMoreContentHTMLProps;

export const useShowMoreContent = createHook<
  ShowMoreContentOptions,
  ShowMoreContentHTMLProps
>({
  name: "ShowMoreContent",
  compose: useRole,
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

export const ShowMoreContent = createComponent({
  as: "div",
  memo: true,
  useHook: useShowMoreContent,
});
