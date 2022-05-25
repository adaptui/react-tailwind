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
    const theme = useTheme("input");
    const className = cx(
      theme.prefix.common,
      size ? theme.prefix.size[size] : "",
      variant ? theme.prefix.variant[variant].common : "",
      disabled || invalid
        ? ""
        : variant
        ? theme.prefix.variant[variant].interactions
        : "",
      variant && disabled ? theme.prefix.variant[variant].disabled : "",
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
