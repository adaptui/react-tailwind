import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/CheckboxGroupStackJsx";
import ts from "./templates/CheckboxGroupStackTsx";
import { CheckboxGroupStack } from "./CheckboxGroupStack.component";

type Meta = ComponentMeta<typeof CheckboxGroupStack>;
type Story = ComponentStoryObj<typeof CheckboxGroupStack>;

export default {
  title: "Forms/CheckboxGroup/Stack",
  component: CheckboxGroupStack,
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
  args: { label: "Checkbox" },
};

export const Description: Story = {
  args: {
    label: "Checkbox",
    description:
      "Used when the checkbox is selected and will use its value for the form submission.",
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledLabel: Story = {
  args: { label: "Checkbox", disabled: true },
};

export const DisabledDescription: Story = {
  args: {
    label: "Checkbox",
    disabled: true,
    description:
      "Used when the checkbox is selected and will use its value for the form submission.",
  },
};
