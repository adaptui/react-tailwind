import * as React from "react";

import { Avatar, AvatarGroup, AvatarGroupProps } from "../../index";

export type AvatarGroupIconProps = AvatarGroupProps & {};

export const AvatarGroupIcon: React.FC<AvatarGroupIconProps> = props => {
  return (
    <AvatarGroup {...props}>
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
    </AvatarGroup>
  );
};

export default AvatarGroupIcon;
