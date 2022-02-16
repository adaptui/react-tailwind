import {
  createComponent,
  createHook,
  ProgressHTMLProps as ReakitProgressHTMLProps,
  ProgressOptions as ReakitProgressOptions,
  useProgress as useReakitProgress,
} from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { CIRCULAR_PROGRESS_WRAPPER_KEYS } from "./__keys";

export type CircularProgressWrapperOptions = BoxOptions & ReakitProgressOptions;

export type CircularProgressWrapperHTMLProps = BoxHTMLProps &
  ReakitProgressHTMLProps;

export type CircularProgressWrapperProps = CircularProgressWrapperOptions &
  CircularProgressWrapperHTMLProps;

export const useCircularProgressWrapper = createHook<
  CircularProgressWrapperOptions,
  CircularProgressWrapperHTMLProps
>({
  name: "CircularProgressWrapper",
  compose: [useBox, useReakitProgress],
  keys: CIRCULAR_PROGRESS_WRAPPER_KEYS,

  useProps(options, htmlProps) {
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("circularProgress");
    const className = cx(theme.wrapper, htmlClassName);

    return { "aria-label": "circular progress", className, ...restHtmlProps };
  },
});

export const CircularProgressWrapper = createComponent({
  as: "div",
  memo: true,
  useHook: useCircularProgressWrapper,
});
