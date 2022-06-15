import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/ButtonGroupBasicJsx";
import ts from "./templates/ButtonGroupBasicTsx";
import { ButtonGroupBasic } from "./ButtonGroupBasic.component";

type Meta = ComponentMeta<typeof ButtonGroupBasic>;
type Story = ComponentStoryObj<typeof ButtonGroupBasic>;

export default {
  title: "Primitives/ButtonGroup/Basic",
  component: ButtonGroupBasic,
  argTypes: createControls("buttonGroup", {
    ignore: ["wrapElement", "as", "ref"],
  }),
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {
  args: { size: "md", themeColor: "base", variant: "solid", type: "collapsed" },
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

export const Base: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "base" },
};
export const Primary: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "primary" },
};
export const Seconday: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "secondary" },
};
export const Success: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "success" },
};
export const Danger: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "danger" },
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
export const Ghost: Story = {
  ...Default,
  args: { ...Default.args, variant: "ghost" },
};

export const Group: Story = {
  args: { size: "md", themeColor: "base", variant: "solid", type: "group" },
};

export const Collapsed: Story = {
  args: { size: "md", themeColor: "base", variant: "solid", type: "collapsed" },
};
