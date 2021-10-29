import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { AVATAR_STATUS_INDICATOR_KEYS } from "./__keys";
import { AvatarStateReturn } from "./AvatarState";

export type AvatarStatusIndicatorOptions = BoxOptions &
  Pick<AvatarStateReturn, "statusIndicatorRingColor">;

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
    const { statusIndicatorRingColor } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("avatar");
    const className = cx(
      theme.statusIndicator.base,
      statusIndicatorRingColor,
      htmlClassName,
    );

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
