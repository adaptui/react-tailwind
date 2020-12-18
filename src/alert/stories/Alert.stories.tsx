import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import "./Alert.css";
import { Alert, AlertProps } from "../index";

export default {
  title: "Alert",
  component: Alert,
} as Meta;

const Base: Story<AlertProps> = args => (
  <Alert {...args}>This is the Alert</Alert>
);

export const Default = Base.bind({});
Default.args = {};
