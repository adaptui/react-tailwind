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
      theme.suffix.common,
      size ? theme.suffix.size[size] : "",
      variant ? theme.suffix.variant[variant].common : "",
      disabled || invalid
        ? ""
        : variant
        ? theme.suffix.variant[variant].interactions
        : "",
      variant && disabled ? theme.suffix.variant[variant].disabled : "",
      variant && invalid ? theme.suffix.variant[variant].invalid : "",
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
});

export type InputSuffixOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<InputUIProps> &
  Pick<InputBaseProps, "disabled"> & {};

export type InputSuffixProps<T extends As = "div"> = Props<
  InputSuffixOptions<T>
>;
