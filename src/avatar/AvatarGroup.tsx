import { forwardRefWithAs } from "../utils";

import { Avatar } from "./Avatar";
import { useAvatarGroupProps } from "./AvatarGroupProps";
import {
  AvatarGroupContextProvider,
  AvatarGroupInitialState,
} from "./AvatarGroupState";
import {
  AvatarGroupWrapper,
  AvatarGroupWrapperHTMLProps,
} from "./AvatarGroupWrapper";

export type AvatarGroupOwnProps = AvatarGroupWrapperHTMLProps;

export type AvatarGroupProps = AvatarGroupInitialState & AvatarGroupOwnProps;

export const AvatarGroup = forwardRefWithAs<
  AvatarGroupProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { childrenWithinMax, excessChildrenCount, state, context, ...rest } =
    useAvatarGroupProps(props);

  return (
    <AvatarGroupWrapper ref={ref} {...state} {...rest}>
      <AvatarGroupContextProvider {...context}>
        {childrenWithinMax}
        {excessChildrenCount > 0 ? (
          <Avatar
            name={excessChildrenCount.toString()}
            data-testid="testid-excess_label"
          />
        ) : null}
      </AvatarGroupContextProvider>
    </AvatarGroupWrapper>
  );
});

AvatarGroup.displayName = "AvatarGroup";
