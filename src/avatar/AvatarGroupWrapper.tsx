import { createComponent, createHook } from "reakit-system";
import { GroupHTMLProps, GroupOptions, useGroup } from "reakit";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { AVATAR_GROUP_WRAPPER_KEYS } from "./__keys";
import { AvatarStateReturn } from "./AvatarState";

export type AvatarGroupWrapperOptions = BoxOptions &
  GroupOptions &
  Pick<AvatarStateReturn, "size">;

export type AvatarGroupWrapperHTMLProps = BoxHTMLProps & GroupHTMLProps;

export type AvatarGroupWrapperProps = AvatarGroupWrapperOptions &
  AvatarGroupWrapperHTMLProps;

export const useAvatarGroupWrapper = createHook<
  AvatarGroupWrapperOptions,
  AvatarGroupWrapperHTMLProps
>({
  name: "AvatarGroupWrapper",
  compose: [useBox, useGroup],
  keys: AVATAR_GROUP_WRAPPER_KEYS,

  useProps(options, htmlProps) {
    const { size } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("avatar");
    const className = cx(
      theme.group.base,
      theme.group.size[size],
      htmlClassName,
    );

    return {
      className,
      "aria-label": "avatar group",
      ...restHtmlProps,
    };
  },
});

export const AvatarGroupWrapper = createComponent({
  as: "div",
  memo: true,
  useHook: useAvatarGroupWrapper,
});
