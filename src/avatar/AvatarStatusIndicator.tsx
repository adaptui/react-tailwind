import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { AvatarUIProps } from "./AvatarProps";

export const useAvatarStatusIndicator =
  createHook<AvatarStatusIndicatorOptions>(
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
      const className = cx(theme.statusIndicator.base, props.className);

      props = { "aria-label": "avatar status indicator", ...props, className };
      props = useBox(props);

      return props;
    },
  );

export const AvatarStatusIndicator =
  createComponent<AvatarStatusIndicatorOptions>(props => {
    const htmlProps = useAvatarStatusIndicator(props);

    return createElement("div", htmlProps);
  }, "AvatarStatusIndicator");

export type AvatarStatusIndicatorOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<AvatarUIProps> & {};

export type AvatarStatusIndicatorProps<T extends As = "div"> = Props<
  AvatarStatusIndicatorOptions<T>
>;
