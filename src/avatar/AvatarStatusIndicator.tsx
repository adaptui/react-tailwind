import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { AVATAR_STATUS_INDICATOR_KEYS } from "./__keys";

export type AvatarStatusIndicatorOptions = BoxOptions & {};

export type AvatarStatusIndicatorHTMLProps = BoxHTMLProps;

export type AvatarStatusIndicatorProps = AvatarStatusIndicatorOptions &
  AvatarStatusIndicatorHTMLProps;

export const useAvatarStatusIndicator = createHook<
  AvatarStatusIndicatorOptions,
  AvatarStatusIndicatorHTMLProps
>({
  name: "AvatarStatusIndicator",
  compose: useBox,
  keys: AVATAR_STATUS_INDICATOR_KEYS,

  useProps(options, htmlProps) {
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("avatar");
    const className = cx(theme.statusIndicator.base, htmlClassName);

    return {
      className,
      "aria-label": "avatar-status-indicator",
      ...restHtmlProps,
    };
  },
});

export const AvatarStatusIndicator = createComponent({
  as: "div",
  memo: true,
  useHook: useAvatarStatusIndicator,
});
