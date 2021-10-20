import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { PROGRESS_LABEL_KEYS } from "./__keys";
import { ProgressStateReturn } from "./ProgressState";

export type ProgressLabelOptions = BoxOptions &
  Pick<ProgressStateReturn, "size" | "baseId">;

export type ProgressLabelHTMLProps = BoxHTMLProps;

export type ProgressLabelProps = ProgressLabelOptions & ProgressLabelHTMLProps;

export const useProgressLabel = createHook<
  ProgressLabelOptions,
  ProgressLabelHTMLProps
>({
  name: "ProgressLabel",
  compose: useBox,
  keys: PROGRESS_LABEL_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    const { size, baseId } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("progress");
    const className = cx(
      theme.label.base,
      theme.label.size[size],
      htmlClassName,
    );

    return { id: baseId, className, ...restHtmlProps };
  },
});

export const ProgressLabel = createComponent({
  as: "span",
  memo: true,
  useHook: useProgressLabel,
});
