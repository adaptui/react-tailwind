import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { SelectUIProps } from "./SelectProps";

export const useSelectWrapper = createHook<SelectWrapperOptions>(
  ({ prefix, suffix, size, variant, invalid, loading, spinner, ...props }) => {
    const theme = useTheme("select");
    const className = cx(theme.wrapper, props.className);

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const SelectWrapper = createComponent<SelectWrapperOptions>(props => {
  const htmlProps = useSelectWrapper(props);

  return createElement("div", htmlProps);
}, "SelectWrapper");

export type SelectWrapperOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<SelectUIProps> & {};

export type SelectWrapperProps<T extends As = "div"> = Props<
  SelectWrapperOptions<T>
>;
