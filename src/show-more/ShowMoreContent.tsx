import { createComponent } from "reakit-system";
import { disclosureComposableContent, Hook } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";

import { ShowMoreStateReturn } from "./ShowMoreState";

export type ShowMoreContentOptions = BoxOptions &
  Pick<
    ShowMoreStateReturn,
    | "baseId"
    | "expanded"
    | "contentSize"
    | "duration"
    | "direction"
    | "easing"
    | "onCollapseEnd"
    | "onCollapseStart"
    | "onExpandEnd"
    | "onExpandStart"
  >;

export type ShowMoreContentHTMLProps = BoxHTMLProps;

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
