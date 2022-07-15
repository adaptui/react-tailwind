import { FocusableOptions, useFocusable } from "ariakit";
import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { SelectUIProps } from "./SelectProps";

export const useSelectBase = createHook<SelectBaseOptions>(
  ({ prefix, suffix, size, variant, invalid, loading, spinner, ...props }) => {
    const theme = useTheme("select");
    const className = cx(
      theme.base,
      size ? theme.size[size]?.base?.default : "",
      size && (!prefix || !suffix) ? theme.size[size]?.base?.withoutAddon : "",
      props.disabled
        ? ""
        : variant
        ? cx(
            theme.variant[variant]?.default?.base,
            theme.variant[variant]?.hover?.base,
            theme.variant[variant]?.active?.base,
            theme.variant[variant]?.focus?.base,
            invalid ? theme.variant[variant]?.invalid?.base : "",
          )
        : "",
      variant && props.disabled ? theme.variant[variant]?.disabled?.base : "",
      props.className,
    );

    props = { "aria-invalid": invalid, ...props, className };
    props = useFocusable(props);
    props = useBox(props);

    return props;
  },
);

export const SelectBase = createComponent<SelectBaseOptions>(props => {
  const htmlProps = useSelectBase(props);

  return createElement("select", htmlProps);
}, "SelectBase");

export type SelectBaseOptions<T extends As = "select"> = FocusableOptions<T> &
  Partial<SelectUIProps> & {};

export type SelectBaseProps<T extends As = "select"> = Props<
  SelectBaseOptions<T>
>;
