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

export const SelectSuffix = createComponent<SelectSuffixOptions>(props => {
  const htmlProps = useSelectSuffix(props);

  return createElement("div", htmlProps);
});

export type SelectSuffixOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<SelectUIProps> &
  Pick<SelectBaseProps, "disabled"> & {};

export type SelectSuffixProps<T extends As = "div"> = Props<
  SelectSuffixOptions<T>
>;
