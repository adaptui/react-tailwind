import {
  DisclosureCollapsibleContentOptions,
  useDisclosureCollapsibleContent,
} from "@renderlesskit/react";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { ShowMoreUIProps } from "./ShowMoreProps";

export const useShowMoreContent = createHook<ShowMoreContentOptions>(
  ({ state, button, ...props }) => {
    props = useDisclosureCollapsibleContent({ state, ...props });

    return props;
  },
);

export const ShowMoreContent = createComponent<ShowMoreContentOptions>(
  props => {
    const htmlProps = useShowMoreContent(props);

    return createElement("div", htmlProps);
  },
);

export type ShowMoreContentOptions<T extends As = "div"> =
  DisclosureCollapsibleContentOptions<T> & Partial<ShowMoreUIProps> & {};

export type ShowMoreContentProps<T extends As = "div"> = Props<
  ShowMoreContentOptions<T>
>;
