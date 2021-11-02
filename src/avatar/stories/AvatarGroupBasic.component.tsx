import * as React from "react";

import { Avatar, AvatarGroup, AvatarGroupProps } from "../../index";

export type AvatarGroupBasicProps = AvatarGroupProps & {};

export const AvatarGroupBasic: React.FC<AvatarGroupBasicProps> = props => {
  return (
    <AvatarGroup {...props}>
      <Avatar name="Leanne Graham" src="https://i.pravatar.cc/300?img=1" />
      <Avatar name="Ervin Howell" src="https://i.pravatar.cc/300?img=11" />
      <Avatar name="Clementine Bauch" src="https://i.pravatar.cc/300?img=21" />
      <Avatar name="Patricia Lebsack" src="https://i.pravatar.cc/300?img=31" />
      <Avatar name="Chelsey Dietrich" src="https://i.pravatar.cc/300?img=41" />
      <Avatar name="Dennis Schulist" src="https://i.pravatar.cc/300?img=51" />
    </AvatarGroup>
  );
};

export default AvatarGroupBasic;
