import * as React from "react";

import theme from "../theme";
import { ocx } from "../utils";
import { Avatar } from "./Avatar";

export type AvatarGroupProps = { limit?: number };

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  limit = 100,
  children,
  ...rest
}) => {
  const avatars = React.Children.toArray(children);
  const childrenCount = React.Children.count(children);

  const isOverLimit = childrenCount >= limit && limit >= 0;
  if (isOverLimit) {
    avatars.splice(limit);
  }

  return (
    <div role="group" {...rest} className={ocx(theme.avatar.group.base)}>
      {avatars}
      {isOverLimit ? <Avatar name={`+ ${childrenCount - limit}`} /> : null}
    </div>
  );
};
