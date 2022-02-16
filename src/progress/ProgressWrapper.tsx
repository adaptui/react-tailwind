import {
  createComponent,
  createHook,
  ProgressHTMLProps as ReakitProgressHTMLProps,
  ProgressOptions as ReakitProgressOptions,
  useProgress as useReakitProgress,
} from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx, RenderPropType } from "../utils";

import { PROGRESS_BAR_KEYS } from "./__keys";
import { ProgressStateReturn } from "./ProgressState";

export type ProgressWrapperOptions = BoxOptions &
  ReakitProgressOptions &
  Pick<ProgressStateReturn, "baseId"> & {
    label?: RenderPropType<ProgressStateReturn>;
  };

export type ProgressWrapperHTMLProps = BoxHTMLProps &
  ReakitProgressHTMLProps & {
    label?: RenderPropType<ProgressStateReturn>;
  };

export type ProgressWrapperProps = ProgressWrapperOptions &
  ProgressWrapperHTMLProps;

export const useProgressWrapper = createHook<
  ProgressWrapperOptions,
  ProgressWrapperHTMLProps
>({
  name: "ProgressWrapper",
  compose: [useBox, useReakitProgress],
  keys: PROGRESS_BAR_KEYS,

  useOptions(options, { label }) {
    return { label, ...options };
  },

  useProps(options, htmlProps) {
    const { baseId, label } = options;
    const { className: htmlClassName, label: _, ...restHtmlProps } = htmlProps;

    const theme = useTheme("progress");
    const className = cx(theme.wrapper, htmlClassName);

    const ariaLabel = label
      ? { "aria-labelledby": baseId }
      : { "aria-label": "progress" };

    return { ...ariaLabel, className, ...restHtmlProps };
  },
});

export const ProgressWrapper = createComponent({
  as: "div",
  memo: true,
  useHook: useProgressWrapper,
});
