import * as React from "react";

import { AvatarIcon } from "./AvatarIcon";
import { AvatarImage } from "./AvatarImage";
import { AvatarInitials } from "./AvatarInitials";
import { AvatarProps, useAvatarProps } from "./AvatarProps";
import { AvatarStatusIndicator } from "./AvatarStatusIndicator";
import { AvatarWrapper } from "./AvatarWrapper";

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (props, ref) => {
    const {
      uiProps,
      wrapperProps,
      iconProps,
      initialsProps,
      imageProps,
      statusIndicatorProps,
    } = useAvatarProps(props);
    const { showFallback, initials, status } = uiProps;

    return (
      <AvatarWrapper ref={ref} {...wrapperProps}>
        {showFallback ? (
          initials == null ? (
            <AvatarIcon {...iconProps} />
          ) : (
            <AvatarInitials {...initialsProps} />
          )
        ) : (
          <AvatarImage {...imageProps} />
        )}
        {status !== "none" ? (
          <AvatarStatusIndicator {...statusIndicatorProps} />
        ) : null}
      </AvatarWrapper>
    );
  },
);

Avatar.displayName = "Avatar";
