import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/RadioStackJsx";
import ts from "./templates/RadioStackTsx";
import { RadioStack } from "./RadioStack.component";

type Meta = ComponentMeta<typeof RadioStack>;
type Story = ComponentStoryObj<typeof RadioStack>;

export default {
  title: "Forms/Radio/Stack",
  component: RadioStack,
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
  args: { label: "Apple" },
};

export const Description: Story = {
  args: {
    label: "Apple",
    description:
      "Used when the radio is selected and will use its value for the form submission.",
  },
};

export const DisabledStack: Story = {
  args: { disabled: true },
};

export const DisabledLabel: Story = {
  args: { disabled: true, label: "Apple" },
};

export const DisabledDescription: Story = {
  args: {
    disabled: true,
    label: "Apple",
    description:
      "Used when the Radio is selected and will use its value for the form submission.",
  },
};
