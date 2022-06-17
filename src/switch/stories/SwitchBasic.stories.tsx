import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/SwitchBasicJsx";
import ts from "./templates/SwitchBasicTsx";
import { SwitchBasic } from "./SwitchBasic.component";

type Meta = ComponentMeta<typeof SwitchBasic>;
type Story = ComponentStoryObj<typeof SwitchBasic>;

export default {
  title: "Forms/Switch/Basic",
  component: SwitchBasic,
  argTypes: {
    label: { control: { type: "text" } },
    description: { control: { type: "text" } },
    ...createControls("switch", {
      unions: ["themeColor"],
      ignore: [
        "wrapElement",
        "as",
        "ref",
        "defaultValue",
        "setValue",
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
  args: { size: "md", themeColor: "base", defaultValue: false },
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

export const UnChecked: Story = { ...Default };
export const Checked: Story = {
  ...Default,
  args: { ...Default.args, defaultValue: true },
};
export const Indeterminate: Story = {
  ...Default,
  args: { ...Default.args, defaultValue: "mixed" },
};

export const Label: Story = {
  ...Default,
  args: { ...Default.args, label: "Switchs" },
};

export const MultilineLabel: Story = {
  ...Default,
  args: {
    ...Default.args,
    label:
      "Used when the Switch is selected and will use its value for the form submission.",
    className: "w-72",
  },
};

export const Description: Story = {
  ...Default,
  args: {
    ...Default.args,
    label: "Switch",
    description:
      "Used when the Switch is selected and will use its value for the form submission.",
  },
};

export const Disabled: Story = {
  ...Default,
  args: { ...Default.args, disabled: true },
};

export const DisabledLabel: Story = {
  ...Default,
  args: { ...Default.args, label: "Switch", disabled: true },
};

export const DisabledDescription: Story = {
  ...Default,
  args: {
    ...Default.args,
    label: "Switch",
    disabled: true,
    description:
      "Used when the switch is selected and will use its value for the form submission.",
  },
};
