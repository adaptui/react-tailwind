import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/CheckboxCustomAdvancedJsx";
import ts from "./templates/CheckboxCustomAdvancedTsx";
import { CheckboxCustomAdvanced } from "./CheckboxCustomAdvanced.component";

type Meta = ComponentMeta<typeof CheckboxCustomAdvanced>;
type Story = ComponentStoryObj<typeof CheckboxCustomAdvanced>;

export default {
  title: "Forms/Checkbox/CustomAdvanced",
  component: CheckboxCustomAdvanced,
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const CustomAdvanced: Story = {};
