import { GroupOptions, useGroup } from "ariakit";
import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { AvatarGroupUIProps } from "./AvatarGroupProps";

export const useAvatarGroupWrapper = createHook<AvatarGroupWrapperOptions>(
  ({ size, squared, showRing, ringColor, max, ...props }) => {
    const theme = useTheme("avatar");
    const className = cx(
      theme.group.base,
      size ? theme.group.size[size] : "",
      props.className,
    );

    props = { "aria-label": "avatar group", ...props, className };
    props = useGroup(props);
    props = useBox(props);

    return props;
  },
);

export const AvatarGroupWrapper = createComponent<AvatarGroupWrapperOptions>(
  props => {
    const htmlProps = useAvatarGroupWrapper(props);

    return createElement("div", htmlProps);
  },
  "AvatarGroupWrapper",
);

export type AvatarGroupWrapperOptions<T extends As = "div"> = BoxOptions<T> &
  GroupOptions<T> &
  Partial<AvatarGroupUIProps> & {};

export type AvatarGroupWrapperProps<T extends As = "div"> = Props<
  AvatarGroupWrapperOptions<T>
>;
