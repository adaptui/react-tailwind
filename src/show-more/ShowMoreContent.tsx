import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";
import {
  DisclosureCollapsibleContentOptions,
  useDisclosureCollapsibleContent,
} from "@adaptui/react";

import { BoxOptions, useBox } from "../box";
import { createComponent } from "../utils";

import { ShowMoreUIProps } from "./ShowMoreProps";

export const useShowMoreContent = createHook<ShowMoreContentOptions>(
  ({ state, button, ...props }) => {
    props = useDisclosureCollapsibleContent({ state, ...props });
    props = useBox(props);

    return props;
  },
);

export const ShowMoreContent = createComponent<ShowMoreContentOptions>(
  props => {
    const htmlProps = useShowMoreContent(props);

    return createElement("div", htmlProps);
  },
  "ShowMoreContent",
);

export type ShowMoreContentOptions<T extends As = "div"> = BoxOptions<T> &
  DisclosureCollapsibleContentOptions<T> &
  Partial<ShowMoreUIProps> & {};

export type ShowMoreContentProps<T extends As = "div"> = Props<
  ShowMoreContentOptions<T>
>;
