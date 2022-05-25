import { FocusableOptions, useFocusable } from "ariakit";
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

export const useInputBase = createHook<InputBaseOptions>(
  ({ prefix, suffix, size, variant, invalid, loading, spinner, ...props }) => {
    const theme = useTheme("input");
    const className = cx(
      theme.base.common,
      size ? theme.base.size[size].common : "",
      variant ? theme.base.variant[variant].common : "",
      size && (!prefix || !suffix) ? theme.base.size[size].withoutAddon : "",
      props.disabled || invalid
        ? ""
        : variant
        ? theme.base.variant[variant].interactions
        : "",
      variant && props.disabled ? theme.base.variant[variant].disabled : "",
      variant && invalid ? theme.base.variant[variant].invalid : "",
      props.className,
    );

    props = { "aria-invalid": invalid, ...props, className };
    props = useBox(props);
    props = useFocusable(props);

    return props;
  },
);

export const InputBase = createComponent<InputBaseOptions>(props => {
  const htmlProps = useInputBase(props);

  return createElement("input", htmlProps);
});

export type InputBaseOptions<T extends As = "input"> = BoxOptions<T> &
  FocusableOptions<T> &
  Partial<InputUIProps> & {};

export type InputBaseProps<T extends As = "input"> = Props<InputBaseOptions<T>>;
