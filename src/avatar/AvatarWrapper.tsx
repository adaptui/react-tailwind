import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { AvatarUIProps } from "./AvatarProps";

export const useAvatarWrapper = createHook<AvatarWrapperOptions>(
  ({
    circular,
    size,
    icon,
    name,
    initials,
    status,
    parentsBackground,
    getInitialsFromName,
    imageStatus,
    showFallback,
    statusIndicators,
    showRing,
    ringColor,
    max,
    ...props
  }) => {
    const theme = useTheme("avatar");
    const className = cx(
      theme.wrapper.common,
      circular ? theme.wrapper.circular : "",
      size ? theme.wrapper.size[size] : "",
      size && showRing ? theme.wrapper.border.size[size] : "",
      showRing && ringColor ? ringColor : "",
      props.className,
    );

    props = { "data-testid": "testid-avatar_children", ...props, className };
    props = useBox(props);

    return props;
  },
);

export const AvatarWrapper = createComponent<AvatarWrapperOptions>(props => {
  const htmlProps = useAvatarWrapper(props);

  return createElement("span", htmlProps);
});

export type AvatarWrapperOptions<T extends As = "span"> = BoxOptions<T> &
  Partial<AvatarUIProps> & {};

export type AvatarWrapperProps<T extends As = "span"> = Props<
  AvatarWrapperOptions<T>
>;
