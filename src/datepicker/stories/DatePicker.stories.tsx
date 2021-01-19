import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  CDatePicker,
  CDateRangePicker,
  CustomInputDatePicker,
} from "../DatePicker";

export default {
  title: "DatePicker",
  component: CDatePicker,
  argTypes: {},
} as Meta;

const Base: Story = () => <CDatePicker />;

const Template2: Story = () => {
  return (
    <CDateRangePicker defaultValue={{ start: "10-5-2020", end: "11-5-2020" }} />
  );
};

export const Default = Base.bind({});
Default.args = {};

export const Range = Template2.bind({});
Range.args = {};

export const CustomInput = () => <CustomInputDatePicker />;
