import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { SlotIcon } from "../../icons";

import js from "./templates/SelectBasicJsx";
import ts from "./templates/SelectBasicTsx";
import { SelectBasic } from "./SelectBasic.component";

type Meta = ComponentMeta<typeof SelectBasic>;
type Story = ComponentStoryObj<typeof SelectBasic>;

export default {
  title: "Forms/Select/Basic",
  component: SelectBasic,
  argTypes: {
    ...createControls("select", {
      ignore: [
        "ref",
        "wrapElement",
        "as",
        "prefix",
        "suffix",
        "spinner",
        "autoFocus",
        "focusable",
        "accessibleWhenDisabled",
        "onFocusVisible",
        "clickOnEnter",
        "clickOnSpace",
      ],
    }),
  },
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {
  args: { size: "md", variant: "outline" },
};

export const WithPlaceholder: Story = {
  ...Default,
  args: { ...Default.args, placeholder: "Search" },
};

export const Small: Story = {
  ...Default,
  args: { ...Default.args, size: "sm", placeholder: "Search" },
};

export const Medium: Story = {
  ...Default,
  args: { ...Default.args, size: "md", placeholder: "Search" },
};

export const Large: Story = {
  ...Default,
  args: { ...Default.args, size: "lg", placeholder: "Search" },
};

export const ExtraLarge: Story = {
  ...Default,
  args: { ...Default.args, size: "xl", placeholder: "Search" },
};

export const Outline: Story = {
  ...Default,
  args: { ...Default.args, variant: "outline", placeholder: "Search" },
};

export const Subtle: Story = {
  ...Default,
  args: { ...Default.args, variant: "subtle", placeholder: "Search" },
};

export const Underline: Story = {
  ...Default,
  args: { ...Default.args, variant: "underline", placeholder: "Search" },
};

export const Ghost: Story = {
  ...Default,
  args: { ...Default.args, variant: "ghost", placeholder: "Search" },
};

export const Disabled: Story = {
  ...Default,
  args: { ...Default.args, placeholder: "Search", disabled: true },
};

export const Invalid: Story = {
  ...Default,
  args: { ...Default.args, placeholder: "Search", invalid: true },
};

export const Prefix: Story = {
  ...Default,
  args: { ...Default.args, placeholder: "Search", prefix: <SlotIcon /> },
};

export const Suffix: Story = {
  ...Default,
  args: { ...Default.args, placeholder: "Search", suffix: <SlotIcon /> },
};

export const PrefixSuffix: Story = {
  ...Default,
  args: {
    ...Default.args,
    placeholder: "Search",
    prefix: <SlotIcon />,
    suffix: <SlotIcon />,
  },
};

export const Loading: Story = {
  ...Default,
  args: { ...Default.args, placeholder: "Search", loading: true },
};
