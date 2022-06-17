import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/CheckboxGroupBasicJsx";
import ts from "./templates/CheckboxGroupBasicTsx";
import { CheckboxGroupBasic } from "./CheckboxGroupBasic.component";

type Meta = ComponentMeta<typeof CheckboxGroupBasic>;
type Story = ComponentStoryObj<typeof CheckboxGroupBasic>;

export default {
  title: "Forms/CheckboxGroup/Basic",
  component: CheckboxGroupBasic,
  argTypes: {
    label: { control: { type: "text" } },
    description: { control: { type: "text" } },
    ...createControls("checkbox", {
      unions: ["themeColor"],
      ignore: [
        "wrapElement",
        "as",
        "ref",
        "focusable",
        "defaultValue",
        "setValue",
        "state",
        "defaultChecked",
        "checked",
        "onChange",
        "icon",
        "autoFocus",
        "accessibleWhenDisabled",
        "onFocusVisible",
        "isChecked",
        "isUnchecked",
        "isIndeterminate",
        "clickOnEnter",
        "clickOnSpace",
        "inputValue",
        "withState",
        "label",
        "description",
        "value",
        "stack",
      ],
    }),
  },
  parameters: {
    layout: "centered",
    preview: createPreviewTabs({ js, ts }),
    options: { showPanel: true },
  },
} as Meta;

export const Default: Story = {
  args: { size: "md", themeColor: "base", maxVisibleItems: null },
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

export const ShowMoreDefault: Story = {
  args: { maxVisibleItems: 3 },
};

export const Horizontal: Story = {
  args: { stack: "horizontal" },
};

export const ShowMoreHorizontal: Story = {
  args: { stack: "horizontal", maxVisibleItems: 3 },
};
