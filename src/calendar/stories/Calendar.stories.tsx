import React from "react";
import { Story, Meta } from "@storybook/react";

import "./calendar.css";
import { CalendarInitialState } from "@renderlesskit/react";
import { Calendar } from "../Calendar";

export default {
  title: "Calendar",
  component: Calendar,
  argTypes: {},
} as Meta;

const Template: Story<CalendarInitialState> = args => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {};
