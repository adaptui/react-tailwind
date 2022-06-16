import { cx } from "ariakit-utils";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";

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

export const InputPrefix = createComponent<InputPrefixOptions>(props => {
  const htmlProps = useInputPrefix(props);

  return createElement("div", htmlProps);
});

export type InputPrefixOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<InputUIProps> &
  Pick<InputBaseProps, "disabled"> & {};

export type InputPrefixProps<T extends As = "div"> = Props<
  InputPrefixOptions<T>
>;
