import { createComponent, createHook } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { AVATAR_IMAGE_KEYS } from "./__keys";
import { AvatarStateReturn } from "./AvatarState";

export type AvatarInitialsOptions = BoxOptions &
  Pick<AvatarStateReturn, "size" | "name">;

export type AvatarInitialsHTMLProps = BoxHTMLProps;

export type AvatarInitialsProps = AvatarInitialsOptions &
  AvatarInitialsHTMLProps;

export const useAvatarInitials = createHook<
  AvatarInitialsOptions,
  AvatarInitialsHTMLProps
>({
  name: "AvatarInitials",
  compose: useBox,
  keys: AVATAR_IMAGE_KEYS,

  useProps(options, htmlProps) {
    const { size, name } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("avatar");
    const className = cx(
      theme.initials.common,
      theme.initials.size[size],
      htmlClassName,
    );

    return {
      className,
      role: "img",
      "aria-label": name as string,
      ...restHtmlProps,
    };
  },
});

export const AvatarInitials = createComponent({
  as: "span",
  memo: true,
  useHook: useAvatarInitials,
});
