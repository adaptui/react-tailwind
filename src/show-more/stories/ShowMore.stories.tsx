import * as React from "react";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import {
  ShowMoreComponent,
  ShowMoreHorizontalComponent,
} from "./ShowMoreComponent";

type Meta = ComponentMeta<typeof ShowMoreComponent>;
type Story = ComponentStoryObj<typeof ShowMoreComponent>;

export default {
  title: "Feedback/ShowMore",
  component: ShowMoreComponent,
  parameters: { layout: "centered", options: { showPanel: true } },
} as Meta;

export const Default: Story = {
  args: { direction: "vertical" },
};

export const Horizontal: Story = {
  render: args => <ShowMoreHorizontalComponent {...args} />,
  args: { direction: "horizontal" },
};
