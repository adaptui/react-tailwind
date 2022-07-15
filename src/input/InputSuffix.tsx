import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { InputBaseProps } from "./InputBase";
import { InputUIProps } from "./InputProps";

export const useInputSuffix = createHook<InputSuffixOptions>(
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

export const InputSuffix = createComponent<InputSuffixOptions>(props => {
  const htmlProps = useInputSuffix(props);

  return createElement("div", htmlProps);
}, "InputSuffix");

export type InputSuffixOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<InputUIProps> &
  Pick<InputBaseProps, "disabled"> & {};

export type InputSuffixProps<T extends As = "div"> = Props<
  InputSuffixOptions<T>
>;
