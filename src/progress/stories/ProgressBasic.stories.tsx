import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/ProgressBasicJsx";
import ts from "./templates/ProgressBasicTsx";
import ProgressBasic from "./ProgressBasic.component";

type Meta = ComponentMeta<typeof ProgressBasic>;
type Story = ComponentStoryObj<typeof ProgressBasic>;

export default {
  title: "Feedback/Progress/Basic",
  component: ProgressBasic,
  argTypes: createControls("progress", {
    ignore: ["wrapElement", "as", "ref", "label", "hint"],
  }),
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {
  args: { size: "md", themeColor: "base", value: 50 },
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
export const ExtraLarge: Story = {
  ...Default,
  args: { ...Default.args, size: "xl" },
};

export const Base: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "base" },
};
export const Primary: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "primary" },
};

export const Label: Story = {
  ...Default,
  args: { ...Default.args, label: "Progress" },
};

export const Hint: Story = {
  ...Default,
  args: { ...Default.args, label: "Progress", hint: "50%" },
};

export const Indeterminate: Story = {
  ...Default,
  args: { ...Default.args, value: null },
};
