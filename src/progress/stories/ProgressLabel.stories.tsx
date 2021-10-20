import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import {
  createPreviewTabs,
  createUnionControl,
} from "../../../.storybook/utils";

import js from "./templates/ProgressLabelJsx";
import ts from "./templates/ProgressLabelTsx";
import ProgressLabel from "./ProgressLabel.component";

type Meta = ComponentMeta<typeof ProgressLabel>;
type Story = ComponentStoryObj<typeof ProgressLabel>;

export default {
  title: "Feedback/Progress/Label",
  component: ProgressLabel,
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
