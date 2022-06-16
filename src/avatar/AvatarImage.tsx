import { cx } from "ariakit-utils";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";

import { AvatarUIProps } from "./AvatarProps";

export const useAvatarImage = createHook<AvatarImageOptions>(
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
      theme.image.base,
      !squared ? theme.image.circular : "",
      props.className,
    );

    props = {
      "data-testid": "testid-avatarimg",
      ...props,
      className,
    };
    props = useBox(props);

    return props;
  },
);

export const AvatarImage = createComponent<AvatarImageOptions>(props => {
  const htmlProps = useAvatarImage(props);

  return createElement("img", htmlProps);
});

export type AvatarImageOptions<T extends As = "img"> = BoxOptions<T> &
  Partial<AvatarUIProps> & {};

export type AvatarImageProps<T extends As = "img"> = Props<
  AvatarImageOptions<T>
>;
