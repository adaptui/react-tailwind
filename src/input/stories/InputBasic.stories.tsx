import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { CaretDownIcon, ClockIcon } from "../../icons";

import js from "./templates/InputBasicJsx";
import ts from "./templates/InputBasicTsx";
import { InputBasic } from "./InputBasic.component";

type Meta = ComponentMeta<typeof InputBasic>;
type Story = ComponentStoryObj<typeof InputBasic>;

export default {
  title: "Forms/Input/Basic",
  component: InputBasic,
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

export const WithPlaceholder: Story = {
  args: { placeholder: "Search" },
};

export const Small: Story = {
  args: { size: "sm", placeholder: "Search" },
};

export const Medium: Story = {
  args: { size: "md", placeholder: "Search" },
};

export const Large: Story = {
  args: { size: "lg", placeholder: "Search" },
};

export const ExtraLarge: Story = {
  args: { size: "xl", placeholder: "Search" },
};

export const Outline: Story = {
  args: { variant: "outline", placeholder: "Search" },
};

export const Subtle: Story = {
  args: { variant: "subtle", placeholder: "Search" },
};

export const Underline: Story = {
  args: { variant: "underline", placeholder: "Search" },
};

export const Ghost: Story = {
  args: { variant: "ghost", placeholder: "Search" },
};

export const Disabled: Story = {
  args: { placeholder: "Search", disabled: true },
};

export const Invalid: Story = {
  args: { placeholder: "Search", invalid: true },
};

export const Prefix: Story = {
  args: {
    placeholder: "Search",
    prefix: <ClockIcon />,
  },
};

export const Suffix: Story = {
  args: {
    placeholder: "Search",
    suffix: <CaretDownIcon />,
  },
};

export const PrefixSuffix: Story = {
  args: {
    placeholder: "Search",
    prefix: <ClockIcon />,
    suffix: <CaretDownIcon />,
  },
};

export const Loading: Story = {
  args: { placeholder: "Search", loading: true },
};
