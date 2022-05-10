import { RoleOptions, useRole } from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { tcm } from "../utils";

export const useBox = createHook<BoxOptions>(props => {
  props = { ...props, className: tcm(props.className) };
  props = useRole(props);

  return props;
});

export const Box = createComponent<BoxOptions>(props => {
  const htmlProps = useBox(props);

  return createElement("div", htmlProps);
});

export type BoxOptions<T extends As = "div"> = RoleOptions<T>;

export type BoxProps<T extends As = "div"> = Props<BoxOptions<T>>;
