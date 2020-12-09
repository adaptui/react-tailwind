import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import "./button.css";
import { Button, ButtonProps } from "../../index";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const ExtraSmall = Template.bind({});
ExtraSmall.args = { size: "extra-small", children: "Button" };

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  children: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Button",
};
