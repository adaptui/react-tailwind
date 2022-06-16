import { DisclosureOptions, useDisclosure } from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { ButtonOptions, useButton } from "../button";

import { ShowMoreUIProps } from "./ShowMoreProps";

export const useShowMoreButton = createHook<ShowMoreButtonOptions>(
  ({
    state,
    button,
    size,
    themeColor,
    variant,
    prefix,
    suffix,
    iconOnly,
    loading,
    spinner,
    ...props
  }) => {
    props = useButton({
      size,
      themeColor,
      variant,
      prefix,
      suffix,
      iconOnly,
      loading,
      spinner,
      ...props,
    });
    props = useDisclosure({ state, ...props });

    return props;
  },
);

export const ShowMoreButton = createComponent<ShowMoreButtonOptions>(props => {
  const htmlProps = useShowMoreButton(props);

  return createElement("button", htmlProps);
});

export type ShowMoreButtonOptions<T extends As = "button"> =
  DisclosureOptions<T> & ButtonOptions<T> & Partial<ShowMoreUIProps> & {};

export type ShowMoreButtonProps<T extends As = "button"> = Props<
  ShowMoreButtonOptions<T>
>;
