import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { SlotIcon } from "../..";

import js from "./templates/BadgeStackJsx";
import ts from "./templates/BadgeStackTsx";
import { BadgeStack } from "./BadgeStack.component";

type Meta = ComponentMeta<typeof BadgeStack>;
type Story = ComponentStoryObj<typeof BadgeStack>;

export default {
  title: "Primitives/Badge/Stack",
  component: BadgeStack,
  argTypes: createControls(undefined, {
    ignore: [
      "unstable_system",
      "unstable_clickOnEnter",
      "unstable_clickOnSpace",
      "wrapElement",
      "focusable",
      "as",
    ],
  }),
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {};
export const Prefix: Story = {
  args: { prefix: <SlotIcon /> },
};
