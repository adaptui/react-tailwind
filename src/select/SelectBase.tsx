import { createHook } from "reakit-system";
import { TabbableHTMLProps, TabbableOptions, useTabbable } from "reakit";
import { ariaAttr, createComponent } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { cx } from "../utils";

import { SELECT_BASE_KEYS } from "./__keys";
import { SelectStateReturn } from "./SelectState";

export type SelectBaseOptions = TabbableOptions &
  Pick<
    SelectStateReturn,
    "size" | "variant" | "prefix" | "suffix" | "invalid"
  > & {};

export type SelectBaseHTMLProps = Omit<TabbableHTMLProps, "size" | "prefix"> &
  Omit<React.SelectHTMLAttributes<any>, "size" | "prefix">;

export type SelectBaseProps = SelectBaseOptions & SelectBaseHTMLProps;

export const useSelectBase = createHook<SelectBaseOptions, SelectBaseHTMLProps>(
  {
    name: "SelectBase",
    compose: useTabbable,
    keys: SELECT_BASE_KEYS,

    useProps(options, htmlProps) {
      const { size, variant, prefix, suffix, invalid, disabled } = options;
      const { className: htmlClassName, ...restHtmlProps } = htmlProps;

      const theme = useTheme("select");
      const className = cx(
        theme.base.common,
        theme.base.size[size].common,
        !prefix || !suffix ? theme.base.size[size].withoutAddon : "",
        theme.base.variant[variant].common,
        disabled || invalid ? "" : theme.base.variant[variant].interactions,
        disabled ? theme.base.variant[variant].disabled : "",
        invalid ? theme.base.variant[variant].invalid : "",
        htmlClassName,
      );

      return {
        className,
        disabled,
        "aria-invalid": ariaAttr(invalid),
        ...restHtmlProps,
      };
    },
  },
);

export const SelectBase = createComponent({
  as: "select",
  memo: true,
  useHook: useSelectBase,
});
