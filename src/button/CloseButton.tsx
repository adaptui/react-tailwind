import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { CloseIcon } from "../icons";
import { createComponent } from "../utils";

import { ButtonOptions, useButton } from "./Button";

export const useCloseButton = createHook<CloseButtonOptions>(props => {
  props = { ...props, "aria-label": "close" };
  props = useButton({
    ...props,
    iconOnly: (props.children as React.ReactNode) || <CloseIcon />,
  });

  return props;
});

export const CloseButton = createComponent<CloseButtonOptions>(props => {
  const htmlProps = useCloseButton(props);

  return createElement("button", htmlProps);
}, "CloseButton");

export type CloseButtonOptions<T extends As = "button"> = ButtonOptions<T> & {};

export type CloseButtonProps<T extends As = "button"> = Props<
  CloseButtonOptions<T>
>;
