import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { SlotIcon } from "../../icons";

import js from "./templates/TagBasicJsx";
import ts from "./templates/TagBasicTsx";
import { TagBasic } from "./TagBasic.component";

type Meta = ComponentMeta<typeof TagBasic>;
type Story = ComponentStoryObj<typeof TagBasic>;

export default {
  title: "Primitives/Tag/Basic",
  component: TagBasic,
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
  argTypes: createControls("badge", {
    ignore: ["unstable_system", "wrapElement", "as"],
  }),
} as Meta;

export const Default: Story = {
  args: {
    size: "md",
    variant: "solid",
  },
};

export const Small: Story = {
  ...Default,
  args: { ...Default.args, size: "sm" },
};
export const Medium: Story = { ...Default };
export const Large: Story = {
  ...Default,
  args: { ...Default.args, size: "lg" },
};
export const ExtraLarge: Story = {
  ...Default,
  args: { ...Default.args, size: "xl" },
};

export const Solid: Story = { ...Default };
export const Subtle: Story = {
  ...Default,
  args: { ...Default.args, variant: "subtle" },
};
export const Outline: Story = {
  ...Default,
  args: { ...Default.args, variant: "outline" },
};

export const Prefix: Story = {
  args: {
    size: "md",
    variant: "solid",
    prefix: <SlotIcon />,
  },
};

export const Closable: Story = {
  args: {
    size: "md",
    variant: "solid",
    closable: true,
  },
};

export const Disabled: Story = {
  args: {
    size: "md",
    variant: "solid",
    closable: true,
    disabled: true,
  },
};
