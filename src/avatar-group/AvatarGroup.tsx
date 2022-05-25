import { Avatar } from "../avatar";
import { forwardRefWithAs } from "../utils";

import { AvatarGroupContextProvider } from "./__utils";
import { AvatarGroupProps, useAvatarGroupProps } from "./AvatarGroupProps";
import { AvatarGroupWrapper } from "./AvatarGroupWrapper";

export const AvatarGroup = forwardRefWithAs<
  AvatarGroupProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { childrenWithinMax, excessChildrenCount, uiProps, wrapperProps } =
    useAvatarGroupProps(props);

  return (
    <AvatarGroupWrapper ref={ref} {...uiProps} {...wrapperProps}>
      <AvatarGroupContextProvider {...uiProps}>
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
