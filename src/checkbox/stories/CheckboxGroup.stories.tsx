import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/CheckboxGroupJsx";
import ts from "./templates/CheckboxGroupTsx";
import { CheckboxGroup } from "./CheckboxGroup.component";

type Meta = ComponentMeta<typeof CheckboxGroup>;
type Story = ComponentStoryObj<typeof CheckboxGroup>;

export default {
  title: "Forms/Checkbox/Group",
  component: CheckboxGroup,
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
    preview: createPreviewTabs({ js, ts }),
    options: { showPanel: true },
  },
} as Meta;

export const Default: Story = {};

export const ShowMoreDefault: Story = {
  args: { maxVisibleItems: 3 },
};

export const Horizontal: Story = {
  args: { stack: "horizontal" },
};

export const ShowMoreHorizontal: Story = {
  args: { stack: "horizontal", maxVisibleItems: 3 },
};
