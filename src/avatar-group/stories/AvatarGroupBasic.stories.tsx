import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/AvatarGroupBasicJsx";
import ts from "./templates/AvatarGroupBasicTsx";
import { AvatarGroupBasic } from "./AvatarGroupBasic.component";

type Meta = ComponentMeta<typeof AvatarGroupBasic>;
type Story = ComponentStoryObj<typeof AvatarGroupBasic>;

export default {
  title: "Primitives/AvatarGroup/Basic",
  component: AvatarGroupBasic,
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
  argTypes: createControls("avatar", {
    ignore: ["__TYPE__", "ref", "wrapElement", "as"],
  }),
} as Meta;

export const Default: Story = {
  args: { size: "xl" },
};

export const MaxCount: Story = {
  args: { size: "xl", max: 3 },
};

export const Squared: Story = {
  args: { size: "xl", squared: true },
};

export const SquaredMaxCount: Story = {
  args: { size: "xl", squared: true, max: 4 },
};

export const ParentBackgroundMatch: Story = {
  args: {
    size: "xl",
    ringColor: "ring-orange-300",
  },

  decorators: [
    Story => {
      return (
        <div className="flex h-80 w-80 items-center justify-center bg-orange-300">
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
