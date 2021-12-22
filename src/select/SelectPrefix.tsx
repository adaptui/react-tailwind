import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SELECT_PREFIX_KEYS } from "./__keys";
import { SelectStateReturn } from "./SelectState";

export type SelectPrefixOptions = BoxOptions &
  Pick<SelectStateReturn, "size" | "variant"> & {};

export type SelectPrefixHTMLProps = BoxHTMLProps;

export type SelectPrefixProps = SelectPrefixOptions & SelectPrefixHTMLProps;

export const useSelectPrefix = createHook<
  SelectPrefixOptions,
  SelectPrefixHTMLProps
>({
  name: "SelectPrefix",
  compose: useBox,
  keys: SELECT_PREFIX_KEYS,

  useProps(options, htmlProps) {
    const { size, variant } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("select");
    const className = cx(
      theme.prefix.base,
      theme.prefix.size[size],
      theme.prefix.variant[variant],
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const SelectPrefix = createComponent({
  as: "div",
  memo: true,
  useHook: useSelectPrefix,
});
