import { createHook } from "reakit-system";
import { createComponent } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SELECT_PREFIX_KEYS } from "./__keys";
import { SelectProps } from "./Select";
import { SelectStateReturn } from "./SelectState";

export type SelectPrefixOptions = BoxOptions &
  Pick<SelectStateReturn, "size" | "variant" | "invalid"> & {
    disabled: SelectProps["disabled"];
  };

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
    const { size, variant, invalid, disabled } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("select");
    const className = cx(
      theme.prefix.common,
      theme.prefix.size[size],
      theme.prefix.variant[variant].common,
      disabled || invalid ? "" : theme.prefix.variant[variant].interactions,
      disabled ? theme.prefix.variant[variant].disabled : "",
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
