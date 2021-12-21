import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { SliderDefaultKnobIcon } from "../SliderState";

import js from "./templates/SliderRangeJsx";
import ts from "./templates/SliderRangeTsx";
import { SliderRange } from "./SliderRange.component";

type Meta = ComponentMeta<typeof SliderRange>;
type Story = ComponentStoryObj<typeof SliderRange>;

export default {
  title: "Forms/Slider/Range",
  component: SliderRange,
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
  args: { size: "sm", defaultValue: [25, 75] },
};

export const Medium: Story = {
  args: { size: "md", defaultValue: [25, 75] },
};

export const Large: Story = {
  args: { size: "lg", defaultValue: [25, 75] },
};

export const KnobIcon: Story = {
  args: { size: "md", defaultValue: [25, 75], knobIcon: SliderDefaultKnobIcon },
};

export const MinMax = {
  args: {
    size: "md",
    defaultValue: [25, 75],
    minValue: 20,
    maxValue: 80,
  },
};

export const Step = {
  args: {
    size: "md",
    defaultValue: [25, 75],
    step: 10,
  },
};

export const FormatOptions = {
  args: {
    size: "md",
    defaultValue: [25, 75],
    formatOptions: {
      style: "unit",
      unit: "celsius",
      unitDisplay: "narrow",
    },
  },
};

export const IsDisabled: Story = {
  args: { size: "md", defaultValue: [25, 75], isDisabled: true },
};
