import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import "./icon.css";
import { Icon, IconProps } from "../index";

export default {
  title: "Icon",
  component: Icon,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<IconProps> = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {};
