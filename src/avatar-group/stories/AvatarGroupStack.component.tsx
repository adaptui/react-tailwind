import * as React from "react";
import { Group } from "reakit";

import { Avatar, AvatarGroup, AvatarGroupProps } from "../../index";

export type AvatarGroupStackProps = AvatarGroupProps & {};

export const AvatarGroupStack: React.FC<AvatarGroupStackProps> = props => {
  return (
    <Group
      aria-label="group of avatar groups"
      className="flex flex-col space-y-2"
    >
      <AvatarGroupBasic size="xs" {...props} />
      <AvatarGroupBasic size="sm" {...props} />
      <AvatarGroupBasic size="md" {...props} />
      <AvatarGroupBasic size="lg" {...props} />
      <AvatarGroupBasic size="xl" {...props} />
      <AvatarGroupBasic size="2xl" {...props} />
      <AvatarGroupBasic size="3xl" {...props} />
    </Group>
  );
};

export default AvatarGroupStack;

type AvatarGroupBasicProps = AvatarGroupProps & {};

const AvatarGroupBasic: React.FC<AvatarGroupBasicProps> = props => {
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
