import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import {
  createPreviewTabs,
  createUnionControl,
} from "../../../.storybook/utils";

import js from "./templates/CircularProgressCustomJsx";
import ts from "./templates/CircularProgressCustomTsx";
import CircularProgressCustom from "./CircularProgressCustom.component";

type Meta = ComponentMeta<typeof CircularProgressCustom>;
type Story = ComponentStoryObj<typeof CircularProgressCustom>;

export default {
  title: "Feedback/CircularProgress/Custom",
  component: CircularProgressCustom,
  argTypes: {
    size: createUnionControl(["sm", "md", "lg", "xl"]),
  },
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Small: Story = { args: { size: "sm" } };
export const Medium: Story = { args: { size: "md" } };
export const Large: Story = { args: { size: "lg" } };
export const ExtraLarge: Story = { args: { size: "xl" } };
