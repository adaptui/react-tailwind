import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SelectBaseProps } from "./SelectBase";
import { SelectUIProps } from "./SelectProps";

export const useSelectPrefix = createHook<SelectPrefixOptions>(
  ({
    prefix,
    suffix,
    size,
    variant,
    invalid,
    loading,
    spinner,
    disabled,
    ...props
  }) => {
    const theme = useTheme("select");
    const className = cx(
      theme.prefix,
      size ? theme.size[size].prefix : "",
      disabled
        ? ""
        : variant
        ? cx(
            theme.variant[variant].default.prefix,
            theme.variant[variant].hover.prefix,
            theme.variant[variant].active.prefix,
            theme.variant[variant].focus.prefix,
            invalid ? theme.variant[variant].invalid.prefix : "",
          )
        : "",
      variant && disabled ? theme.variant[variant].disabled.prefix : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const SelectPrefix = createComponent<SelectPrefixOptions>(props => {
  const htmlProps = useSelectPrefix(props);

  return createElement("div", htmlProps);
});

export type SelectPrefixOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<SelectUIProps> &
  Pick<SelectBaseProps, "disabled"> & {};

export type SelectPrefixProps<T extends As = "div"> = Props<
  SelectPrefixOptions<T>
>;
