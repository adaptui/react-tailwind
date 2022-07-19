import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/AvatarGroupStackJsx";
import ts from "./templates/AvatarGroupStackTsx";
import { AvatarGroupStack } from "./AvatarGroupStack.component";

type Meta = ComponentMeta<typeof AvatarGroupStack>;
type Story = ComponentStoryObj<typeof AvatarGroupStack>;

export default {
  title: "Primitives/AvatarGroup/Stack",
  component: AvatarGroupStack,
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
  argTypes: createControls("avatar", {
    ignore: ["__TYPE__", "ref", "wrapElement", "as"],
  }),
} as Meta;

export const Default: Story = {};

export const MaxCount: Story = {
  args: { max: 3 },
};

export const Squared: Story = {
  args: { squared: true },
};

export const SquaredMaxCount: Story = {
  args: { squared: true, max: 4 },
};

export const ParentBackgroundMatch: Story = {
  args: {
    ringColor: "ring-red-300",
  },

  decorators: [
    Story => {
      return (
        <div className="flex h-80 w-80 items-center justify-center bg-red-300">
          <Story />
        </div>
      );
    },
  ],
};
