import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import {
  createPreviewTabs,
  createUnionControl,
} from "../../../.storybook/utils";

import js from "./templates/ProgressBasicJsx";
import ts from "./templates/ProgressBasicTsx";
import ProgressBasic from "./ProgressBasic.component";

type Meta = ComponentMeta<typeof ProgressBasic>;
type Story = ComponentStoryObj<typeof ProgressBasic>;

export default {
  title: "Feedback/Progress/Basic",
  component: ProgressBasic,
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
