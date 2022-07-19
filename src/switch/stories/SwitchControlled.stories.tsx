import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/SwitchControlledJsx";
import ts from "./templates/SwitchControlledTsx";
import { SwitchControlled } from "./SwitchControlled.component";

type Meta = ComponentMeta<typeof SwitchControlled>;
type Story = ComponentStoryObj<typeof SwitchControlled>;

export default {
  title: "Forms/Switch/Controlled",
  component: SwitchControlled,
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Controlled: Story = {};
