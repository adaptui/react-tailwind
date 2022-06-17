import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/CheckboxStackJsx";
import ts from "./templates/CheckboxStackTsx";
import { CheckboxStack } from "./CheckboxStack.component";

type Meta = ComponentMeta<typeof CheckboxStack>;
type Story = ComponentStoryObj<typeof CheckboxStack>;

export default {
  title: "Forms/Checkbox/Stack",
  component: CheckboxStack,
  argTypes: {
    label: { control: { type: "text" } },
    description: { control: { type: "text" } },
    ...createControls("checkbox", {
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
        "isUnchecked",
        "isIndeterminate",
        "stack",
        "maxVisibleItems",
        "value",
        "label",
        "description",
        "themeColor",
      ],
    }),
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

export const DisabledStack: Story = {
  args: { disabled: true },
};

export const DisabledLabel: Story = {
  args: { disabled: true, label: "Checkbox" },
};

export const DisabledDescription: Story = {
  args: {
    disabled: true,
    label: "Checkbox",
    description:
      "Used when the checkbox is selected and will use its value for the form submission.",
  },
};
