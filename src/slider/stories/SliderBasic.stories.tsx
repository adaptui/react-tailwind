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
    ignore: ["unstable_system", "wrapElement", "as"],
  }),
} as Meta;

export const Small: Story = {
  args: { size: "sm", defaultValue: [50] },
};

export const Medium: Story = {
  args: { size: "md", defaultValue: [50] },
};

export const Large: Story = {
  args: { size: "lg", defaultValue: [50] },
};

export const ExtraLarge: Story = {
  args: { size: "xl", defaultValue: [50] },
};

export const KnobIcon: Story = {
  args: { size: "md", defaultValue: [50], knobIcon: SliderDefaultKnobIcon },
};

export const WithoutTooltip: Story = {
  args: {
    size: "md",
    defaultValue: [50],
    knobIcon: SliderDefaultKnobIcon,
    tooltip: false,
  },
};

export const MinMax = {
  args: {
    size: "md",
    defaultValue: [50],
    minValue: 20,
    maxValue: 80,
  },
};

export const Step = {
  args: {
    size: "md",
    defaultValue: [50],
    step: 10,
  },
};

export const FormatOptions = {
  args: {
    size: "md",
    defaultValue: [50],
    formatOptions: {
      style: "unit",
      unit: "celsius",
      unitDisplay: "narrow",
    },
  },
};

export const IsDisabled: Story = {
  args: { defaultValue: [50], isDisabled: true },
};
