import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { PROGRESS_HINT_KEYS } from "./__keys";
import { ProgressStateReturn } from "./ProgressState";

export type ProgressHintOptions = BoxOptions &
  Pick<ProgressStateReturn, "size">;

export type ProgressHintHTMLProps = BoxHTMLProps;

export type ProgressHintProps = ProgressHintOptions & ProgressHintHTMLProps;

export const useProgressHint = createHook<
  ProgressHintOptions,
  ProgressHintHTMLProps
>({
  name: "ProgressHint",
  compose: useBox,
  keys: PROGRESS_HINT_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    const { size } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("progress");
    const className = cx(
      theme.hint.common,
      theme.hint.size[size],
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const ProgressHint = createComponent({
  as: "div",
  memo: true,
  useHook: useProgressHint,
});
