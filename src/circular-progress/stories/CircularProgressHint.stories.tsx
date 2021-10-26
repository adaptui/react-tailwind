import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import {
  createPreviewTabs,
  createUnionControl,
} from "../../../.storybook/utils";

import js from "./templates/CircularProgressHintJsx";
import ts from "./templates/CircularProgressHintTsx";
import CircularProgressHint from "./CircularProgressHint.component";

type Meta = ComponentMeta<typeof CircularProgressHint>;
type Story = ComponentStoryObj<typeof CircularProgressHint>;

export default {
  title: "Feedback/CircularProgress/Hint",
  component: CircularProgressHint,
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
