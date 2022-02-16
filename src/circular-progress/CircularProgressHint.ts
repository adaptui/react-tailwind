import { createComponent, createHook } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { CIRCULAR_PROGRESS_HINT_KEYS } from "./__keys";
import { CircularProgressStateReturn } from "./CircularProgressState";

export type CircularProgressHintOptions = BoxOptions &
  Pick<CircularProgressStateReturn, "size">;

export type CircularProgressHintHTMLProps = BoxHTMLProps;

export type CircularProgressHintProps = CircularProgressHintOptions &
  CircularProgressHintHTMLProps;

export const useCircularProgressHint = createHook<
  CircularProgressHintOptions,
  CircularProgressHintHTMLProps
>({
  name: "CircularProgressHint",
  compose: useBox,
  keys: CIRCULAR_PROGRESS_HINT_KEYS,

  useProps(options, htmlProps) {
    const { size } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("circularProgress");
    const className = cx(
      theme.hint.common,
      theme.hint.size[size],
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const CircularProgressHint = createComponent({
  as: "span",
  memo: true,
  useHook: useCircularProgressHint,
});
CircularProgressHint.displayName = "CircularProgressHint";
