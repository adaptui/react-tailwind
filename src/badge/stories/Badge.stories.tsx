import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls } from "../../../.storybook/utils";
import { Badge } from "../Badge";

type Meta = ComponentMeta<typeof Badge>;
type Story = ComponentStoryObj<typeof Badge>;

export default {
  title: "Primitives/Badge",
  component: Badge,
  argTypes: createControls("badge", {
    ignore: ["unstable_system", "wrapElement", "as"],
  }),
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default: Story = {
  args: {
    children: "Beta",
    size: "md",
    variant: "solid",
    themeColor: "default",
  },
  parameters: { options: { showPanel: true } },
};

export const Small: Story = {
  ...Default,
  args: { ...Default.args, size: "sm" },
};
export const Medium: Story = { ...Default };
export const Large: Story = {
  ...Default,
  args: { ...Default.args, size: "lg" },
};

export const Solid: Story = { ...Default };
export const Subtle: Story = {
  ...Default,
  args: { ...Default.args, variant: "subtle" },
};
export const Outline: Story = {
  ...Default,
  args: { ...Default.args, variant: "outline" },
};

export const Primary: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "primary" },
};
export const Seconday: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "secondary" },
};
export const Success: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "success" },
};
export const Danger: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "danger" },
};
