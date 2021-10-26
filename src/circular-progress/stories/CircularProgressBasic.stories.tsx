import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import {
  createPreviewTabs,
  createUnionControl,
} from "../../../.storybook/utils";

import js from "./templates/CircularProgressBasicJsx";
import ts from "./templates/CircularProgressBasicTsx";
import CircularProgressBasic from "./CircularProgressBasic.component";

type Meta = ComponentMeta<typeof CircularProgressBasic>;
type Story = ComponentStoryObj<typeof CircularProgressBasic>;

export default {
  title: "Feedback/CircularProgress/Basic",
  component: CircularProgressBasic,
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
