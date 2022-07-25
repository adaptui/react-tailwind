import { DisclosureOptions, useDisclosure } from "ariakit";
import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { ButtonOptions, useButton } from "../button";
import { createComponent } from "../utils";

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
    console.log("%cstate", "color: #e5de73", state);
    props = useDisclosure({ state, ...props });
    props = useBox(props);

    return props;
  },
);

export const ShowMoreButton = createComponent<ShowMoreButtonOptions>(props => {
  const htmlProps = useShowMoreButton(props);

  return createElement("button", htmlProps);
}, "ShowMoreButton");

export type ShowMoreButtonOptions<T extends As = "button"> = BoxOptions<T> &
  DisclosureOptions<T> &
  ButtonOptions<T> &
  Partial<ShowMoreUIProps> & {};

export type ShowMoreButtonProps<T extends As = "button"> = Props<
  ShowMoreButtonOptions<T>
>;
