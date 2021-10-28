import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import {
  createPreviewTabs,
  createUnionControl,
} from "../../../.storybook/utils";

import js from "./templates/MeterLabelJsx";
import ts from "./templates/MeterLabelTsx";
import MeterLabel from "./MeterLabel.component";

type Meta = ComponentMeta<typeof MeterLabel>;
type Story = ComponentStoryObj<typeof MeterLabel>;

export default {
  title: "Feedback/Meter/Label",
  component: MeterLabel,
  argTypes: {
    size: createUnionControl(["sm", "md", "lg", "xl"]),
  },
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Small: Story = { args: { size: "sm" } };
export const Medium: Story = { args: { size: "md" } };
export const Large: Story = { args: { size: "lg" } };
export const ExtraLarge: Story = { args: { size: "xl" } };
