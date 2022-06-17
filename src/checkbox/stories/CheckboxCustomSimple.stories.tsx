import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/CheckboxCustomSimpleJsx";
import ts from "./templates/CheckboxCustomSimpleTsx";
import { CheckboxCustomSimple } from "./CheckboxCustomSimple.component";

type Meta = ComponentMeta<typeof CheckboxCustomSimple>;
type Story = ComponentStoryObj<typeof CheckboxCustomSimple>;

export default {
  title: "Forms/Checkbox/CustomSimple",
  component: CheckboxCustomSimple,
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const CustomSimple: Story = {};
