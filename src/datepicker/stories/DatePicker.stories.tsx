import React from "react";
import { Story, Meta } from "@storybook/react";

import { DatePicker, DatePickerRange } from "../DatePicker";

export default {
  title: "DatePicker",
  component: DatePicker,
  argTypes: {},
} as Meta;

const Template: Story = () => {
  return <DatePicker />;
};

const Template2: Story = () => {
  return <DatePickerRange />;
};

export const Default = Template.bind({});
Default.args = {};

export const Range = Template2.bind({});
Range.args = {};
