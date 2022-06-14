import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/ButtonCloseJsx";
import ts from "./templates/ButtonCloseTsx";
import { ButtonClose } from "./ButtonClose.component";

type Meta = ComponentMeta<typeof ButtonClose>;
type Story = ComponentStoryObj<typeof ButtonClose>;

export default {
  title: "Primitives/Button/Close",
  component: ButtonClose,
  argTypes: createControls("button", {
    ignore: [
      "wrapElement",
      "as",
      "ref",
      "autoFocus",
      "focusable",
      "accessibleWhenDisabled",
      "onFocusVisible",
      "clickOnEnter",
      "clickOnSpace",
      "prefix",
      "suffix",
      "iconOnly",
      "spinner",
    ],
  }),
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {
  args: { size: "md", variant: "solid", themeColor: "base" },
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
