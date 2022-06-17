import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/RadioGroupControlledJsx";
import ts from "./templates/RadioGroupControlledTsx";
import { RadioGroupControlled } from "./RadioGroupControlled.component";

type Meta = ComponentMeta<typeof RadioGroupControlled>;
type Story = ComponentStoryObj<typeof RadioGroupControlled>;

export default {
  title: "Forms/RadioGroup/Controlled",
  component: RadioGroupControlled,
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Controlled: Story = {};
