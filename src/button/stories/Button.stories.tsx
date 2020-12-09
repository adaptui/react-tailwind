import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import "./button.css";
import { Button, ButtonProps } from "../index";
import { ClockIcon } from "../../icons";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = args => (
  <Button leftIcon={<ClockIcon />} leftIconStyles="mr-2 flex" {...args}>
    Button
  </Button>
);

export const ExtraSmall = Template.bind({});
ExtraSmall.args = { size: "extra-small" };

export const Small = Template.bind({});
Small.args = { size: "small" };

export const Medium = Template.bind({});
Medium.args = { size: "medium" };

export const Large = Template.bind({});
Large.args = { size: "large" };
