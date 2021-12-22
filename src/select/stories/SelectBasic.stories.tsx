import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { CaretDownIcon, ClockIcon } from "../../icons";

import js from "./templates/SelectBasicJsx";
import ts from "./templates/SelectBasicTsx";
import { SelectBasic } from "./SelectBasic.component";

type Meta = ComponentMeta<typeof SelectBasic>;
type Story = ComponentStoryObj<typeof SelectBasic>;

export default {
  title: "Forms/Select/Basic",
  component: SelectBasic,
  argTypes: {
    label: { control: { type: "text" } },
    description: { control: { type: "text" } },
    ...createControls(undefined, {
      ignore: [
        "unstable_system",
        "unstable_clickOnEnter",
        "unstable_clickOnSpace",
        "wrapElement",
        "focusable",
        "as",
        "setState",
        "checked",
        "value",
        "defaultState",
        "state",
        "onStateChange",
        "icon",
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
  args: {},
};

export const Small: Story = {
  args: { size: "sm" },
};

export const Medium: Story = {
  args: { size: "md" },
};

export const Large: Story = {
  args: { size: "lg" },
};

export const ExtraLarge: Story = {
  args: { size: "xl" },
};

export const Outline: Story = {
  args: { variant: "outline" },
};

export const Subtle: Story = {
  args: { variant: "subtle" },
};

export const Underline: Story = {
  args: { variant: "underline" },
};

export const Ghost: Story = {
  args: { variant: "ghost" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Prefix: Story = {
  args: {
    prefix: <ClockIcon />,
  },
};

export const Suffix: Story = {
  args: {
    suffix: <CaretDownIcon />,
  },
};

export const PrefixSuffix: Story = {
  args: {
    prefix: <ClockIcon />,
    suffix: <CaretDownIcon />,
  },
};
