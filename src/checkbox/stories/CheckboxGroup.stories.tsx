import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/CheckboxGroupJsx";
import ts from "./templates/CheckboxGroupTsx";
import { CheckboxGroup } from "./CheckboxGroup.component";

type Meta = ComponentMeta<typeof CheckboxGroup>;
type Story = ComponentStoryObj<typeof CheckboxGroup>;

export default {
  title: "Forms/Checkbox/Stack",
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
  },
  parameters: {
    layout: "centered",
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {
  argTypes: {
    disabled: { table: { disable: false } },
    size: { table: { disable: true } },
  },
  parameters: { options: { showPanel: true } },
};

export const GroupDefault: Story = {
  args: { size: "md", stack: "vertical" },
  parameters: { options: { showPanel: true } },
};

export const GroupDefaultShowMore: Story = {
  args: { size: "md", stack: "vertical", maxVisibleItems: 3 },
  parameters: { options: { showPanel: true } },
};

export const GroupHorizontal: Story = {
  args: { size: "md", stack: "horizontal" },
  parameters: { options: { showPanel: true } },
};

export const GroupHorizontalShowMore: Story = {
  args: { size: "md", stack: "horizontal", maxVisibleItems: 3 },
  parameters: { options: { showPanel: true } },
};
