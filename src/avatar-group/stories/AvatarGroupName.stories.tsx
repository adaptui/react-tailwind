import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/AvatarGroupNameJsx";
import ts from "./templates/AvatarGroupNameTsx";
import { AvatarGroupName } from "./AvatarGroupName.component";

type Meta = ComponentMeta<typeof AvatarGroupName>;
type Story = ComponentStoryObj<typeof AvatarGroupName>;

export default {
  title: "Primitives/AvatarGroup/Name",
  component: AvatarGroupName,
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
  argTypes: createControls("avatar", {
    ignore: ["unstable_system", "wrapElement", "as"],
  }),
} as Meta;

export const Default: Story = {
  args: { size: "xl" },
};

export const MaxCount: Story = {
  args: { size: "xl", max: 3 },
};

export const Squared: Story = {
  args: { size: "xl", circular: false },
};

export const SquaredMaxCount: Story = {
  args: { size: "xl", circular: false, max: 4 },
};

export const ParentBackgroundMatch: Story = {
  args: {
    size: "xl",
    ringColor: "ring-yellow-200",
  },

  decorators: [
    Story => {
      return (
        <div className="flex items-center justify-center bg-yellow-200 w-80 h-80">
          <Story />
        </div>
      );
    },
  ],
};

export const ExtraSmall: Story = { args: { size: "xs", max: 4 } };
export const Small: Story = { args: { size: "sm", max: 4 } };
export const Medium: Story = { args: { size: "md", max: 4 } };
export const Large: Story = { args: { size: "lg", max: 4 } };
export const ExtraLarge: Story = { args: { size: "xl", max: 4 } };
export const ExtraExtraLarge: Story = { args: { size: "2xl", max: 4 } };
export const ExtraExtraExtraLarge: Story = { args: { size: "3xl", max: 4 } };
