import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { SlotIcon } from "../../index";

import js from "./templates/TagBasicJsx";
import ts from "./templates/TagBasicTsx";
import { TagBasic } from "./TagBasic.component";

type Meta = ComponentMeta<typeof TagBasic>;
type Story = ComponentStoryObj<typeof TagBasic>;

export default {
  title: "Primitives/Tag/Basic",
  component: TagBasic,
  argTypes: createControls("tag", {
    unions: ["themeColor"],
    ignore: [
      "__TYPE__",
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
  ...Default,
  args: { ...Default.args, prefix: <SlotIcon /> },
};

export const Closable: Story = {
  ...Default,
  args: {
    ...Default.args,
    closable: true,
  },
};

export const Suffix: Story = {
  ...Default,
  args: { ...Default.args, closable: true, suffix: <SlotIcon /> },
};

export const Disabled: Story = {
  ...Default,
  args: {
    ...Default.args,
    prefix: <SlotIcon />,
    suffix: <SlotIcon />,
    disabled: true,
    closable: true,
  },
};
