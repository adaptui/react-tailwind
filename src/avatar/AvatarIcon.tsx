import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { AVATAR_ICON_KEYS } from "./__keys";
import { AvatarStateReturn } from "./AvatarState";

export type AvatarIconOptions = BoxOptions & Pick<AvatarStateReturn, "size">;

export type AvatarIconHTMLProps = BoxHTMLProps;

export type AvatarIconProps = AvatarIconOptions & AvatarIconHTMLProps;

export const useAvatarIcon = createHook<AvatarIconOptions, AvatarIconHTMLProps>(
  {
    name: "AvatarIcon",
    compose: useBox,
    keys: AVATAR_ICON_KEYS,

    useProps(options, htmlProps) {
      const { size } = options;
      const { className: htmlClassName, ...restHtmlProps } = htmlProps;

      const theme = useTheme("avatar");
      const className = cx(
        theme.icon.base,
        theme.icon.size[size],
        htmlClassName,
      );

      return {
        className,
        "aria-label": "avatar-icon",
        ...restHtmlProps,
      };
    },
  },
);

export const AvatarIcon = createComponent({
  as: "span",
  memo: true,
  useHook: useAvatarIcon,
});
