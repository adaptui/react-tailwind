import React from "react";
import { Story, Meta } from "@storybook/react";

import { CDatePicker, CDateRangePicker } from "../DatePicker";

export default {
  title: "DatePicker",
  component: CDatePicker,
  argTypes: {},
} as Meta;

const Template: Story = () => {
  return <CDatePicker />;
};

const Template2: Story = () => {
  return (
    <CDateRangePicker defaultValue={{ start: "10-5-2020", end: "11-5-2020" }} />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Range = Template2.bind({});
Range.args = {};
