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

export const useAvatarIcon = createHook<AvatarIconOptions>(
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
      theme.icon.common,
      size ? theme.icon.size[size] : "",
      props.className,
    );

    props = {
      "aria-label": "avatar icon",
      ...props,
      className,
    };
    props = useBox(props);

    return props;
  },
);

export const AvatarIcon = createComponent<AvatarIconOptions>(props => {
  const htmlProps = useAvatarIcon(props);

  return createElement("span", htmlProps);
});

export type AvatarIconOptions<T extends As = "span"> = BoxOptions<T> &
  Partial<AvatarUIProps> & {};

export type AvatarIconProps<T extends As = "span"> = Props<
  AvatarIconOptions<T>
>;
