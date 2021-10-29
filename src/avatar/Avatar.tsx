import * as React from "react";
import { isNull } from "@chakra-ui/utils";

import { AvatarIcon } from "./AvatarIcon";
import { AvatarImage } from "./AvatarImage";
import { AvatarInitials } from "./AvatarInitials";
import { useAvatarProps } from "./AvatarProps";
import { AvatarInitialState } from "./AvatarState";
import { AvatarStatusIndicator } from "./AvatarStatusIndicator";
import { AvatarWrapper, AvatarWrapperHTMLProps } from "./AvatarWrapper";

export type AvatarOwnProps = Partial<AvatarWrapperHTMLProps> & {};

export type AvatarProps = AvatarInitialState & AvatarOwnProps & {};

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (props, ref) => {
    const {
      state,
      wrapperProps,
      iconProps,
      initialsProps,
      imageProps,
      statusIndicatorProps,
    } = useAvatarProps(props);
    const { showFallback, initials, status } = state;

    return (
      <AvatarWrapper ref={ref} {...wrapperProps}>
        {showFallback ? (
          !isNull(initials) ? (
            <AvatarInitials {...initialsProps} />
          ) : (
            <AvatarIcon {...iconProps} />
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
