import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/SwitchStackJsx";
import ts from "./templates/SwitchStackTsx";
import { SwitchStack } from "./SwitchStack.component";

type Meta = ComponentMeta<typeof SwitchStack>;
type Story = ComponentStoryObj<typeof SwitchStack>;

export default {
  title: "Forms/Switch/Stack",
  component: SwitchStack,
  argTypes: {
    label: { control: { type: "text" } },
    description: { control: { type: "text" } },
    ...createControls("checkbox", {
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
    disabled: { table: { disable: false } },
    size: { table: { disable: true } },
  },
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {};

export const Label: Story = {
  args: { label: "Switch" },
};

export const Description: Story = {
  args: {
    label: "Switch",
    description:
      "Used when the checkbox is selected and will use its value for the form submission.",
  },
};

export const DisabledStack: Story = {
  args: { disabled: true },
};

export const DisabledLabel: Story = {
  args: { disabled: true, label: "Switch" },
};

export const DisabledDescription: Story = {
  args: {
    disabled: true,
    label: "Switch",
    description:
      "Used when the checkbox is selected and will use its value for the form submission.",
  },
};
