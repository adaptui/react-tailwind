import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";
import { UseImageProps } from "..";

import { AVATAR_IMAGE_KEYS } from "./__keys";
import { AvatarStateReturn } from "./AvatarState";

export type AvatarImageOptions = BoxOptions & Pick<AvatarStateReturn, "size">;

export type AvatarImageHTMLProps = BoxHTMLProps & UseImageProps;

export type AvatarImageProps = AvatarImageOptions & AvatarImageHTMLProps;

export const useAvatarImage = createHook<
  AvatarImageOptions,
  AvatarImageHTMLProps
>({
  name: "AvatarImage",
  compose: useBox,
  keys: AVATAR_IMAGE_KEYS,

  useProps(options, htmlProps) {
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("avatar");
    const className = cx(theme.image, htmlClassName);

    return {
      className,
      "data-testid": "testid-avatarimg",
      ...restHtmlProps,
    };
  },
});

export const AvatarImage = createComponent({
  as: "img",
  memo: true,
  useHook: useAvatarImage,
});
