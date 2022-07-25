import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/ProgressCustomJsx";
import ts from "./templates/ProgressCustomTsx";
import ProgressCustom from "./ProgressCustom.component";

type Meta = ComponentMeta<typeof ProgressCustom>;
type Story = ComponentStoryObj<typeof ProgressCustom>;

export default {
  title: "Feedback/Progress/Custom",
  component: ProgressCustom,
  argTypes: createControls("progress", {
    ignore: ["__TYPE__", "wrapElement", "as", "ref", "label", "hint"],
  }),
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {
  args: { size: "md", themeColor: "base" },
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
