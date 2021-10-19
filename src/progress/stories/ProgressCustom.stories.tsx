import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import {
  createPreviewTabs,
  createUnionControl,
} from "../../../.storybook/utils";

import js from "./templates/ProgressCustomJsx";
import ts from "./templates/ProgressCustomTsx";
import ProgressCustom from "./ProgressCustom.component";

type Meta = ComponentMeta<typeof ProgressCustom>;
type Story = ComponentStoryObj<typeof ProgressCustom>;

export default {
  title: "Feedback/Progress/Custom",
  component: ProgressCustom,
  argTypes: {
    size: createUnionControl(["sm", "md", "lg", "xl"]),
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Small: Story = { args: { size: "sm" } };
export const Medium: Story = { args: { size: "md" } };
export const Large: Story = { args: { size: "lg" } };
export const ExtraLarge: Story = { args: { size: "xl" } };
