import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/IconAllJsx";
import ts from "./templates/IconAllTsx";
import { IconAll } from "./IconAll.component";

type Meta = ComponentMeta<typeof IconAll>;
type Story = ComponentStoryObj<typeof IconAll>;

export default {
  title: "Primitives/Icons/AllIcons",
  component: IconAll,
  argTypes: createControls("icon", {
    ignore: ["ref", "wrapElement", "as"],
  }),
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const AllIcons: Story = {};
