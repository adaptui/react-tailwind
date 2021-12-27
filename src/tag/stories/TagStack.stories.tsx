import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { SlotIcon } from "../../icons";

import js from "./templates/TagStackJsx";
import ts from "./templates/TagStackTsx";
import { TagStack } from "./TagStack.component";

type Meta = ComponentMeta<typeof TagStack>;
type Story = ComponentStoryObj<typeof TagStack>;

export default {
  title: "Primitives/Tag/Stack",
  component: TagStack,
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

export const PrefixStack: Story = {
  ...Default,
  args: { prefix: <SlotIcon /> },
};

export const ClosableStack: Story = {
  ...Default,
  args: {
    closable: true,
  },
};

export const DisabledStack: Story = {
  ...Default,
  args: {
    closable: true,
    disabled: true,
  },
};
