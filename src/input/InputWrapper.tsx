import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { InputUIProps } from "./InputProps";

export const useInputWrapper = createHook<InputWrapperOptions>(
  ({ prefix, suffix, size, variant, invalid, loading, spinner, ...props }) => {
    const theme = useTheme("input");
    const className = cx(theme.wrapper, props.className);

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const InputWrapper = createComponent<InputWrapperOptions>(props => {
  const htmlProps = useInputWrapper(props);

  return createElement("div", htmlProps);
});

export type InputWrapperOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<InputUIProps> & {};

export type InputWrapperProps<T extends As = "div"> = Props<
  InputWrapperOptions<T>
>;
