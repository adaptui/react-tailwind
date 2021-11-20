import { createComponent } from "reakit-system";
import {
  disclosureComposableContent,
  DisclosureContentOptions,
  DisclosureHTMLProps,
  Hook,
} from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";

export type ShowMoreContentOptions = BoxOptions & DisclosureContentOptions;

export type ShowMoreContentHTMLProps = BoxHTMLProps & DisclosureHTMLProps;

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
