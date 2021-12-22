import { createComponent, createHook } from "reakit-system";
import { TabbableHTMLProps, TabbableOptions, useTabbable } from "reakit";

import { useTheme } from "../theme";
import { cx } from "../utils";

import { SELECT_MAIN_KEYS } from "./__keys";
import { SelectStateReturn } from "./SelectState";

export type SelectMainOptions = TabbableOptions &
  Pick<SelectStateReturn, "size" | "variant" | "prefix" | "suffix"> & {};

export type SelectMainHTMLProps = Omit<TabbableHTMLProps, "size" | "prefix"> &
  Omit<React.SelectHTMLAttributes<any>, "size" | "prefix">;

export type SelectMainProps = SelectMainOptions & SelectMainHTMLProps;

export const useSelectMain = createHook<SelectMainOptions, SelectMainHTMLProps>(
  {
    name: "SelectMain",
    compose: useTabbable,
    keys: SELECT_MAIN_KEYS,

    useProps(options, htmlProps) {
      const { size, variant, prefix, suffix } = options;
      const { className: htmlClassName, ...restHtmlProps } = htmlProps;

      const theme = useTheme("select");
      const className = cx(
        theme.main.base,
        theme.main.size[size].base,
        !prefix || !suffix ? theme.main.size[size].default : "",
        theme.main.variant[variant],
        htmlClassName,
      );

      return {
        className,
        ...restHtmlProps,
      };
    },
  },
);

export const SelectMain = createComponent({
  as: "select",
  memo: true,
  useHook: useSelectMain,
});
