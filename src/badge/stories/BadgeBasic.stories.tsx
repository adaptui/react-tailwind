import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { SlotIcon } from "../..";

import js from "./templates/BadgeBasicJsx";
import ts from "./templates/BadgeBasicTsx";
import { BadgeBasic } from "./BadgeBasic.component";

type Meta = ComponentMeta<typeof BadgeBasic>;
type Story = ComponentStoryObj<typeof BadgeBasic>;

export default {
  title: "Primitives/Badge/Basic",
  component: BadgeBasic,
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
  argTypes: createControls("badge", {
    ignore: ["wrapElement", "as", "ref", "prefix"],
  }),
} as Meta;

export const Default: Story = {
  args: {
    size: "md",
    variant: "solid",
    themeColor: "base",
  },
};

export const Small: Story = {
  ...Default,
  args: { ...Default.args, size: "sm" },
};
export const Medium: Story = {
  ...Default,
  args: { ...Default.args, size: "md" },
};
export const Large: Story = {
  ...Default,
  args: { ...Default.args, size: "lg" },
};

export const Base: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "base" },
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

export const Solid: Story = {
  ...Default,
  args: { ...Default.args, variant: "solid" },
};
export const Subtle: Story = {
  ...Default,
  args: { ...Default.args, variant: "subtle" },
};
export const Outline: Story = {
  ...Default,
  args: { ...Default.args, variant: "outline" },
};

export const Prefix: Story = {
  ...Default,
  args: { ...Default.args, prefix: <SlotIcon /> },
};
