import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { AVATAR_WRAPPER_KEYS } from "./__keys";
import { AvatarStateReturn } from "./AvatarState";

export type AvatarWrapperOptions = BoxOptions & Pick<AvatarStateReturn, "size">;

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
    const { size } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("avatar");
    const className = cx(
      theme.wrapper.base,
      theme.wrapper.size[size],
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
  as: "div",
  memo: true,
  useHook: useAvatarWrapper,
});
