import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { SliderDefaultKnobIcon } from "../..";

import js from "./templates/SliderBasicJsx";
import ts from "./templates/SliderBasicTsx";
import { SliderBasic } from "./SliderBasic.component";

type Meta = ComponentMeta<typeof SliderBasic>;
type Story = ComponentStoryObj<typeof SliderBasic>;

export default {
  title: "Forms/Slider/Basic",
  component: SliderBasic,
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
  argTypes: createControls("slider", {
    unions: ["themeColor"],
    ignore: [
      "ref",
      "wrapElement",
      "as",
      "formatOptions",
      "knobIcon",
      "defaultValue",
      "range",
    ],
  }),
} as Meta;

export const Default: Story = {
  args: { size: "md", themeColor: "base", defaultValue: [50] },
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

export const KnobIcon: Story = {
  ...Default,
  args: { ...Default.args, size: "md", knobIcon: SliderDefaultKnobIcon },
};

export const WithoutTooltip: Story = {
  ...Default,
  args: {
    ...Default.args,
    size: "md",
    knobIcon: SliderDefaultKnobIcon,
    tooltip: false,
  },
};

export const MinMax = {
  ...Default,
  args: { ...Default.args, size: "md", minValue: 20, maxValue: 80 },
};

export const Step = {
  ...Default,
  args: { ...Default.args, size: "md", step: 10 },
};

export const FormatOptions = {
  ...Default,
  args: {
    ...Default.args,
    size: "md",
    formatOptions: {
      style: "unit",
      unit: "celsius",
      unitDisplay: "narrow",
    },
  },
};

export const IsDisabled: Story = {
  ...Default,
  args: { ...Default.args, isDisabled: true },
};
