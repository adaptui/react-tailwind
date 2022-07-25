import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/RadioBasicJsx";
import ts from "./templates/RadioBasicTsx";
import { RadioBasic } from "./RadioBasic.component";

type Meta = ComponentMeta<typeof RadioBasic>;
type Story = ComponentStoryObj<typeof RadioBasic>;

export default {
  title: "Forms/Radio/Basic",
  component: RadioBasic,
  argTypes: {
    label: { control: { type: "text" } },
    description: { control: { type: "text" } },
    ...createControls("radio", {
      unions: ["themeColor"],
      ignore: [
        "__TYPE__",
        "wrapElement",
        "as",
        "ref",
        "defaultValue",
        "setValue",
        "value",
        "state",
        "inputValue",
        "onChange",
        "icon",
        "defaultChecked",
        "checked",
        "focusable",
        "autoFocus",
        "onFocusVisible",
        "accessibleWhenDisabled",
        "clickOnEnter",
        "clickOnSpace",
        "isChecked",
        "stack",
        "maxVisibleItems",
        "items",
        "setItems",
        "orientation",
        "virtualFocus",
        "rtl",
        "focusLoop",
        "focusWrap",
        "focusShift",
        "moves",
        "includesBaseElement",
        "activeId",
        "defaultActiveId",
        "setMoves",
        "setActiveId",
        "shouldRegisterItem",
        "getItem",
        "rowId",
        "preventScrollOnKeyDown",
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
  args: { size: "md", themeColor: "base" },
};

export const WithDefaultState: Story = {
  ...Default,
  args: { ...Default.args, defaultValue: "apple" },
};

export const Small: Story = {
  ...Default,
  args: { ...Default.args, size: "sm" },
};
export const Medium: Story = {
  ...Default,
  args: { ...Default.args, size: "md" },
};
export const Large: Story = {
  ...Default,
  args: { ...Default.args, size: "lg" },
};

export const Base: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "base" },
};
export const Primary: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "primary" },
};
export const Danger: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "danger" },
};

export const Label: Story = {
  ...Default,
  args: { ...Default.args, label: "Radios" },
};

export const MultilineLabel: Story = {
  ...Default,
  args: {
    ...Default.args,
    label:
      "Used when the Radio is selected and will use its value for the form submission.",
    className: "w-72",
  },
};

export const Description: Story = {
  ...Default,
  args: {
    ...Default.args,
    label: "Radio",
    description:
      "Used when the Radio is selected and will use its value for the form submission.",
  },
};

export const Disabled: Story = {
  ...Default,
  args: { ...Default.args, disabled: true },
};

export const DisabledLabel: Story = {
  ...Default,
  args: { ...Default.args, label: "Radio", disabled: true },
};

export const DisabledDescription: Story = {
  ...Default,
  args: {
    ...Default.args,
    label: "Radio",
    disabled: true,
    description:
      "Used when the radio is selected and will use its value for the form submission.",
  },
};
