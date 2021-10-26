import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/SwitchControlledJsx";
import ts from "./templates/SwitchControlledTsx";
import { SwitchControlled } from "./SwitchControlled.component";

type Meta = ComponentMeta<typeof SwitchControlled>;
type Story = ComponentStoryObj<typeof SwitchControlled>;

export default {
  title: "Forms/Switch/Controlled",
  component: SwitchControlled,
  argTypes: {
    label: { control: { type: "text" } },
    description: { control: { type: "text" } },
    ...createControls("switch", {
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
