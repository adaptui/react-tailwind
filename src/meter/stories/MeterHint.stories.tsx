import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import {
  createPreviewTabs,
  createUnionControl,
} from "../../../.storybook/utils";

import js from "./templates/MeterHintJsx";
import ts from "./templates/MeterHintTsx";
import MeterHint from "./MeterHint.component";

type Meta = ComponentMeta<typeof MeterHint>;
type Story = ComponentStoryObj<typeof MeterHint>;

export default {
  title: "Feedback/Meter/Hint",
  component: MeterHint,
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
