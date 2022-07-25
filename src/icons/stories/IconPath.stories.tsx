import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/IconPathJsx";
import ts from "./templates/IconPathTsx";
import { IconPath } from "./IconPath.component";

type Meta = ComponentMeta<typeof IconPath>;
type Story = ComponentStoryObj<typeof IconPath>;

export default {
  title: "Primitives/Icons/Path",
  component: IconPath,
  argTypes: createControls("icon", {
    ignore: ["__TYPE__", "ref", "wrapElement", "as"],
  }),
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Path: Story = {};
