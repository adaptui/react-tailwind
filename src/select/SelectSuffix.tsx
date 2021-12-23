import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SELECT_SUFFIX_KEYS } from "./__keys";
import { SelectProps } from "./Select";
import { SelectStateReturn } from "./SelectState";

export type SelectSuffixOptions = BoxOptions &
  Pick<SelectStateReturn, "size" | "variant" | "invalid"> & {
    disabled: SelectProps["disabled"];
  };

export type SelectSuffixHTMLProps = BoxHTMLProps;

export type SelectSuffixProps = SelectSuffixOptions & SelectSuffixHTMLProps;

export const useSelectSuffix = createHook<
  SelectSuffixOptions,
  SelectSuffixHTMLProps
>({
  name: "SelectSuffix",
  compose: useBox,
  keys: SELECT_SUFFIX_KEYS,

  useProps(options, htmlProps) {
    const { size, variant, disabled, invalid } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("select");
    const className = cx(
      theme.suffix.common,
      theme.suffix.size[size],
      theme.suffix.variant[variant].common,
      disabled || invalid ? "" : theme.suffix.variant[variant].interactions,
      disabled ? theme.suffix.variant[variant].disabled : "",
      invalid ? theme.suffix.variant[variant].invalid : "",
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const SelectSuffix = createComponent({
  as: "div",
  memo: true,
  useHook: useSelectSuffix,
});
