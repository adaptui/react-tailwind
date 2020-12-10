import React from "react";
import { Story, Meta } from "@storybook/react";

import "./calendar.css";
import { useCalendarState } from "@renderlesskit/react";
import { Calendar } from "../Calendar";

export default {
  title: "Calendar",
  component: Calendar,
  argTypes: {},
} as Meta;

const Template: Story = () => {
  const state = useCalendarState();
  return <Calendar {...state} />;
};

export const Default = Template.bind({});
Default.args = {};
