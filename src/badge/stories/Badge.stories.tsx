import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import "./badge.css";
import { Badge, BadgeProps } from "../Badge";

export default {
  title: "Badge",
  component: Badge,
  argTypes: {},
} as Meta;

const Template: Story<BadgeProps> = args => <Badge {...args}>badge</Badge>;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};
