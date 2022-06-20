import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/CircularProgressBasicJsx";
import ts from "./templates/CircularProgressBasicTsx";
import CircularProgressBasic from "./CircularProgressBasic.component";

type Meta = ComponentMeta<typeof CircularProgressBasic>;
type Story = ComponentStoryObj<typeof CircularProgressBasic>;

export default {
  title: "Feedback/CircularProgress/Basic",
  component: CircularProgressBasic,
  argTypes: createControls("circularProgress", {
    unions: ["themeColor"],
    ignore: ["wrapElement", "as", "ref", "hint"],
  }),
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {
  args: { size: "md", themeColor: "base", value: 1 },
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

export const Hint: Story = {
  ...Default,
  args: { ...Default.args, hint: "50%" },
};

export const Indeterminate: Story = {
  ...Default,
  args: { ...Default.args, value: null },
};
