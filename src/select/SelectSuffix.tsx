import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { SelectBaseProps } from "./SelectBase";
import { SelectUIProps } from "./SelectProps";

export const useSelectSuffix = createHook<SelectSuffixOptions>(
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
      theme.suffix,
      size ? theme.size[size]?.suffix : "",
      disabled
        ? ""
        : variant
        ? cx(
            theme.variant[variant]?.default?.suffix,
            theme.variant[variant]?.hover?.suffix,
            theme.variant[variant]?.active?.suffix,
            theme.variant[variant]?.focus?.suffix,
            invalid ? theme.variant[variant]?.invalid?.suffix : "",
          )
        : "",
      variant && disabled ? theme.variant[variant]?.disabled?.suffix : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const SelectSuffix = createComponent<SelectSuffixOptions>(props => {
  const htmlProps = useSelectSuffix(props);

  return createElement("div", htmlProps);
}, "SelectSuffix");

export type SelectSuffixOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<SelectUIProps> &
  Pick<SelectBaseProps, "disabled"> & {};

export type SelectSuffixProps<T extends As = "div"> = Props<
  SelectSuffixOptions<T>
>;
