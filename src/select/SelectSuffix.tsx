import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SELECT_SUFFIX_KEYS } from "./__keys";
import { SelectStateReturn } from "./SelectState";

export type SelectSuffixOptions = BoxOptions &
  Pick<SelectStateReturn, "size" | "variant"> & {};

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
    const { size, variant } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("select");
    const className = cx(
      theme.suffix.base,
      theme.suffix.size[size],
      theme.suffix.variant[variant],
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
