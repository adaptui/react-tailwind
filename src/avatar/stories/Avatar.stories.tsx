import React from "react";
import { Story, Meta } from "@storybook/react";

import "./avatar.css";
import { Avatar, AvatarProps } from "..";
import { ClockIcon } from "../../icons";

export default {
  title: "Avatar",
  component: Avatar,
} as Meta;

const Base: Story<AvatarProps> = args => (
  <Avatar {...args} src="https://bit.ly/dan-abramov" name="Dan Abrahmov" />
);

export const Default = Base.bind({});
Default.args = { size: "md" };

export const OnError: Story<AvatarProps> = () => (
  <Avatar
    src="https://bit.ly/dan-dabramov"
    onError={() => alert("Error loading image")}
  />
);

export const WithIcon: Story<AvatarProps> = () => (
  <Avatar>
    <ClockIcon />
  </Avatar>
);

export const NoNameAndSrc: Story<AvatarProps> = () => <Avatar />;
export const NameButNoSrc: Story<AvatarProps> = () => (
  <Avatar name="Anurag Hazra" />
);
export const NoNameAndSrcButFallback: Story<AvatarProps> = () => (
  <Avatar fallback={<ClockIcon />} />
);
export const NameAndFallback: Story<AvatarProps> = () => (
  <Avatar name="Anurag Hazra" fallback={<ClockIcon />} />
);
