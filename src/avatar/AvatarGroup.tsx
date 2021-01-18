import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { createContext } from "../utils";
import { Avatar, AvatarProps } from "./Avatar";

export type AvatarGroupProps = Pick<AvatarProps, "size"> & { limit?: number };
export type AvatarGroupContext = Pick<AvatarProps, "size"> & {};

const [AvatarGroupProvider, useAvatarGroup] = createContext<AvatarGroupContext>(
  {
    strict: false,
    name: "AvatarGroupProvider",
  },
);

export { useAvatarGroup };

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  limit = 100,
  children,
  size,
  ...rest
}) => {
  const state = React.useMemo(() => ({ size }), [size]);

  const avatars = React.Children.toArray(children);
  const childrenCount = React.Children.count(children);
  const theme = useTheme();

  const isOverLimit = childrenCount > limit && limit >= 0;
  if (isOverLimit) {
    avatars.splice(limit);
  }

  return (
    <AvatarGroupProvider value={state}>
      <div
        role="group"
        aria-label="Avatar group"
        className={cx(theme.avatar.group.base)}
        {...rest}
      >
        {avatars}
        {isOverLimit ? (
          <Avatar
            data-testid="testid-truncated"
            name={`+ ${childrenCount - limit}`}
          />
        ) : null}
      </div>
    </AvatarGroupProvider>
  );
};
