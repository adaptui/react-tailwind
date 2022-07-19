import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/ShowMoreVerticalJsx";
import ts from "./templates/ShowMoreVerticalTsx";
import { ShowMoreVertical } from "./ShowMoreVertical.component";

type Meta = ComponentMeta<typeof ShowMoreVertical>;
type Story = ComponentStoryObj<typeof ShowMoreVertical>;

export default {
  title: "Feedback/ShowMore/Vertical",
  component: ShowMoreVertical,
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Vertical: Story = {
  args: { direction: "vertical" },
};
