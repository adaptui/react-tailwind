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

export const useAvatarStatusIndicator =
  createHook<AvatarStatusIndicatorOptions>(
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
      ...props
    }) => {
      const theme = useTheme("avatar");
      const className = cx(theme.statusIndicator.common, props.className);

      props = { "aria-label": "avatar status indicator", ...props, className };
      props = useBox(props);

      return props;
    },
  );

export const AvatarStatusIndicator =
  createComponent<AvatarStatusIndicatorOptions>(props => {
    const htmlProps = useAvatarStatusIndicator(props);

    return createElement("div", htmlProps);
  });

export type AvatarStatusIndicatorOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<AvatarUIProps> & {};

export type AvatarStatusIndicatorProps<T extends As = "div"> = Props<
  AvatarStatusIndicatorOptions<T>
>;
