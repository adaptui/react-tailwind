import { createComponent, createHook } from "reakit-system";
import {
  unstable_IdHTMLProps,
  unstable_IdOptions,
  unstable_useId,
} from "reakit";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { PROGRESS_LABEL_KEYS } from "./__keys";
import { ProgressStateReturn } from "./ProgressState";

export type ProgressLabelOptions = BoxOptions &
  unstable_IdOptions &
  Pick<ProgressStateReturn, "size">;

export type ProgressLabelHTMLProps = BoxHTMLProps & unstable_IdHTMLProps;

export type ProgressLabelProps = ProgressLabelOptions & ProgressLabelHTMLProps;

export const useProgressLabel = createHook<
  ProgressLabelOptions,
  ProgressLabelHTMLProps
>({
  name: "ProgressLabel",
  compose: [useBox, unstable_useId],
  keys: PROGRESS_LABEL_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    const { size } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("progress");
    const className = cx(
      theme.label.common,
      theme.label.size[size],
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const ProgressLabel = createComponent({
  as: "span",
  memo: true,
  useHook: useProgressLabel,
});
