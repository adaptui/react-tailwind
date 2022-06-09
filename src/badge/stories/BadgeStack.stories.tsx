import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createPreviewTabs } from "../../../.storybook/utils";
import { SlotIcon } from "../..";

import js from "./templates/BadgeStackJsx";
import ts from "./templates/BadgeStackTsx";
import { BadgeStack } from "./BadgeStack.component";

type Meta = ComponentMeta<typeof BadgeStack>;
type Story = ComponentStoryObj<typeof BadgeStack>;

export default {
  title: "Primitives/Badge/Stack",
  component: BadgeStack,
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {};
export const Prefix: Story = {
  args: { prefix: <SlotIcon /> },
};
