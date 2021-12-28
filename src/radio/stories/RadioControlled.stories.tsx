import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/RadioControlledJsx";
import ts from "./templates/RadioControlledTsx";
import { RadioControlled } from "./RadioControlled.component";

type Meta = ComponentMeta<typeof RadioControlled>;
type Story = ComponentStoryObj<typeof RadioControlled>;

export default {
  title: "Forms/Radio/Controlled",
  component: RadioControlled,
  argTypes: {
    label: { control: { type: "text" } },
    description: { control: { type: "text" } },
    ...createControls("radio", {
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
