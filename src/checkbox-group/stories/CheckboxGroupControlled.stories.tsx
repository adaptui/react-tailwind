import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/CheckboxGroupControlledJsx";
import ts from "./templates/CheckboxGroupControlledTsx";
import { CheckboxGroupControlled } from "./CheckboxGroupControlled.component";

type Meta = ComponentMeta<typeof CheckboxGroupControlled>;
type Story = ComponentStoryObj<typeof CheckboxGroupControlled>;

export default {
  title: "Forms/CheckboxGroup/Controlled",
  component: CheckboxGroupControlled,
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Controlled: Story = {};
