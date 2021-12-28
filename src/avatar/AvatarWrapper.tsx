import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { AVATAR_WRAPPER_KEYS } from "./__keys";
import { AvatarStateReturn } from "./AvatarState";

export type AvatarWrapperOptions = BoxOptions &
  Pick<AvatarStateReturn, "size" | "circular" | "showRing" | "ringColor">;

export type AvatarWrapperHTMLProps = BoxHTMLProps;

export type AvatarWrapperProps = AvatarWrapperOptions & AvatarWrapperHTMLProps;

export const useAvatarWrapper = createHook<
  AvatarWrapperOptions,
  AvatarWrapperHTMLProps
>({
  name: "AvatarWrapper",
  compose: useBox,
  keys: AVATAR_WRAPPER_KEYS,

  useProps(options, htmlProps) {
    const { size, circular, showRing, ringColor } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("avatar");
    const className = cx(
      theme.wrapper.common,
      circular ? theme.wrapper.circular : "",
      theme.wrapper.size[size],
      showRing ? theme.wrapper.border.size[size] : "",
      showRing && ringColor ? ringColor : "",
      htmlClassName,
    );

    return {
      className,
      "data-testid": "testid-avatar_children",
      ...restHtmlProps,
    };
  },
});

export const AvatarWrapper = createComponent({
  as: "span",
  memo: true,
  useHook: useAvatarWrapper,
});
