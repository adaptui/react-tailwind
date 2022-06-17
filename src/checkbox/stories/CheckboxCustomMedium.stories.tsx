import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/CheckboxCustomMediumJsx";
import ts from "./templates/CheckboxCustomMediumTsx";
import { CheckboxCustomMedium } from "./CheckboxCustomMedium.component";

type Meta = ComponentMeta<typeof CheckboxCustomMedium>;
type Story = ComponentStoryObj<typeof CheckboxCustomMedium>;

export default {
  title: "Forms/Checkbox/CustomMedium",
  component: CheckboxCustomMedium,
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const CustomMedium: Story = {};
