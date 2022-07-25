import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/BadgeStackJsx";
import ts from "./templates/BadgeStackTsx";
import { BadgeStack } from "./BadgeStack.component";

type Meta = ComponentMeta<typeof BadgeStack>;
type Story = ComponentStoryObj<typeof BadgeStack>;

export default {
  title: "Primitives/Badge/Stack",
  component: BadgeStack,
  argTypes: createControls("badge", {
    ignore: ["__TYPE__", "wrapElement", "as", "ref", "prefix"],
  }),
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Stack: Story = {};
