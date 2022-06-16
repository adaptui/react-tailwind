import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/MeterCustomJsx";
import ts from "./templates/MeterCustomTsx";
import MeterCustom from "./MeterCustom.component";

type Meta = ComponentMeta<typeof MeterCustom>;
type Story = ComponentStoryObj<typeof MeterCustom>;

export default {
  title: "Feedback/Meter/Custom",
  component: MeterCustom,
  argTypes: createControls("meter", {
    ignore: ["wrapElement", "as", "ref", "label", "hint"],
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

export const Intervals: Story = {
  ...Default,
  args: { ...Default.args, intervals: 4 },
};

export const RoundedBorders: Story = {
  ...Default,
  args: {
    ...Default.args,
    intervals: 4,
    flatBorders: false,
  },
};
