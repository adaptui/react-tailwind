import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { AvatarUIProps } from "./AvatarProps";

export const useAvatarInitials = createHook<AvatarInitialsOptions>(
  ({
    squared,
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
      theme.initials.base,
      size ? theme.initials.size[size] : "",
      props.className,
    );

    props = {
      role: "img",
      "aria-label": name as string,
      ...props,
      className,
    };
    props = useBox(props);

    return props;
  },
);

export const AvatarInitials = createComponent<AvatarInitialsOptions>(props => {
  const htmlProps = useAvatarInitials(props);

  return createElement("span", htmlProps);
}, "AvatarInitials");

export type AvatarInitialsOptions<T extends As = "span"> = BoxOptions<T> &
  Partial<AvatarUIProps> & {};

export type AvatarInitialsProps<T extends As = "span"> = Props<
  AvatarInitialsOptions<T>
>;
