import * as React from "react";

import { Avatar, AvatarGroup, AvatarGroupProps } from "../../index";

export type AvatarGroupNameProps = AvatarGroupProps & {};

export const AvatarGroupName: React.FC<AvatarGroupNameProps> = props => {
  return (
    <AvatarGroup {...props}>
      <Avatar name="Leanne Graham" />
      <Avatar name="Ervin Howell" />
      <Avatar name="Clementine Bauch" />
      <Avatar name="Patricia Lebsack" />
      <Avatar name="Chelsey Dietrich" />
      <Avatar name="Dennis Schulist" />
    </AvatarGroup>
  );
};

export default AvatarGroupName;
