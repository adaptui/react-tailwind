import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SELECT_WRAPPER_KEYS } from "./__keys";

export type SelectWrapperOptions = BoxOptions & {};

export type SelectWrapperHTMLProps = BoxHTMLProps;

export type SelectWrapperProps = SelectWrapperOptions & SelectWrapperHTMLProps;

export const useSelectWrapper = createHook<
  SelectWrapperOptions,
  SelectWrapperHTMLProps
>({
  name: "SelectWrapper",
  compose: useBox,
  keys: SELECT_WRAPPER_KEYS,

  useProps(options, htmlProps) {
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("select");
    const className = cx(theme.wrapper, htmlClassName);

    return { className, ...restHtmlProps };
  },
});

export const SelectWrapper = createComponent({
  as: "div",
  memo: true,
  useHook: useSelectWrapper,
});
