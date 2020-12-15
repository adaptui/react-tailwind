import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import "./spinner.css";
import { Spinner, SpinnerProps } from "../index";

export default {
  title: "Spinner",
  component: Spinner,
} as Meta;

const Template: Story<SpinnerProps> = args => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = { size: "md" };

const VisibleStroke: Story<SpinnerProps> = args => <Spinner {...args} />;

export const StrokeVisible = VisibleStroke.bind({});
StrokeVisible.args = { size: "md", stroke: "visible" };
