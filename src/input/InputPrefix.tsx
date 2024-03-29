import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { InputBaseProps } from "./InputBase";
import { InputUIProps } from "./InputProps";

export const useInputPrefix = createHook<InputPrefixOptions>(
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
      theme.prefix,
      size ? theme.size[size]?.prefix : "",
      disabled
        ? ""
        : variant
        ? cx(
            theme.variant[variant]?.default?.prefix,
            theme.variant[variant]?.hover?.prefix,
            theme.variant[variant]?.active?.prefix,
            theme.variant[variant]?.focus?.prefix,
            invalid ? theme.variant[variant]?.invalid?.prefix : "",
          )
        : "",
      variant && disabled ? theme.variant[variant]?.disabled?.prefix : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const InputPrefix = createComponent<InputPrefixOptions>(props => {
  const htmlProps = useInputPrefix(props);

  return createElement("div", htmlProps);
}, "InputPrefix");

export type InputPrefixOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<InputUIProps> &
  Pick<InputBaseProps, "disabled"> & {};

export type InputPrefixProps<T extends As = "div"> = Props<
  InputPrefixOptions<T>
>;
