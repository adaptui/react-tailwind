import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Badge, BadgeProps } from "../Badge";

export default {
  title: "Badge",
  component: Badge,
  argTypes: {},
} as Meta;

const Template: Story<BadgeProps> = args => <Badge {...args}>badge</Badge>;

export const Primary = Template.bind({});
Primary.args = {
  size: "sm",
  variant: "primary",
};

export const XSmall = Template.bind({});
XSmall.args = {
  size: "xs",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
};
