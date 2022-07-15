import { useRole } from "ariakit";
import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { ComponentOptions, createComponent, tcm } from "../utils";

export const useBox = createHook<BoxOptions>(({ __TYPE__, ...props }) => {
  props = { ...props, className: tcm(props.className) };
  props = useRole(props);

  return props;
});

export const Box = createComponent<BoxOptions>(props => {
  const htmlProps = useBox(props);

  return createElement("div", htmlProps);
}, "Box");

export type BoxOptions<T extends As = "div"> = ComponentOptions<T>;

export type BoxProps<T extends As = "div"> = Props<BoxOptions<T>>;
