import { createComponent } from "reakit-system";
import {
  disclosureCollapseComposableContent,
  DisclosureCollapseContentHTMLProps,
  DisclosureCollapseContentOptions,
  Hook,
} from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";

export type ShowMoreContentOptions = BoxOptions &
  DisclosureCollapseContentOptions;

export type ShowMoreContentHTMLProps = BoxHTMLProps &
  DisclosureCollapseContentHTMLProps;

export type ShowMoreContentProps = ShowMoreContentOptions &
  ShowMoreContentHTMLProps;

export const useShowMoreContent = disclosureCollapseComposableContent(
  useBox,
) as Hook<ShowMoreContentOptions, ShowMoreContentHTMLProps>;

export const ShowMoreContent = createComponent({
  as: "div",
  memo: true,
  useHook: useShowMoreContent,
});

ShowMoreContent.displayName = "ShowMoreContent";
