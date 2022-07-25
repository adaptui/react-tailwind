import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/MeterBasicJsx";
import ts from "./templates/MeterBasicTsx";
import MeterBasic from "./MeterBasic.component";

type Meta = ComponentMeta<typeof MeterBasic>;
type Story = ComponentStoryObj<typeof MeterBasic>;

export default {
  title: "Feedback/Meter/Basic",
  component: MeterBasic,
  argTypes: createControls("meter", {
    ignore: ["__TYPE__", "wrapElement", "as", "ref", "label", "hint"],
  }),
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {
  args: { size: "md", themeColor: "base", max: 100, value: 50 },
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
  args: { ...Default.args, label: "Meter" },
};

export const Hint: Story = {
  ...Default,
  args: { ...Default.args, label: "Meter", hint: "50%" },
};

export const Intervals: Story = {
  ...Default,
  args: { ...Default.args, label: "Meter", hint: "50%", intervals: 2 },
};

export const RoundedBorders: Story = {
  ...Default,
  args: {
    ...Default.args,
    label: "Meter",
    hint: "50%",
    intervals: 4,
    flatBorders: false,
  },
};
