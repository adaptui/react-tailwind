import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/CheckboxGroupTriBoolStateJsx";
import ts from "./templates/CheckboxGroupTriBoolStateTsx";
import { CheckboxGroupTriBoolState } from "./CheckboxGroupTriBoolState.component";

type Meta = ComponentMeta<typeof CheckboxGroupTriBoolState>;
type Story = ComponentStoryObj<typeof CheckboxGroupTriBoolState>;

export default {
  title: "Forms/CheckboxGroup/TriBoolState",
  component: CheckboxGroupTriBoolState,
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
