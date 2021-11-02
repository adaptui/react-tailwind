import * as React from "react";
import { Group } from "reakit";

import { Avatar, AvatarProps } from "../../index";

export type AvatarStackProps = AvatarProps & {};

export const AvatarStack: React.FC<AvatarStackProps> = props => {
  return (
    <Group aria-label="avatar group" className="flex space-x-2">
      <Avatar size="xs" {...props} />
      <Avatar size="sm" {...props} />
      <Avatar size="md" {...props} />
      <Avatar size="lg" {...props} />
      <Avatar size="xl" {...props} />
      <Avatar size="2xl" {...props} />
      <Avatar size="3xl" {...props} />
    </Group>
  );
};

export default AvatarStack;
