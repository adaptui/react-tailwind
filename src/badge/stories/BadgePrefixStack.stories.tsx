import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/BadgePrefixStackJsx";
import ts from "./templates/BadgePrefixStackTsx";
import { BadgePrefixStack } from "./BadgePrefixStack.component";

type Meta = ComponentMeta<typeof BadgePrefixStack>;
type Story = ComponentStoryObj<typeof BadgePrefixStack>;

export default {
  title: "Primitives/Badge/Stack/Prefix",
  component: BadgePrefixStack,
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Prefix: Story = {};
