import { FocusableOptions, useFocusable } from "ariakit";
import { cx } from "ariakit-utils";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";

import { SelectUIProps } from "./SelectProps";

export const useSelectBase = createHook<SelectBaseOptions>(
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
