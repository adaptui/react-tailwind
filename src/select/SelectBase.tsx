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

import { SelectUIProps } from "./SelectProps";

export const useSelectBase = createHook<SelectBaseOptions>(
  ({ prefix, suffix, size, variant, invalid, loading, spinner, ...props }) => {
    const theme = useTheme("select");
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

export const SelectBase = createComponent<SelectBaseOptions>(props => {
  const htmlProps = useSelectBase(props);

  return createElement("select", htmlProps);
});

export type SelectBaseOptions<T extends As = "select"> = BoxOptions<T> &
  FocusableOptions<T> &
  Partial<SelectUIProps> & {};

export type SelectBaseProps<T extends As = "select"> = Props<
  SelectBaseOptions<T>
>;
