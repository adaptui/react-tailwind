import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/ShowMoreHorizontalJsx";
import ts from "./templates/ShowMoreHorizontalTsx";
import { ShowMoreHorizontal } from "./ShowMoreHorizontal.component";

type Meta = ComponentMeta<typeof ShowMoreHorizontal>;
type Story = ComponentStoryObj<typeof ShowMoreHorizontal>;

export default {
  title: "Feedback/ShowMore/Horizontal",
  component: ShowMoreHorizontal,
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Horizontal: Story = {
  args: { direction: "horizontal" },
};
