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
      theme.base,
      size ? theme.size[size].base.default : "",
      size && (!prefix || !suffix) ? theme.size[size].base.withoutAddon : "",
      variant ? theme.variant[variant].default : "",
      props.disabled || invalid
        ? ""
        : variant
        ? cx(
            theme.variant[variant].default.base,
            theme.variant[variant].hover.base,
            theme.variant[variant].active.base,
            theme.variant[variant].focus.base,
          )
        : "",
      variant && props.disabled ? theme.variant[variant].disabled.base : "",
      variant && invalid ? theme.variant[variant].invalid.base : "",
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
