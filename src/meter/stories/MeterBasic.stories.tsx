import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import {
  createPreviewTabs,
  createUnionControl,
} from "../../../.storybook/utils";

import js from "./templates/MeterBasicJsx";
import ts from "./templates/MeterBasicTsx";
import MeterBasic from "./MeterBasic.component";

type Meta = ComponentMeta<typeof MeterBasic>;
type Story = ComponentStoryObj<typeof MeterBasic>;

export default {
  title: "Feedback/Meter/Basic",
  component: MeterBasic,
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
