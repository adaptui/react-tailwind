import React from "react";
import { Story, Meta } from "@storybook/react";

import { DatePicker } from "../DatePicker";
import { useDatePickerState } from "@renderlesskit/react";

export default {
  title: "DatePicker",
  component: DatePicker,
  argTypes: {},
} as Meta;

const Template: Story = () => {
  const state = useDatePickerState({
    gutter: 0,
    unstable_offset: [-19, 10],
    formatOptions: { month: "2-digit", day: "2-digit", year: "numeric" },
  });
  return <DatePicker {...state} />;
};

export const Default = Template.bind({});
Default.args = {};
