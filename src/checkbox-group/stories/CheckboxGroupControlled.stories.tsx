import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/CheckboxGroupControlledJsx";
import ts from "./templates/CheckboxGroupControlledTsx";
import { CheckboxGroupControlled } from "./CheckboxGroupControlled.component";

type Meta = ComponentMeta<typeof CheckboxGroupControlled>;
type Story = ComponentStoryObj<typeof CheckboxGroupControlled>;

export default {
  title: "Forms/CheckboxGroup/Controlled",
  component: CheckboxGroupControlled,
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
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {};
