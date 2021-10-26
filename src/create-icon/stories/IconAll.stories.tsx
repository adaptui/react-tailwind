import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/IconAllJsx";
import ts from "./templates/IconAllTsx";
import { Icon } from "./IconAll.component";

type Meta = ComponentMeta<typeof Icon>;
type Story = ComponentStoryObj<typeof Icon>;

export default {
  title: "Primitives/Icons/All",
  component: Icon,
  argTypes: createControls("icon", {
    ignore: ["unstable_system", "wrapElement", "as"],
  }),
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {};
